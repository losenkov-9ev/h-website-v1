import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ELoadingStatus } from '../../@types/types';
import { IOrdersState, IResponse } from './types';
import { fetchOrders, postOrder } from './thunks';

const initialState: IOrdersState = {
  data: {
    meta: {},
    items: [],
  },
  status: ELoadingStatus.loading,
  paymentStatus: ELoadingStatus.loading,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state: IOrdersState) => {
        state.status = ELoadingStatus.loading;
        state.data = {
          meta: {},
          items: [],
        };
      })
      .addCase(fetchOrders.fulfilled, (state: IOrdersState, action: PayloadAction<IResponse>) => {
        state.status = ELoadingStatus.fulfilled;
        state.data = action.payload;
      })
      .addCase(fetchOrders.rejected, (state: IOrdersState) => {
        state.status = ELoadingStatus.rejected;
        state.data = {
          meta: {},
          items: [],
        };
      })
      .addCase(postOrder.pending, (state: IOrdersState) => {
        state.paymentStatus = ELoadingStatus.loading;
      })
      .addCase(postOrder.fulfilled, (state: IOrdersState) => {
        state.paymentStatus = ELoadingStatus.fulfilled;
      })
      .addCase(postOrder.rejected, (state: IOrdersState) => {
        state.paymentStatus = ELoadingStatus.rejected;
      });
  },
});

export const ordersReducer = ordersSlice.reducer;
