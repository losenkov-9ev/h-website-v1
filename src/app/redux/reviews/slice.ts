import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ELoadingStatus } from '../../@types/types';
import { IResponse, IReviewsState } from './types';
import { fetchReviews } from './thunks';

const initialState: IReviewsState = {
  data: {
    meta: {},
    items: [],
  },
  status: ELoadingStatus.loading,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state: IReviewsState) => {
        state.status = ELoadingStatus.loading;
        state.data = {
          meta: {},
          items: [],
        };
      })
      .addCase(fetchReviews.fulfilled, (state: IReviewsState, action: PayloadAction<IResponse>) => {
        state.status = ELoadingStatus.fulfilled;
        state.data = action.payload;
      })
      .addCase(fetchReviews.rejected, (state: IReviewsState) => {
        state.status = ELoadingStatus.rejected;
        state.data = {
          meta: {},
          items: [],
        };
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
