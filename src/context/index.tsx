import { ReactNode } from 'react';

import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import budgetReducer from './budgetSlice';
import expenseReducer from './expenseSlice';
import incomeReducer from './incomeSlice';
import userReducer from './userSlice';

// Configure Redux store
const store = configureStore({
  reducer: {
    user: userReducer,
    incomes: incomeReducer,
    expenses: expenseReducer,
    budget: budgetReducer,
    auth: authReducer,
  },
});

// Define StoreProvider component that wraps the entire app
export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

// Expore the store
// Types derived from the store configuration. These types can be used throughout the app to ensure type safety when interacting with the Redux store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default { store };
