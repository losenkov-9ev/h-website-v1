import React from 'react';

import cls from './AccountDepositHistory.module.scss';
import clsx from 'clsx';

import { Button } from '../../shared/Button';
import { DepositCard, type DepositCardProps } from '../../features/DepositCard';
import { EmptyBlock } from '../../shared/EmptyBlock';

export const AccountDepositHistory: React.FC = () => {
  const cardsArray: DepositCardProps[] = new Array(8).fill({
    currency: 'USDT',
    value: 1,
    date: {
      time: '20:36',
      date: '05.11.23',
    },
  });

  return (
    <div className={cls.accountDepositHistory}>
      <div className="container">
        <div className={cls.accountDepositHistory_inner}>
          <div className={clsx(cls.accountDepositHistory_title, 'h-1')}>История пополнений</div>
          {cardsArray.length ? (
            <div className={cls.accountDepositHistory_box}>
              {cardsArray.map((card, idx) => (
                <DepositCard
                  key={`${card.currency}_${idx}`}
                  {...card}
                  value={Math.trunc((Math.random() + 1) * 1000 * card.value)}
                />
              ))}
            </div>
          ) : (
            <EmptyBlock value="Вы пока не пополняли аккаунт" />
          )}
          <Button fullWidth={false}>Показать еще</Button>
        </div>
      </div>
    </div>
  );
};
