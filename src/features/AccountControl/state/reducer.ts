import { Action, State } from '../types/types';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_PAYMENT':
      return { ...state, payment: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_PAYMENT_CURRENCY':
      return { ...state, payment: { ...state.payment, currency: action.payload } };
    default:
      return state;
  }
};
