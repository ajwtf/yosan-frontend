import { useCallback, useState } from 'react';

import { Box, Card, Page, Tabs, Text } from '@shopify/polaris';

const NavTab = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'dashboard-1',
      content: 'Dashboard',
      accessibilityLabel: 'Dashboard',
      panelID: 'dashboard-content-1',
    },
    {
      id: 'income-1',
      content: 'Income',
      panelID: 'income-content-1',
    },
    {
      id: 'expense-1',
      content: 'Expense',
      panelID: 'expense-content-1',
    },
    {
      id: 'budget-1',
      content: 'Budget',
      panelID: 'budget-content-1',
    },
    {
      id: 'reports-1',
      content: 'Reports',
      panelID: 'reports-content-1',
    },
    {
      id: 'user-1',
      content: 'User',
      panelID: 'user-content-1',
    },
  ];

  return (
    <Page>
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          <Box paddingBlockStart='200'>
            <Text as='h3' variant='headingMd'>
              {tabs[selected].content}
            </Text>
          </Box>

          <Text as='h5'>Tab Index: {selected}</Text>
        </Tabs>
      </Card>
    </Page>
  );
};

export default NavTab;
