import { useSelector } from 'react-redux';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { Card, Page, Text } from '@shopify/polaris';

import { RootState } from '../context';

const Reports = () => {
  // fetches income and expense data from the Redux store using useSelector
  const incomes = useSelector((state: RootState) => state.incomes);
  const expenses = useSelector((state: RootState) => state.expenses);

  const incomeData = incomes.map((income, index) => ({
    incomeDate: new Date(income.date).toLocaleDateString(),
    income: income.amount,
    /* expense: expenses[index].amount || 0, */
  }));

  const expenseData = expenses.map((expense, index) => ({
    expenseDate: new Date(expense.date).toLocaleDateString(),
    // income: income.amount,
    expense: expense.amount,
  }));

  return (
    <Page>
      <Text as='h1' variant='headingLg'>
        Reports
      </Text>

      <br />

      <Card>
        <Text as='h3' variant='headingMd'>
          Income vs. Expense
        </Text>

        <br />

        <ResponsiveContainer width='100%' height={300}>
          <LineChart data={incomeData}>
            <CartesianGrid strokeDasharray='3 3' />

            <XAxis dataKey='incomeDate' />
            <YAxis />

            <Tooltip />
            <Legend />

            <Line type='monotone' dataKey='income' stroke='#0F9D58' />
            {/* <Line type='monotone' dataKey='expense' stroke='#DB4437' /> */}
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width='100%' height={300}>
          <LineChart data={expenseData}>
            <CartesianGrid strokeDasharray='3 3' />

            <XAxis dataKey='expenseDate' />
            <YAxis />

            <Tooltip />
            <Legend />

            {/* <Line type='monotone' dataKey='income' stroke='#0F9D58' /> */}
            <Line type='monotone' dataKey='expense' stroke='#DB4437' />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Page>
  );
};

export default Reports;

// const data = [
//   { name: 'Jan', income: 4000, expense: 2300 },
//   { name: 'Feb', income: 2500, expense: 1830 },
//   { name: 'Mar', income: 3000, expense: 4200 },
//   { name: 'Apr', income: 5000, expense: 3000 },
//   { name: 'May', income: 1500, expense: 2700 },
// ];
