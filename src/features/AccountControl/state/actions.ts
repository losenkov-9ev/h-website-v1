import { IPayment, TPassword } from '../types/types';

export const setPayment = (payment: IPayment) => ({
  type: 'SET_PAYMENT' as const,
  payload: payment,
});

export const setPaymentCurrency = (currency: string | React.ReactNode) => ({
  type: 'SET_PAYMENT_CURRENCY' as const,
  payload: currency,
});

export const setPassword = (password: TPassword) => ({
  type: 'SET_PASSWORD' as const,
  payload: password,
});
