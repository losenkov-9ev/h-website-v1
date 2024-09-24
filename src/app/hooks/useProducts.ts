import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import {
  selectProducts,
  selectProductsMeta,
  selectProductsStatus,
} from '../redux/products/selectors';
import { useFilter } from './useFilter';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../redux/products/thunks';

export const useProducts = (page: number, productsPerPage: number) => {
  const dispatch = useAppDispatch();
  const products = useSelector(selectProducts);
  const meta = useSelector(selectProductsMeta);
  const status = useSelector(selectProductsStatus);

  const { showcase, category, section, name } = useFilter();

  const [prevFilters, setPrevFilters] = useState({ showcase, category, section, name });
  const [isFilterChanged, setIsFilterChanged] = useState(false);

  useEffect(() => {
    dispatch(
      fetchProducts({
        page,
        limit: productsPerPage,
        filters: { showcase, category, section, name },
      }),
    );
  }, [dispatch, productsPerPage, page, showcase, category, section, name]);

  useEffect(() => {
    const filtersChanged =
      showcase !== prevFilters.showcase ||
      category !== prevFilters.category ||
      section !== prevFilters.section ||
      name !== prevFilters.name;

    if (filtersChanged) {
      setIsFilterChanged(true);
      setPrevFilters({ showcase, category, section, name });
    } else {
      setIsFilterChanged(false);
    }
  }, [showcase, category, section, name, prevFilters]);

  return { products, meta, status, isFilterChanged };
};
