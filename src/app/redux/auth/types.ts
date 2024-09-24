import { ELoadingStatus } from '../../@types/types';

export type IResponse = any;

export interface IAuthState {
  user: IResponse | null;
  status: ELoadingStatus;
}

export interface IAuthParams {
  email: string;
  password: string;
}
