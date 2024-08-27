import { ReactNode } from 'react';

import { Provider } from 'react-redux';

import {
  configureStore,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import * as api from '../utils/api';

const initialState = {
  user: null,
  incomes: [],
  expenses: [],
  budget: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState.user,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => action.payload,
  },
});

export const fetchIncomes = createAsyncThunk(
  'incomes/fetchIncomes',
  async () => {
    const { data } = await api.fetchIncomes();
    return data;
  },
);

export const addNewIncome = createAsyncThunk(
  'incomes/addNewIncome',
  async (incomeData: any) => {
    const { data } = await api.addIncome(incomeData);
    return data;
  },
);

const incomeSlice = createSlice({
  // initialState: initialState.incomes,
  /*   addIncome: (state, action: PayloadAction<any>) => {
        state.push(action.payload);
        },
        setIncomes: (state, action: PayloadAction<any[]>) => action.payload, */
  name: 'incomes',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIncomes.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addNewIncome.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: initialState.expenses,
  reducers: {
    addExpense: (state, action: PayloadAction<any>) => {
      state.push(action.payload);
    },
    setExpenses: (state, action: PayloadAction<any[]>) => action.payload,
  },
});

const budgetSlice = createSlice({
  name: 'budget',
  initialState: initialState.budget,
  reducers: {
    setBudget: (state, action: PayloadAction<any>) => action.payload,
  },
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    incomes: incomeSlice.reducer,
    expenses: expenseSlice.reducer,
    budget: budgetSlice.reducer,
  },
});

export const { setUser } = userSlice.actions;
export const { addIncome, setIncomes } = incomeSlice.actions;
export const { addExpense, setExpenses } = expenseSlice.actions;
export const { setBudget } = budgetSlice.actions;

export default incomeSlice.reducer;

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
