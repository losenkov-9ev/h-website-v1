import { ReviewCardProps } from '../../../features/ReviewCard';
import { ELoadingStatus, MetaType } from '../../@types/types';

export type IResponse = {
  meta: MetaType;
  items: ReviewCardProps[];
};

export interface IReviewsState {
  data: IResponse;
  status: ELoadingStatus;
}
