import { Card, Page, Text } from '@shopify/polaris';

import Register from './Register';

const Landing = () => {
  return (
    <Page>
      <Card>
        <Text as={'h1'} variant='headingLg'>
          Landing
        </Text>

        <br />

        <Text as={'h3'} variant='headingMd'>
          Welcome to your budget app!
        </Text>

        <br />

        <Register />
      </Card>
    </Page>
  );
};

export default Landing;
