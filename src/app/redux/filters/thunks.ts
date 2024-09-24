import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchFilters = createAsyncThunk('filters/fetchFilters', async () => {
  const { data } = await axios.get(`/filter`);
  return data;
});
