import React from 'react';

import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Card,
  FormLayout,
  Page,
  Text,
  TextField,
} from '@shopify/polaris';

import { login } from '../context/authSlice';
import { loginValidationSchema } from '../utils/validators';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleLogin = async (values: typeof initialValues) => {
    try {
      await dispatch(login(values)).unwrap();
      console.log('Login successful');
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <Page>
      <Card>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleLogin}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <FormLayout>
                <TextField
                  label='Email'
                  value={values.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={touched.email && errors.email ? errors.email : ''}
                  type='email'
                  autoComplete='off'
                />
                <TextField
                  label='Password'
                  value={values.password}
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                  error={
                    touched.password && errors.password ? errors.password : ''
                  }
                  type='password'
                  autoComplete='off'
                />

                <Button submit variant='primary'>
                  Login
                </Button>
              </FormLayout>
            </Form>
          )}
        </Formik>

        <br />

        <Text as='h3' variant='bodyMd'>
          Don't have an account?{' '}
          <Button onClick={() => navigate('/register')}>Register</Button>
        </Text>
      </Card>
    </Page>
  );
};

export default Login;
