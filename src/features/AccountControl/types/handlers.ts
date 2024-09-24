import { AccountControlType, Action, IPayment, State, TPassword } from './types';
import { setPayment, setPassword } from '../state/actions';

// Перегрузки для функции handleChange
export function handleChange(
  e: React.ChangeEvent<HTMLInputElement>,
  state: State,
  dispatch: React.Dispatch<Action>,
  type: AccountControlType.Balance,
  key: keyof IPayment,
): void;

export function handleChange(
  e: React.ChangeEvent<HTMLInputElement>,
  state: State,
  dispatch: React.Dispatch<Action>,
  type: AccountControlType.Password,
  key: keyof TPassword,
): void;

// Реализация функции handleChange
export function handleChange(
  e: React.ChangeEvent<HTMLInputElement>,
  state: State,
  dispatch: React.Dispatch<Action>,
  type: AccountControlType,
  key: keyof IPayment | keyof TPassword,
) {
  if (type === AccountControlType.Balance && key in state.payment) {
    if (key === 'value') {
      dispatch(setPayment({ ...state.payment, value: Number(e.target.value) }));
    }
  } else if (type === AccountControlType.Password && key in state.password) {
    dispatch(setPassword({ ...state.password, [key]: e.target.value }));
  }
}
