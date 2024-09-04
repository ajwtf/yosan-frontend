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

import { register } from '../context/authSlice';
import { registerValidationSchema } from '../utils/validators';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleRegister = async (values: typeof initialValues) => {
    try {
      await dispatch(register(values)).unwrap();
      console.log('Registration successful');
      navigate('/');
    } catch (error: any) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Page>
      <Text as='h1' variant='headingLg'>
        Register
      </Text>

      <br />

      <Card>
        <Formik
          initialValues={initialValues}
          validationSchema={registerValidationSchema}
          onSubmit={handleRegister}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <FormLayout>
                <TextField
                  label='Username'
                  value={values.username}
                  onChange={handleChange('username')}
                  onBlur={handleBlur('username')}
                  error={
                    touched.username && errors.username ? errors.username : ''
                  }
                  autoComplete='off'
                />
                <TextField
                  label='Email'
                  value={values.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={touched.email && errors.email ? errors.email : ''}
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
                  Register
                </Button>
              </FormLayout>
            </Form>
          )}
        </Formik>

        <br />

        <Text as='h3' variant='bodyMd'>
          Already have an account?{' '}
          <Button onClick={() => navigate('/login')}>Login</Button>
        </Text>
      </Card>
    </Page>
  );
};

export default Register;
