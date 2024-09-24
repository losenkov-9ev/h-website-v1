import { CardProps } from '../../../features/Card/context/types';
import { ELoadingStatus, MetaType } from '../../@types/types';

export type IResponse = {
  meta: MetaType;
  items: CardProps[];
};

export interface IProductsState {
  data: IResponse;
  dataValues: { name: string }[];
  status: ELoadingStatus;
  dataValuesStatus: ELoadingStatus;
}
