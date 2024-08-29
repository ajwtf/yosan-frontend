// handles the state for incomes, including fetching and adding new incomes

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { addIncome, fetchIncomes } from '../utils/api';

// Thunks
export const getIncomes = createAsyncThunk('incomes/fetchIncomes', async () => {
  const { data } = await fetchIncomes();
  return data;
});

export const createIncome = createAsyncThunk(
  'incomes/addIncome',
  async (incomeData: any) => {
    const { data } = await addIncome(incomeData);
    return data;
  },
);

// Slice
const incomeSlice = createSlice({
  name: 'incomes',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getIncomes.fulfilled, (state, action) => action.payload);
    builder.addCase(createIncome.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default incomeSlice.reducer;
