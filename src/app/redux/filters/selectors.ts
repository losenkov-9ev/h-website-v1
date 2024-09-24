import { RootState } from '../store';

export const selectFilters = (state: RootState) => state.filters.data;
export const selectFiltersStatus = (state: RootState) => state.filters.status;

export const selectFilterShowcase = (state: RootState) => state.filters.showcase;
export const selectFilterSection = (state: RootState) => state.filters.section;
export const selectFilterCategory = (state: RootState) => state.filters.category;
export const selectFilterName = (state: RootState) => state.filters.name;
