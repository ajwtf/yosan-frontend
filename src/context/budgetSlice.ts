// handles budget goals, including setting and fetching the current budget

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from '../utils/api';

// Thunks
export const fetchBudget = createAsyncThunk('budget/fetchBudget', async () => {
  const { data } = await api.fetchBudget();
  return data;
});

export const setNewBudget = createAsyncThunk(
  'budget/setNewBudget',
  async (budgetData: any) => {
    const { data } = await api.setBudget(budgetData);
    return data;
  },
);

// Slice
const budgetSlice = createSlice({
  name: 'budget',
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBudget.fulfilled, (state, action) => action.payload);
    builder.addCase(setNewBudget.fulfilled, (state, action) => action.payload);
  },
});

export default budgetSlice.reducer;
