// contains Yup validation schemas for forms, ensuring data integrity and user-friendly error messages

import * as Yup from 'yup';

export const incomeValidationSchema = Yup.object({
  amount: Yup.number()
    .required('Amount is required')
    .positive('Amount must be positive'),
  category: Yup.string().required('Category is required'),
  date: Yup.date().required('Date is required'),
  description: Yup.string().required('Description is required'),
});

export const expenseValidationSchema = Yup.object({
  amount: Yup.number()
    .required('Amount is required')
    .positive('Amount must be positive'),
  category: Yup.string().required('Category is required'),
  date: Yup.date().required('Date is required'),
  description: Yup.string().required('Description is required'),
  receipt: Yup.mixed().notRequired(),
});

export const budgetValidationSchema = Yup.object({
  totalIncomeGoal: Yup.number()
    .required('Total Income Goal is required')
    .positive('Total Income Goal must be positive'),
  totalExpenseGoal: Yup.number()
    .required('Total Expense Goal is required')
    .positive('Total Expense Goal must be positive'),
});

export const userProfileValidationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  //   password: Yup.string().required('Password is required'),
});
