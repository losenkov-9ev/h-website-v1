import React from 'react';
import cls from './AccontPurchaseHistory.module.scss';
import { AbridgedCard, InlineCard } from '../../features/Card';
import { useAppDispatch } from '../../app/redux/store';
import { useSelector } from 'react-redux';
import { fetchOrders } from '../../app/redux/orders/thunks';
import { selectOrders, selectOrdersStatus } from '../../app/redux/orders/selectors';
import { useLoadMore } from '../../app/hooks/useLoadMore';
import { useCardsPerPage } from '../../app/hooks/useCardsPerPage';
import { CardProps } from '../../features/Card/context/types';
import { DataRenderer } from '../../features/DataRenderer';
import { LoadButton } from '../../shared/LoadButton';
import clsx from 'clsx';
import { InlineCardLoader } from '../../features/Card/InlineCardLoader';
import { useWindowWidth } from '../../app/hooks/useWindowWidth';
import { DEFAULT_SCREEN_WIDTH } from '../../app/constants';

export const AccontPurchaseHistory: React.FC = () => {
  const [page, setPage] = React.useState<number>(1);

  const dispatch = useAppDispatch();
  const cardsPerPage = useCardsPerPage();

  const { items, meta } = useSelector(selectOrders);
  const status = useSelector(selectOrdersStatus);

  const { loadedCards: loadedReviews, handleLoadButtonClick } = useLoadMore<CardProps>({
    cards: items,
    meta,
    page,
    setPage,
  });

  const isMobile = useWindowWidth(DEFAULT_SCREEN_WIDTH.L);

  React.useEffect(() => {
    dispatch(fetchOrders({ page, limit: 6 }));
  }, [page, cardsPerPage]);

  return (
    <div className={cls.accontPurchaseHistory}>
      <div className="container">
        <div className={cls.accontPurchaseHistory_inner}>
          <div className={clsx(cls.accontPurchaseHistory_title, 'h-1')}>История покупок</div>
          <DataRenderer<CardProps>
            data={loadedReviews}
            status={status}
            LoadingComponent={InlineCardLoader}
            CardComponent={!isMobile ? InlineCard : AbridgedCard}
            emptyMessage="Вы пока ничего не покупали"
            containerClassName={cls.accontPurchaseHistory_box}
          />
          <LoadButton
            currentPage={meta.current_page}
            totalPages={meta.total_pages}
            onClick={handleLoadButtonClick}
          />
        </div>
      </div>
    </div>
  );
};
