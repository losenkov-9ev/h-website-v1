import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

const createFilters = (filters: Record<string, string[]>) => {
  // Создаем массив для хранения частей строки запроса
  const queryParts = [];

  // Перебираем каждую пару ключ-значение в объекте filters
  for (const [key, values] of Object.entries(filters)) {
    // Проверяем, что массив значений не пустой
    if (values.length > 0) {
      // Формируем строки вида key[]=value1&key[]=value2 и добавляем их в queryParts
      const part = values
        .map((value) => `${encodeURIComponent(key)}[]=${encodeURIComponent(value)}`)
        .join('&');
      queryParts.push(part);
    }
  }

  // Объединяем все части в одну строку с символом '?', если queryParts не пустой
  return queryParts.length > 0 ? `&${queryParts.join('&')}` : '';
};

interface fetchProductsParams {
  page: number;
  limit: number;
  filters?: Record<string, string[]>;
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ page, limit, filters = {} }: fetchProductsParams) => {
    const { data } = await axios.get(
      `/products?page=${page}&limit=${limit}${createFilters(filters)}`,
    );
    return data;
  },
);

export const fetchProductsValues = createAsyncThunk(
  'products/fetchProductsValues',
  async ({ filters = {} }: { filters: Record<string, string[]> }) => {
    const { data } = await axios.get(`/products?_select=name${createFilters(filters)}`);
    return data;
  },
);
