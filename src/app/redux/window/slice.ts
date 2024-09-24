import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WindowState } from './types';

const initialState: WindowState = {
  width: window.innerWidth,
  subscriptions: {},
};

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    setWindowWidth(state, action: PayloadAction<number>) {
      state.width = action.payload;
    },
    subscribeToWidth(state, action: PayloadAction<number>) {
      state.subscriptions[action.payload] = true;
    },
    unsubscribeFromWidth(state, action: PayloadAction<number>) {
      const { [action.payload]: _, ...rest } = state.subscriptions;
      state.subscriptions = rest;
    },
  },
});

export const { setWindowWidth, subscribeToWidth, unsubscribeFromWidth } = windowSlice.actions;

export default windowSlice.reducer;
