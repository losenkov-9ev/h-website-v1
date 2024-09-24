import { useMemo } from 'react';
import { DEFAULT_SCREEN_WIDTH } from '../constants';
import { useWindowWidth } from './useWindowWidth';

const PRODUCTS_PER_PAGE = {
  MOBILE: 4,
  LAPTOP: 4,
  DEFAULT: 4,
};

export const useCardsPerPage = () => {
  const isLaptop = useWindowWidth(DEFAULT_SCREEN_WIDTH.XL);
  const isMobile = useWindowWidth(DEFAULT_SCREEN_WIDTH.S);

  const cardsPerPage = useMemo(() => {
    if (isMobile) return PRODUCTS_PER_PAGE.MOBILE;
    if (isLaptop) return PRODUCTS_PER_PAGE.LAPTOP;
    return PRODUCTS_PER_PAGE.DEFAULT;
  }, [isMobile, isLaptop]);

  return cardsPerPage;
};
