// handles the state for incomes, including fetching and adding new incomes

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from '../utils/api';

// Thunks
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

// Slice
const incomeSlice = createSlice({
  name: 'incomes',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIncomes.fulfilled, (state, action) => action.payload);
    builder.addCase(addNewIncome.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default incomeSlice.reducer;
