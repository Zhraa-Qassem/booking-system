import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { updateProfile, signOut } from '../config/authFunctions'; 

const ProfileSettings = ({ user }) => {
  const [updateSuccess, setUpdateSuccess] = useState(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters'),
  });

  const handleUpdate = async (values) => {
    try {
      const message = await updateProfile(user, values);
      setUpdateSuccess(message);
    } catch (error) {
      setUpdateSuccess(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <Formik
        initialValues={{
          name: user.displayName || '',
          email: user.email || '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleUpdate}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label>Password (leave empty to keep the same)</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Update
            </button>
          </Form>
        )}
      </Formik>
      <div>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
      {updateSuccess && <div>{updateSuccess}</div>}
    </div>
  );
};

export default ProfileSettings;
