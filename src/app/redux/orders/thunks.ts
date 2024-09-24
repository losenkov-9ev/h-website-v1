import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { fetchOrdersParams, IOrderType, IPostOrder } from './types';
import { CardProps } from '../../../features/Card/context/types';
import { RootState } from '../store';

const createFilterByIDs = (data: IOrderType[]) => {
  return data.map((obj) => `&id[]=${obj.productId}`).join('');
};

export const fetchOrders = createAsyncThunk(
  'orders/fetchProducts',
  async ({ page, limit }: fetchOrdersParams, { getState }) => {
    const state = getState() as RootState;
    const id = state.auth.user.data.id || null;

    const { data: ordersData } = await axios.get(`/orders${id ? `?user_id=${id}` : ''}`);

    const { data } = await axios.get(
      `/products?page=${page}&limit=${limit}${createFilterByIDs(ordersData)}`,
    );

    const items = data.items.map((obj: CardProps, idx: number) => {
      const { productId, id, user_id, ...restOfOrdersData } = ordersData[idx];
      return { ...obj, ...restOfOrdersData };
    });

    return { meta: data.meta, items };
  },
);

export const postOrder = createAsyncThunk('orders/postProducts', async (params: IPostOrder) => {
  const { data } = await axios.post(`/orders`, { ...params });
  return data;
});
