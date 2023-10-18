import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth, googleProvider } from '../config/firebase-config';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Button from './Button';
import '../App.css';
import '../responsive.css'

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

function SignUpCard() {
  const navigate = useNavigate();

  const handleSignUp = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        // Handle the email already in use error
      } else {
        // Handle other errors
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (err) {
      // Handle the error
    }
  };

  return (
    <div className="signup-card">
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSignUp}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="sign-input">
              <Field type="text" name="firstName" placeholder="First Name..." />
              <ErrorMessage name="firstName" component="div" className="error" />
            </div>
            <hr />
            <div className="sign-input">
              <Field type="text" name="lastName" placeholder="Last Name..." />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>
            <hr />
            <div className="sign-input">
              <Field type="email" name="email" placeholder="Email..." />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <hr />
            <div className="sign-input">
              <Field type="password" name="password" placeholder="Password..." />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <hr />
            <div className="sign-input">
              <Field type="password" name="confirmPassword" placeholder="Confirm Password..." />
              <ErrorMessage name="confirmPassword" component="div" className="error" />
            </div>
            <hr />
            <div className='btn-or'>
              <Button
                label={isSubmitting ? 'Signing up...' : 'Sign Up'}
                className="btn"
                type="submit"
                disabled={isSubmitting}
              />
              <p>or</p>
              <Button
                label={isSubmitting ? 'Signing up...' : 'Sign up with Google'}
                className="btn"
                onClick={handleGoogleSignIn}
                disabled={isSubmitting}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUpCard;
