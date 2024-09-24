import { State } from '../types/types';

export const initialState: State = {
  payment: { value: 10, currency: 'USDT' },
  password: { oldPassword: '', newPassword: '' },
};
