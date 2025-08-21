import { createAsyncThunk } from '@reduxjs/toolkit';

export const subscribe = createAsyncThunk('subscribe', async (email: string, { rejectWithValue }) => {
  try {
    const response = await fetch('https://io-task.onrender.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          email,
        },
      }),
    });
    const data = await response.json();

    return data.email;
  } catch (error: unknown) {
    console.log(error);
    rejectWithValue(error);
  }
});
