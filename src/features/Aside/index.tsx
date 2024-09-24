import React, { useEffect } from 'react';
import cls from './Aside.module.scss';
import { AsideItem, AsideItemProps } from './ui/AsideItem';
import { ELoadingStatus, Mods } from '../../app/@types/types';
import clsx from 'clsx';
import Icon from '../../shared/Icon';
import { useAppDispatch } from '../../app/redux/store';
import { fetchFilters } from '../../app/redux/filters/thunks';
import { useSelector } from 'react-redux';
import { selectFilters, selectFiltersStatus } from '../../app/redux/filters/selectors';
import { AsideItemLoader } from './ui/AsideItem/AsideItemLoader';
import { AsideProductItem } from './ui/AsideItem/AsideProductItem';

export interface AsideProps {
  isAsideOpened?: boolean;
  toggleAside?: () => void;
}

export const Aside: React.FC<AsideProps> = ({ isAsideOpened = true, toggleAside }) => {
  const dispatch = useAppDispatch();

  const filters: AsideItemProps[] = useSelector(selectFilters);
  const filtersStatus = useSelector(selectFiltersStatus);

  useEffect(() => {
    dispatch(fetchFilters());
  }, []);

  const mods: Mods = {
    [cls.asideOpened]: isAsideOpened,
  };

  return (
    <div className={clsx(cls.aside, mods)}>
      <button className={cls.aside_close} onClick={toggleAside}>
        <Icon.Close />
      </button>

      {filtersStatus === ELoadingStatus.loading
        ? Array.from({ length: 2 }, (_, idx) => <AsideItemLoader key={idx} />)
        : filters.map((filter, idx) => {
            return <AsideItem key={`${filter.title}_${idx}`} {...filter} />;
          })}
      <AsideProductItem />
    </div>
  );
};
