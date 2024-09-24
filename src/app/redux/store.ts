import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import theme from './theme/slice';
import chat from './chat/slice';
import window from './window/slice';
import { authReducer } from './auth/slice';
import { filtersReducer } from './filters/slice';
import { reviewsReducer } from './reviews/slice';
import { ordersReducer } from './orders/slice';
import { productsReducer } from './products/slice';

export const store = configureStore({
  reducer: {
    theme,
    chat,
    window,
    auth: authReducer,
    products: productsReducer,
    filters: filtersReducer,
    reviews: reviewsReducer,
    orders: ordersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
