import { RootState } from '../store';

export const selectOrders = (state: RootState) => state.orders.data;
export const selectOrdersStatus = (state: RootState) => state.orders.status;
export const selectOrdersMeta = (state: RootState) => state.orders.data.meta;
export const selectOrderPaymentStatus = (state: RootState) => state.orders.paymentStatus;
