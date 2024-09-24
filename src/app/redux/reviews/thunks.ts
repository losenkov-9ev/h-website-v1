import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

interface fetchReviewsParams {
  page: number;
  limit: number;
}

export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async ({ page, limit }: fetchReviewsParams) => {
    const { data } = await axios.get(`/review?page=${page}&limit=${limit}`);
    return data;
  },
);
