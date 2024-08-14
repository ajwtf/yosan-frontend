import { useState } from 'react';

import {
  Button,
  Card,
  FormLayout,
  Page,
  ProgressBar,
  Text,
  TextField,
} from '@shopify/polaris';

const BudgetPlanner = () => {
  const [totalIncomeGoal, setTotalIncomeGoal] = useState('');
  const [totalExpenseGoal, setTotalExpenseGoal] = useState('');

  // Mock data
  const currentIncome = 3000;
  const currentExpense = 1300;

  const incomeProgress =
    (currentIncome / parseFloat(totalIncomeGoal || '1')) * 100;
  const expenseProgress =
    (currentExpense / parseFloat(totalExpenseGoal || '1')) * 100;

  const handleSetBudget = () => {
    // Handle budget goal setting logic
  };

  return (
    <Page>
      <Card>
        <FormLayout>
          <TextField
            label='Total Income Goal'
            value={totalIncomeGoal}
            onChange={setTotalIncomeGoal}
            type='number'
            autoComplete='off'
          />
          <TextField
            label='Total Expense Goal'
            value={totalExpenseGoal}
            onChange={setTotalExpenseGoal}
            type='number'
            autoComplete='off'
          />

          <Button onClick={handleSetBudget}>Set Budget</Button>
        </FormLayout>
      </Card>

      <Card>
        <Text as='h3' variant='headingMd'>
          Budget Progress
        </Text>

        <Text as='h5'>Income Progress</Text>
        <ProgressBar progress={incomeProgress} />

        <Text as='h5'>Expense Progress</Text>
        <ProgressBar progress={expenseProgress} />
      </Card>
    </Page>
  );
};

export default BudgetPlanner;
