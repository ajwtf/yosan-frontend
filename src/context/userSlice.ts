// manages user profile information, allowing the profile to be updated

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Initial State
const initialState = {
  username: '',
  email: '',
};

// Slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ username: string; email: string }>,
    ) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
