import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, InlineStack, Page } from '@shopify/polaris';

import { logout } from '../context/authSlice';

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Page>
      <InlineStack align='center' gap='100'>
        <Button
          //   icon={DashboardIcon}
          onClick={() => navigate('/dashboard')}
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

        <Button
          //   icon={LogoutIcon}
          onClick={handleLogout}
          variant='secondary'
        >
          Logout
        </Button>
      </InlineStack>
    </Page>
  );
};

export default Nav;
