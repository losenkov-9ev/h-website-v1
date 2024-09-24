import { ActionReducerMapBuilder, AsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ELoadingStatus } from '../../@types/types';
import { IFilterBy, IFiltersState } from './types';
import { fetchFilters } from './thunks';

const initialState: IFiltersState = {
  data: [],
  status: ELoadingStatus.loading,
  showcase: [],
  category: [],
  section: [],
  name: [],
};

const handleAsyncActions = <T, Arg>(
  builder: ActionReducerMapBuilder<IFiltersState>,
  thunk: AsyncThunk<T, Arg, {}>,
) => {
  builder
    .addCase(thunk.pending, (state: IFiltersState) => {
      state.status = ELoadingStatus.loading;
      state.data = [];
    })
    .addCase(thunk.fulfilled, (state: IFiltersState, action: PayloadAction<T>) => {
      state.status = ELoadingStatus.fulfilled;
      state.data = action.payload;
    })
    .addCase(thunk.rejected, (state: IFiltersState) => {
      state.status = ELoadingStatus.rejected;
      state.data = [];
    });
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<IFilterBy>): void => {
      const { type, filter } = action.payload;

      !state[type].includes(filter)
        ? (state[type] = [filter])
        : (state[type] = state[type].filter((item) => item !== filter));
    },
  },
  extraReducers: (builder) => {
    handleAsyncActions(builder, fetchFilters);
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setFilter } = filtersSlice.actions;
