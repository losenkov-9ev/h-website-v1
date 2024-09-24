import React, { useEffect } from 'react';
import { AsideItem } from '.';
import { useSelector } from 'react-redux';
import {
  selectProductsValues,
  selectProductsValuesStatus,
} from '../../../../app/redux/products/selectors';

import { ELoadingStatus } from '../../../../app/@types/types';
import { AsideItemLoader } from './AsideItemLoader';
import { fetchProductsValues } from '../../../../app/redux/products/thunks';
import {
  selectFilterCategory,
  selectFilterSection,
  selectFilterShowcase,
} from '../../../../app/redux/filters/selectors';
import { useAppDispatch } from '../../../../app/redux/store';

export const AsideProductItem: React.FC = () => {
  const products = useSelector(selectProductsValues).map((obj) => obj.name);
  const status = useSelector(selectProductsValuesStatus);

  const dispatch = useAppDispatch();

  const showcase = useSelector(selectFilterShowcase);
  const category = useSelector(selectFilterCategory);
  const section = useSelector(selectFilterSection);

  useEffect(() => {
    dispatch(
      fetchProductsValues({
        filters: {
          showcase,
          category,
          section,
        },
      }),
    );
  }, [showcase, category, section]);

  return status === ELoadingStatus.loading ? (
    <AsideItemLoader />
  ) : (
    <AsideItem
      title="Товар"
      type="name"
      withSearch={false}
      values={products}
      placeholder="Товаров не найдено"
    />
  );
};
