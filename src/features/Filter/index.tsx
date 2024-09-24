import React from 'react';
import Select from '../../shared/Select';
import cls from './Filter.module.scss';
import { fetchFilters } from '../../app/redux/filters/thunks';
import { useSelector } from 'react-redux';
import { selectFilters, selectFiltersStatus } from '../../app/redux/filters/selectors';
import { useAppDispatch } from '../../app/redux/store';
import { AsideItemProps } from '../Aside/ui/AsideItem';
import { setFilter } from '../../app/redux/filters/slice';
import { ELoadingStatus } from '../../app/@types/types';
import { FilterLoader } from './FilterLoader';

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleFilterBy = (type: 'showcase' | 'category' | 'section' | 'name', value: string) => {
    value &&
      dispatch(
        setFilter({
          type,
          filter: value,
        }),
      );
  };

  const filters: AsideItemProps[] = useSelector(selectFilters);
  const filtersStatus = useSelector(selectFiltersStatus);

  React.useEffect(() => {
    dispatch(fetchFilters());
  }, []);

  return filtersStatus === ELoadingStatus.fulfilled ? (
    <div className={cls.filter}>
      {filters.map((filter, idx) => (
        <Select
          className={cls.filter_select}
          onChange={(value) => handleFilterBy(filter.type, String(value))}
          key={`${filter.type}_${idx}`}
          withShadow={true}
          placeholder={filter.title}>
          {filter.values.map((value, idx) => (
            <Select.Option key={`${value}_${idx}`} value={value}>
              {value}
            </Select.Option>
          ))}
        </Select>
      ))}
    </div>
  ) : (
    <FilterLoader />
  );
};
