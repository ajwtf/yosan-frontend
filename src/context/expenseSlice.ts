// manages expenses, with actions for fetching and adding new expenses

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { addExpense, fetchExpenses } from '../utils/api';

// Thunks
export const getExpenses = createAsyncThunk(
  'expenses/fetchExpenses',
  async () => {
    const { data } = await fetchExpenses();
    return data;
  },
);

export const createExpense = createAsyncThunk(
  'expenses/addExpense',
  async (expenseData: any) => {
    const { data } = await addExpense(expenseData);
    return data;
  },
);

// Slice
const expenseSlice = createSlice({
  name: 'expenses',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExpenses.fulfilled, (state, action) => action.payload);
    builder.addCase(createExpense.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default expenseSlice.reducer;
