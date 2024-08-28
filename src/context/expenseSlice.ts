// manages expenses, with actions for fetching and adding new expenses

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from '../utils/api';

// Thunks
export const fetchExpenses = createAsyncThunk(
  'expenses/fetchExpenses',
  async () => {
    const { data } = await api.fetchExpenses();
    return data;
  },
);

export const addNewExpense = createAsyncThunk(
  'expenses/addNewExpense',
  async (expenseData: any) => {
    const { data } = await api.addExpense(expenseData);
    return data;
  },
);

// Slice
const expenseSlice = createSlice({
  name: 'expenses',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExpenses.fulfilled, (state, action) => action.payload);
    builder.addCase(addNewExpense.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default expenseSlice.reducer;
