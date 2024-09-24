import React from 'react';
import cls from './DepositCard.module.scss';

export interface DepositCardProps {
  currency: string;
  value: number;
  date: {
    time: string;
    date: string;
  };
}

export const DepositCard: React.FC<DepositCardProps> = ({ currency, value, date }) => {
  return (
    <div className={cls.depositCard}>
      <div className={cls.depositCard_value}>
        {value} ₽ (<span>{currency}</span>)
      </div>
      <div className={cls.depositCard_date}>
        <span>{date.time}</span> | <span>{date.date}</span>
      </div>
    </div>
  );
};
