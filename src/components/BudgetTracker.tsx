import { useEffect } from 'react';

import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Card,
  FormLayout,
  Page,
  ProgressBar,
  Text,
  TextField,
} from '@shopify/polaris';

import { RootState } from '../context';
import { fetchBudget, setNewBudget } from '../context/budgetSlice';
import { fetchExpenses } from '../context/expenseSlice';
import { fetchIncomes } from '../context/incomeSlice';
import { budgetValidationSchema } from '../utils/validators';

const BudgetTracker = () => {
  const dispatch = useDispatch();
  const budget = useSelector((state: RootState) => state.budget);
  const incomes = useSelector((state: RootState) => state.incomes);
  const expenses = useSelector((state: RootState) => state.expenses);

  useEffect(() => {
    dispatch(fetchBudget());
    dispatch(fetchIncomes());
    dispatch(fetchExpenses());
  }, [dispatch]);

  //   currentIncome and currentExpenses are calculated using the reduce method on the fetched incomes and expenses arrays from the Redux store
  const currentIncome = incomes.reduce(
    (total, income) => total + income.amount,
    0,
  );
  const currentExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0,
  );

  const initialValues = {
    totalIncomeGoal: budget?.totalIncomeGoal || '',
    totalExpenseGoal: budget?.totalExpenseGoal || '',
  };

  const handleSetBudget = (values: typeof initialValues) => {
    dispatch(setNewBudget(values));
  };

  //   incomeProgress and expenseProgress are calculated based on the goals set in the form and the actual totals
  const incomeProgress =
    (currentIncome / parseFloat(initialValues.totalIncomeGoal || '1')) * 100;
  const expenseProgress =
    (currentExpenses / parseFloat(initialValues.totalExpenseGoal || '1')) * 100;

  /* const currentIncome = 3000; // Mock data
  const currentExpenses = 1500; // Mock data */

  return (
    <Page>
      <Text as={'h1'} variant='headingLg'>
        Budget Tracker
      </Text>

      <br />

      <Card>
        <Text as='h3' variant='headingMd'>
          Add Budget
        </Text>

        <br />

        <Formik
          initialValues={initialValues}
          validationSchema={budgetValidationSchema}
          onSubmit={handleSetBudget}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <FormLayout>
                <TextField
                  label='Total Income Goal'
                  value={values.totalIncomeGoal}
                  onChange={handleChange('totalIncomeGoal')}
                  onBlur={handleBlur('totalIncomeGoal')}
                  type='number'
                  autoComplete='off'
                />
                <TextField
                  label='Total Expense Goal'
                  value={values.totalExpenseGoal}
                  onChange={handleChange('totalExpenseGoal')}
                  onBlur={handleBlur('totalExpenseGoal')}
                  type='number'
                  autoComplete='off'
                />
                <Button submit variant='primary'>
                  Set Budget
                </Button>
              </FormLayout>
            </Form>
          )}
        </Formik>
      </Card>

      <br />

      <Card>
        <Text as='h3' variant='headingMd'>
          Budget Progress
        </Text>

        <br />

        {/* <Text as='h5'>Income Progress</Text> */}
        <Text as='h5'>Current Income: ${currentIncome}</Text>
        <ProgressBar progress={incomeProgress} />

        <br />

        {/* <Text as='h5'>Expense Progress</Text> */}
        <Text as='h5'>Current Expense: ${currentExpenses}</Text>
        <ProgressBar progress={expenseProgress} />
      </Card>
    </Page>
  );
};

export default BudgetTracker;
