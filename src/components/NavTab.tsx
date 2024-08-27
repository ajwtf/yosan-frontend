import { useCallback, useState } from 'react';

import { NavLink } from 'react-router-dom';

import { Card, Link, Page, Tabs } from '@shopify/polaris';

const NavTab = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'dashboard-1',
      content: (
        <NavLink to='/'>
          {/* <Icon source={DashboardIcon} /> */}
          <span>Dashboard</span>
        </NavLink>
      ),
      accessibilityLabel: 'Dashboard',
      panelID: 'dashboard-content-1',
    },
    {
      id: 'income-1',
      content: (
        <NavLink to='/income'>
          {/* <Icon source={IncomeIcon} /> */}
          <span>Income</span>
        </NavLink>
      ),
      panelID: 'income-content-1',
    },
    {
      id: 'expense-1',
      content: (
        <NavLink to='/expense'>
          {/* <Icon source={ExpenseIcon} /> */}
          <span>Expense</span>
        </NavLink>
      ),
      panelID: 'expense-content-1',
    },
    {
      id: 'budget-1',
      content: (
        <NavLink to='/budget'>
          {/* <Icon source={BudgetIcon} /> */}
          <span>Budget</span>
        </NavLink>
      ),
      panelID: 'budget-content-1',
    },
    {
      id: 'reports-1',
      content: (
        <NavLink to='/reports'>
          {/* {<Icon source={ReportsIcon} />} */}
          <span>Reports</span>
        </NavLink>
      ),
      panelID: 'reports-content-1',
    },
    {
      id: 'user-1',
      content: (
        <Link url='/user'>
          {/* <Icon source={UserIcon} /> */}
          <span>User</span>
        </Link>
      ),
      panelID: 'user-content-1',
    },
  ];

  return (
    <Page>
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} />
      </Card>
    </Page>
  );
};

export default NavTab;
