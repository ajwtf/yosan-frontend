import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { loginUser, registerUser } from '../utils/api';

interface AuthState {
  user: { username: string; email: string } | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Thunks
export const register = createAsyncThunk(
  'auth/register',
  async (formData: any, { rejectWithValue }) => {
    try {
      const { data } = await registerUser(formData);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (formData: any, { rejectWithValue }) => {
    try {
      const { data } = await loginUser(formData);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('profile');
    },
    loadUserFromStorage: (state) => {
      const storedProfile = localStorage.getItem('profile');
      if (storedProfile) {
        const profile = JSON.parse(storedProfile);
        state.user = profile.user;
        state.token = profile.token;
        state.isAuthenticated = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem('profile', JSON.stringify(action.payload));
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem('profile', JSON.stringify(action.payload));
      });
  },
});

export const { logout, loadUserFromStorage } = authSlice.actions;
export default authSlice.reducer;
