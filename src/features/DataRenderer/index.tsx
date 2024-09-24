import { ELoadingStatus } from '../../app/@types/types';
import { EmptyBlock } from '../../shared/EmptyBlock';
import React, { useMemo } from 'react';

import Masonry from 'react-masonry-css';
import cls from './DataRenderer.module.scss';

interface DataRendererProps<T> {
  data: T[];
  status: ELoadingStatus;
  LoadingComponent: React.FC;
  CardComponent: React.FC<T>;
  emptyMessage: string;
  containerClassName: string;
  loaderCount?: number;
  isMasonry?: boolean;
}

export const DataRenderer = <T,>({
  data,
  status,
  LoadingComponent,
  CardComponent,
  emptyMessage,
  containerClassName,
  loaderCount = 8,
  isMasonry = false,
}: DataRendererProps<T>): JSX.Element => {
  const breakpointColumnsObj = {
    default: 3,
    960: 2,
    560: 1,
  };

  const renderContent = useMemo(() => {
    if (status === ELoadingStatus.loading && data.length === 0) {
      return (
        <div className={cls.dataRenderer}>
          {Array.from({ length: loaderCount }).map((_, idx) => (
            <LoadingComponent key={idx} />
          ))}
        </div>
      );
    }

    if (
      (data.length === 0 && status === ELoadingStatus.fulfilled) ||
      status === ELoadingStatus.rejected
    ) {
      return <EmptyBlock value={emptyMessage} />;
    }

    const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      return !isMasonry ? (
        <div className={containerClassName}>{children}</div>
      ) : (
        <Masonry breakpointCols={breakpointColumnsObj} className={containerClassName}>
          {children}
        </Masonry>
      );
    };

    return (
      <Container>
        {data.map((item, idx) => (
          <CardComponent key={idx} {...item} />
        ))}
        {status === ELoadingStatus.loading &&
          Array.from({ length: loaderCount }).map((_, idx) => <LoadingComponent key={idx} />)}
      </Container>
    );
  }, [
    data,
    status,
    containerClassName,
    LoadingComponent,
    CardComponent,
    emptyMessage,
    loaderCount,
  ]);

  return renderContent;
};
