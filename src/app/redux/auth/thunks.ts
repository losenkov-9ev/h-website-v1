import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { IAuthParams } from './types';

export const fetchAuthData = createAsyncThunk('auth/fetchAuthData', async (params: IAuthParams) => {
  const { data } = await axios.post('/auth', params);

  return data;
});

export const fetchAuthRegister = createAsyncThunk(
  'auth/fetchAuthRegister',
  async (params: IAuthParams) => {
    const { data } = await axios.post('/register', params);
    return data;
  },
);

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/auth_me');

  return { data };
});
