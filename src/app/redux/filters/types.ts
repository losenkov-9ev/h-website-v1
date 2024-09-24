import { ELoadingStatus } from '../../@types/types';

export type IResponse = any;

export interface IFiltersState {
  data: IResponse | [];
  status: ELoadingStatus;
  showcase: string[];
  category: string[];
  section: string[];
  name: string[];
}

export interface IFilterBy {
  type: 'showcase' | 'section' | 'category' | 'name';
  filter: string;
}
