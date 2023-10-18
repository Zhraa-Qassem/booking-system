import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth } from '../config/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Button from './Button';
import '../App.css';
import '../responsive.css'

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Invalid email'),
  password: Yup.string().required('Password is required'),
});

function SignCard() {
  const navigate = useNavigate();

  const handleSignIn = async (values, { setSubmitting, setErrors }) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      navigate("/"); // Redirect to the home page on successful login.
    } catch (error) {
        console.error("Firebase Authentication Error:", error);
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          setErrors({ submit: 'Invalid email or password' });
        } else {
          setErrors({ submit: error.message });
        }
      } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <div className="sign-card">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSignIn}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="sign-input">
              <Field type="email" name="email" placeholder="Email..." />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <hr></hr>
            <div className="sign-input">
              <Field type="password" name="password" placeholder="Password..." />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <hr></hr>
            <div className="btn-or">
            {isSubmitting ? (
              <Button label="Signing in..." className="btn" disabled />
            ) : (
              <Button type="submit" label="Sign in" className="btn"  />
            )}
            
              <p>Don't have an account?</p>
              <Button
                label="Create an account"
                className="btn"
                onClick={() => navigate('/SignUp')}
              />
            </div>
            <ErrorMessage name="submit" component="div" className="error" />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignCard;
