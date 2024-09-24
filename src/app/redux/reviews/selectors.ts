import { RootState } from '../store';

export const selectReviews = (state: RootState) => state.reviews.data;
export const selectReviewsStatus = (state: RootState) => state.reviews.status;
