import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import {
  Avatar,
  Button,
  Card,
  FormLayout,
  Page,
  Text,
  TextField,
} from '@shopify/polaris';

import { RootState } from '../context';
import { setUser } from '../context/userSlice';
import { userProfileValidationSchema } from '../utils/validators';

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const initialValues = {
    username: user?.username || '',
    email: user?.email || '',
  };

  const handleSaveProfile = (values: typeof initialValues) => {
    dispatch(setUser(values));
  };

  return (
    <Page>
      <Text as={'h1'} variant='headingLg'>
        {user.username || 'User Profile'}
      </Text>

      <br />

      <Card>
        <Text as='h3' variant='headingMd'>
          Edit Profile
        </Text>

        <Formik
          initialValues={initialValues}
          validationSchema={userProfileValidationSchema}
          onSubmit={handleSaveProfile}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <FormLayout>
                <Avatar size='sm' customer name={values.username} />
                <TextField
                  type='text'
                  label='Username'
                  value={values.username}
                  onChange={handleChange('username')}
                  onBlur={handleBlur('username')}
                  autoComplete='off'
                />

                <TextField
                  type='email'
                  label='Email'
                  value={values.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  autoComplete='off'
                />

                <Button submit variant='primary'>
                  Save Profile
                </Button>
              </FormLayout>
            </Form>
          )}
        </Formik>
      </Card>
    </Page>
  );
};
export default UserProfile;
