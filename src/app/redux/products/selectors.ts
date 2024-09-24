import { RootState } from '../store';

export const selectProducts = (state: RootState) => state.products.data.items;
export const selectProductsMeta = (state: RootState) => state.products.data.meta;
export const selectProductsStatus = (state: RootState) => state.products.status;
export const selectProductsValues = (state: RootState) => state.products.dataValues;
export const selectProductsValuesStatus = (state: RootState) => state.products.dataValuesStatus;
