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

const Reports = () => {
  const data = [
    { name: 'Jan', income: 4000, expense: 2300 },
    { name: 'Feb', income: 4000, expense: 1830 },
    { name: 'Mar', income: 4000, expense: 4200 },
    { name: 'Apr', income: 4000, expense: 3000 },
    { name: 'May', income: 4000, expense: 2700 },
  ];

  return (
    <Page>
      <Card>
        <Text as='h3' variant='headingMd'>
          Reports
        </Text>

        <ResponsiveContainer width='100%' height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='income' stroke='#8884d8' />
            <Line type='monotone' dataKey='expense' stroke='#82ca9d' />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Page>
  );
};

export default Reports;
