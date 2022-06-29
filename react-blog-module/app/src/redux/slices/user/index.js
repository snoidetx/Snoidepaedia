import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isFetching: false,
  login: false,
  error: null,
}

export const userSlice = createSlice({
  name: 'user-login-status',
  initialState,
  reducers: {
    REQUEST: (state) => ({
      ...state,
      isFetching: true,
      error: null,
    }),
    SUCCESS: (state) => ({
      ...state,
      login: true,
      isFetching: false,
      error: null,
    }),
    FAILURE: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
  }
});

export default userSlice.reducer;
