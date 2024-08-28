import { useCallback, useState } from 'react';

import { Button, Card, Page, Tabs } from '@shopify/polaris';

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
        <Button url='/'>
          {/* <Icon source={DashboardIcon} /> */}
          <span>Dashboard</span>
        </Button>
      ),
      accessibilityLabel: 'Dashboard',
      panelID: 'dashboard-content-1',
    },
    {
      id: 'income-1',
      content: (
        <Button url='/income'>
          {/* <Icon source={IncomeIcon} /> */}
          <span>Income</span>
        </Button>
      ),
      panelID: 'income-content-1',
    },
    {
      id: 'expense-1',
      content: (
        <Button url='/expense'>
          {/* <Icon source={ExpenseIcon} /> */}
          <span>Expense</span>
        </Button>
      ),
      panelID: 'expense-content-1',
    },
    {
      id: 'budget-1',
      content: (
        <Button url='/budget'>
          {/* <Icon source={BudgetIcon} /> */}
          <span>Budget</span>
        </Button>
      ),
      panelID: 'budget-content-1',
    },
    {
      id: 'reports-1',
      content: (
        <Button url='/reports'>
          {/* {<Icon source={ReportsIcon} />} */}
          <span>Reports</span>
        </Button>
      ),
      panelID: 'reports-content-1',
    },
    {
      id: 'user-1',
      content: (
        <Button url='/user'>
          {/* <Icon source={UserIcon} /> */}
          <span>User</span>
        </Button>
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
