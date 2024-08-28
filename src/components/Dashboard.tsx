import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Card, DataTable, Page, Text } from '@shopify/polaris';

import { RootState } from '../context';
import { fetchExpenses } from '../context/expenseSlice';
import { fetchIncomes } from '../context/incomeSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const incomes = useSelector((state: RootState) => state.incomes);
  const expenses = useSelector((state: RootState) => state.expenses);

  useEffect(() => {
    dispatch(fetchIncomes());
    dispatch(fetchExpenses());
  }, [dispatch]);

  const currentIncome = incomes.reduce(
    (total, income) => total + income.amount,
    0,
  );
  const currentExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0,
  );
  const balance = currentIncome - currentExpenses;

  const rows = [
    // ['Income', `$${currentIncome.toFixed(2)}`],
    ['Income', `$${currentIncome.toLocaleString()}`],
    ['Expenses', `$${currentExpenses.toLocaleString()}`],
    ['Balance', `$${balance.toLocaleString()}`],
  ];

  return (
    <Page>
      <Text as={'h1'} variant='headingLg'>
        Dashboard
      </Text>

      <br />

      <Card>
        <Text as='h3' variant='headingMd'>
          Summary
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
