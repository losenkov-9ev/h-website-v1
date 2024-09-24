import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductsValues } from './thunks';
import { ELoadingStatus } from '../../@types/types';
import { IProductsState, IResponse } from './types';

const initialState: IProductsState = {
  data: {
    meta: {},
    items: [],
  },
  dataValues: [],
  status: ELoadingStatus.loading,
  dataValuesStatus: ELoadingStatus.loading,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state: IProductsState) => {
        state.status = ELoadingStatus.loading;
        state.data = {
          meta: {},
          items: [],
        };
      })
      .addCase(
        fetchProducts.fulfilled,
        (state: IProductsState, action: PayloadAction<IResponse>) => {
          state.status = ELoadingStatus.fulfilled;
          state.data = action.payload;
        },
      )
      .addCase(fetchProducts.rejected, (state: IProductsState) => {
        state.status = ELoadingStatus.rejected;
        state.data = {
          meta: {},
          items: [],
        };
      })
      .addCase(fetchProductsValues.pending, (state: IProductsState) => {
        state.dataValuesStatus = ELoadingStatus.loading;
        state.dataValues = [];
      })
      .addCase(
        fetchProductsValues.fulfilled,
        (state: IProductsState, action: PayloadAction<{ name: string }[]>) => {
          state.dataValuesStatus = ELoadingStatus.fulfilled;
          state.dataValues = action.payload;
        },
      )
      .addCase(fetchProductsValues.rejected, (state: IProductsState) => {
        state.dataValuesStatus = ELoadingStatus.rejected;
        state.dataValues = [];
      });
  },
});

export const productsReducer = productsSlice.reducer;
