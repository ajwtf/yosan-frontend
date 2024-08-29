import { useEffect } from 'react';

import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import {
    Button,
    Card,
    FormLayout,
    Page,
    ResourceItem,
    ResourceList,
    Select,
    Text,
    TextField,
} from '@shopify/polaris';

import { RootState } from '../context';
import { createIncome, getIncomes } from '../context/incomeSlice';
import { incomeValidationSchema } from '../utils/validators';

const IncomeTracker = () => {
  const dispatch = useDispatch();
  const incomes = useSelector((state: RootState) => state.incomes);

  useEffect(() => {
    dispatch(getIncomes());
  }, [dispatch]);

  const categories = [
    { label: 'Salary', value: 'Salary' },
    { label: 'Freelance', value: 'Freelance' },
    { label: 'Investments', value: 'Investments' },
    { label: 'Goodwill', value: 'Goodwill' },
  ];

  const initialValues = {
    amount: '',
    category: 'Salary',
    date: '',
    description: '',
  };

  // Handle form submission logic
  const handleAddIncome = async (values: typeof initialValues) => {
    try {
      await dispatch(createIncome(values)).unwrap();
      dispatch(getIncomes()); // Refresh the income list
    } catch (error) {
      console.error('Failed to add income:', error);
    }
  };

  return (
    <Page>
      {/* <Autocomplete
        options={options}
        selected={selectedOptions}
        onSelect={updateSelection}
        emptyState={emptyState}
        loading={loading}
        textField={textField}
      /> */}

      <Text as={'h1'} variant='headingLg'>
        Income Tracker
      </Text>

      <br />

      <Card>
        <Text as='h3' variant='headingMd'>
          Add Income
        </Text>

        <br />

        <Formik
          initialValues={initialValues}
          validationSchema={incomeValidationSchema}
          onSubmit={handleAddIncome}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <FormLayout>
                <TextField
                  label='Date'
                  value={values.date}
                  onChange={handleChange('date')}
                  onBlur={handleBlur('date')}
                  error={touched.date && errors.date ? errors.date : ''}
                  type='date'
                  autoComplete='off'
                />

                <Select
                  label='Category'
                  options={categories}
                  value={values.category}
                  onChange={handleChange('category')}
                  onBlur={handleBlur('category')}
                  error={
                    touched.category && errors.category ? errors.category : ''
                  }
                />

                <TextField
                  label='Description'
                  value={values.description}
                  onChange={handleChange('description')}
                  onBlur={handleBlur('description')}
                  error={
                    touched.description && errors.description
                      ? errors.description
                      : ''
                  }
                  type='text'
                  autoComplete='off'
                />

                <TextField
                  label='Amount'
                  value={values.amount}
                  onChange={handleChange('amount')}
                  onBlur={handleBlur('amount')}
                  error={touched.amount && errors.amount ? errors.amount : ''}
                  type='number'
                  autoComplete='off'
                />

                <Button submit variant='primary'>
                  Add Income
                </Button>
              </FormLayout>
            </Form>
          )}
        </Formik>
      </Card>

      <br />

      <Card>
        <Text as='h3' variant='headingMd'>
          Income Detail
        </Text>

        <br />

        <ResourceList
          resourceName={{ singular: 'income', plural: 'incomes' }}
          items={incomes}
          renderItem={(item) => {
            const { id, amount, category, date, description } = item;
            return (
              <ResourceItem
                id={id}
                accessibilityLabel={`View details for ${description}`}
                onClick={() =>
                  console.log(
                    `Income Detail: ${id} | ${date} | ${category} | ${description} | ${amount}`,
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

export default IncomeTracker;
