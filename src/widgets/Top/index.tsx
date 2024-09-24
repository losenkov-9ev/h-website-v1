import React from 'react';
import cls from './Top.module.scss';
import { Rate } from '../../shared/Rate';

export const Top: React.FC = () => {
  return (
    <div className={cls.top}>
      <div className="container">
        <div className={cls.top_inner}>
          <div className={cls.top_head}>
            <Rate value={4} />
            <span>47 отзывов</span>
          </div>
          <h1 className={cls.top_title}>Пример сайта от Hermes</h1>
          <div className={cls.top_desription}>
            Здесь будет ваше описание! Советуем не писать длинные тексты. Это усложнит восприятие
            информации
          </div>
        </div>
      </div>
    </div>
  );
};
