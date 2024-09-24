import { CardProps } from '../../../features/Card/context/types';
import { ELoadingStatus, MetaType } from '../../@types/types';

export type IOrderType = {
  id: number;
  productId: number;
  count: number;
  date: number;
} & CardProps;

export interface IPostOrder {
  productId: number;
  count: number;
  date: number;
}

export type IResponse = {
  meta: MetaType;
  items: IOrderType[];
};

export interface IOrdersState {
  data: IResponse;
  status: ELoadingStatus;
  paymentStatus: ELoadingStatus;
}

export interface fetchOrdersParams {
  page: number;
  limit: number;
}
