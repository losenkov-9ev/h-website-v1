export enum AccountControlType {
  Balance = 'balance',
  Password = 'password',
}

export interface AccountControlProps {
  type: AccountControlType;
  switchTheme?: boolean;
}

export interface IPayment {
  value: number;
  currency: string | React.ReactNode;
}

export type TPassword = {
  oldPassword: string;
  newPassword: string;
};

export interface State {
  payment: IPayment;
  password: TPassword;
}

export type Action =
  | { type: 'SET_PAYMENT'; payload: IPayment }
  | { type: 'SET_PASSWORD'; payload: TPassword }
  | { type: 'SET_PAYMENT_CURRENCY'; payload: string | React.ReactNode };
