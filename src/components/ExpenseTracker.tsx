import { useEffect } from 'react';

import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Card,
  DropZone,
  FormLayout,
  Page,
  ResourceItem,
  ResourceList,
  Select,
  Text,
  TextField,
} from '@shopify/polaris';

import { RootState } from '../context';
import { addNewExpense, fetchExpenses } from '../context/expenseSlice';
import { expenseValidationSchema } from '../utils/validators';

const ExpenseTracker = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state: RootState) => state.expenses);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const categories = [
    { label: 'Rent', value: 'Rent' },
    { label: 'Food', value: 'Food' },
    { label: 'Entertainment', value: 'Entertainment' },
    { label: 'Touka', value: 'Touka' },
  ];

  const initialValues = {
    amount: '',
    category: '',
    date: '',
    description: '',
    receipt: null,
  };

  const handleAddExpense = (values: typeof initialValues) => {
    dispatch(addNewExpense(values));
  };

  return (
    <Page>
      <Text as={'h1'} variant='headingLg'>
        Expense Tracker
      </Text>

      <br />

      <Card>
        <Text as='h3' variant='headingMd'>
          Add Expense
        </Text>

        <br />

        <Formik
          initialValues={initialValues}
          validationSchema={expenseValidationSchema}
          onSubmit={handleAddExpense}
        >
          {({ values, handleChange, handleBlur, setFieldValue }) => (
            <Form>
              <FormLayout>
                <TextField
                  label='Date'
                  value={values.date}
                  onChange={handleChange('date')}
                  onBlur={handleBlur('date')}
                  type='date'
                  autoComplete='off'
                />

                <Select
                  label='Category'
                  options={categories}
                  value={values.category}
                  onChange={handleChange('category')}
                  onBlur={handleBlur('category')}
                />

                <TextField
                  label='Description'
                  value={values.description}
                  onChange={handleChange('description')}
                  onBlur={handleBlur('description')}
                  autoComplete='off'
                />

                <TextField
                  label='Amount'
                  value={values.amount}
                  onChange={handleChange('amount')}
                  onBlur={handleBlur('amount')}
                  type='number'
                  autoComplete='off'
                />

                {/* <br /> */}
                {/* <Divider /> */}

                <Text as='span' variant='bodyMd'>
                  Receipt
                </Text>
                <DropZone
                  onDrop={(_, acceptedFiles) =>
                    setFieldValue('receipt', acceptedFiles[0])
                  }
                >
                  {values.receipt ? (
                    <DropZone.FileUpload actionTitle={values.receipt.name} />
                  ) : (
                    <DropZone.FileUpload />
                  )}
                </DropZone>

                <Button submit variant='primary'>
                  Add Expense
                </Button>
              </FormLayout>
            </Form>
          )}
        </Formik>
      </Card>

      <br />

      <Card>
        <Text as='h3' variant='headingMd'>
          Expense Detail
        </Text>

        <br />

        <ResourceList
          resourceName={{ singular: 'expense', plural: 'expenses' }}
          items={expenses}
          renderItem={(item) => {
            const { id, amount, category, date, description } = item;

            return (
              <ResourceItem
                id={id}
                accessibilityLabel={`View details for ${description}`}
                onClick={() =>
                  console.log(
                    `Expense Detail: ${id} | ${date} | ${category} | ${description} | ${amount}`,
                  )
                }
              >
                {/* <Text as='h5'>{date}</Text> */}
                <Text as='h5'>{new Date(date).toLocaleDateString()}</Text>
                <Text as='h5'>Category: {category}</Text>
                <Text as='h5'>Description: {description}</Text>
                <Text as='h5'>Amount: {amount}</Text>
              </ResourceItem>
            );
          }}
        />
      </Card>
    </Page>
  );
};

export default ExpenseTracker;

// const mockExpenseEntries = [
//   {
//     id: '1',
//     amount: '$1500',
//     category: 'Rent',
//     date: '2024-08-01',
//     description: '2024-08-01 Rent',
//   },
//   {
//     id: '2',
//     amount: '$300',
//     category: 'Food',
//     date: '2024-08-02',
//     description: 'Costco',
//   },
//   {
//     id: '3',
//     amount: '$4500',
//     category: 'Touka',
//     date: '2024-08-12',
//     description: 'Touka mouth surgery',
//   },
// ];
