import { createSlice } from '@reduxjs/toolkit';
import { subscribe } from '../thunks/subscribe';

type initialStateType = {
  isLoading: boolean;
  success: boolean;
  error: string | null;
};

const initialState: initialStateType = {
  isLoading: false,
  success: false,
  error: null,
};

const subscribeSLice = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subscribe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(subscribe.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
      })
      .addCase(subscribe.rejected, (state) => {
        state.isLoading = false;
        state.success = false;
        state.error = 'Something went wrong while subscribing.';
      });
  },
});

export default subscribeSLice.reducer;
