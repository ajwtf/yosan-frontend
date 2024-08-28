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

  const data = incomes.map((income, index) => ({
    name: new Date(income.date).toLocaleDateString(),
    income: income.amount,
    expenses: expenses[index].amount || 0,
  }));

  return (
    <Page>
      <Text as={'h1'} variant='headingLg'>
        Reports
      </Text>

      <br />

      <Card>
        <Text as='h3' variant='headingMd'>
          Income vs. Expense
        </Text>

        <ResponsiveContainer width='100%' height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray='3 3' />

            <XAxis dataKey='name' />
            <YAxis />

            <Tooltip />
            <Legend />

            <Line type='monotone' dataKey='income' stroke='#0F9D58' />
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
