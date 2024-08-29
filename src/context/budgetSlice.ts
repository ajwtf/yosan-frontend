// handles budget goals, including setting and fetching the current budget

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchBudget, setBudget } from '../utils/api';

// Thunks
export const getBudget = createAsyncThunk('budget/fetchBudget', async () => {
  const { data } = await fetchBudget();
  return data;
});

export const createBudget = createAsyncThunk(
  'budget/setBudget',
  async (budgetData: any) => {
    const { data } = await setBudget(budgetData);
    return data;
  },
);

// Slice
const budgetSlice = createSlice({
  name: 'budget',
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBudget.fulfilled, (state, action) => action.payload);
    builder.addCase(createBudget.fulfilled, (state, action) => action.payload);
  },
});

export default budgetSlice.reducer;
