import { Card, DataTable, Page, Text } from '@shopify/polaris';

const Dashboard = () => {
  // Mock data
  const rows = [
    ['Income', '$5000'],
    ['Expenses', '$3000'],
    ['Balance', '$2000'],
  ];

  return (
    <Page>
      <Card>
        <Text as={'h1'} variant='headingLg'>
          Dashboard
        </Text>

        <DataTable
          columnContentTypes={['text', 'numeric']}
          headings={['Type', 'Amount']}
          rows={rows}
        />
      </Card>
    </Page>
  );
};

export default Dashboard;
