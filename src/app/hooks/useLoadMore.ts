import { useState, useEffect, useCallback } from 'react';
import { MetaType } from '../@types/types';
import { useLocationChangeListener } from './useLocationChangeListener';

type UseLoadMoreProps<T> = {
  cards: T[];
  meta: MetaType;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const useLoadMore = <T>({ cards, meta, page, setPage }: UseLoadMoreProps<T>) => {
  const [loadedCards, setLoadedCards] = useState<T[]>([]);

  useEffect(() => {
    setLoadedCards((prev) => [...prev, ...cards]);
  }, [cards]);

  const resetFilters = useCallback(() => {
    setLoadedCards([]);
    setPage(1);
  }, []);

  const handleLoadButtonClick = useCallback(() => {
    if (meta.current_page < meta.total_pages) {
      setPage((prev) => prev + 1);
    } else {
      resetFilters();
    }
  }, [meta, resetFilters]);

  useLocationChangeListener(resetFilters);

  return { resetFilters, loadedCards, handleLoadButtonClick, page };
};
