import { useState } from 'react';

import {
  Avatar,
  Button,
  Card,
  FormLayout,
  Page,
  TextField,
} from '@shopify/polaris';

const UserProfile = () => {
  const [username, setUsername] = useState('Touka');
  const [email, setEmail] = useState('touka@gmail.com');

  const handleSaveProfile = () => {
    // Handle profile saving logic
  };

  return (
    <Page>
      <Card>
        <FormLayout>
          <Avatar size='sm' customer name={username} />

          <TextField
            // type='text'
            label='Username'
            value={username}
            onChange={setUsername}
            autoComplete='off'
          />

          <TextField
            type='email'
            label='Email'
            value={email}
            onChange={setEmail}
            autoComplete='off'
          />

          <Button onClick={handleSaveProfile}>Save Profile</Button>
        </FormLayout>
      </Card>
    </Page>
  );
};
export default UserProfile;
