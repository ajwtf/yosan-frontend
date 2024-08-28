import { useNavigate } from 'react-router-dom';

import { Button, InlineStack, Page, Text } from '@shopify/polaris';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Text as='h1' variant='headingLg'>
        Yosan
      </Text>

      <InlineStack align='center' gap='100'>
        <Button
          //   icon={DashboardIcon}
          onClick={() => navigate('/')}
          variant='primary'
        >
          Dashboard
        </Button>
        <Button
          //   icon={IncomeIcon}
          onClick={() => navigate('/income')}
          variant='primary'
        >
          Income
        </Button>
        <Button
          //   icon={ExpenseIcon}
          onClick={() => navigate('/expense')}
          variant='primary'
        >
          Expense
        </Button>
        <Button
          //   icon={BudgetIcon}
          onClick={() => navigate('/budget')}
          variant='primary'
        >
          Budget
        </Button>
        <Button
          //   icon={ReportsIcon}
          onClick={() => navigate('/reports')}
          variant='primary'
        >
          Reports
        </Button>
        <Button
          //   icon={UserIcon}
          onClick={() => navigate('/user')}
          variant='primary'
        >
          User
        </Button>
      </InlineStack>
    </Page>
  );
};

export default Nav;
