import React from 'react';
import cls from './Banner.module.scss';

export const Banner: React.FC = () => {
  return (
    <div className={cls.banner}>
      <div className="container">
        <div className={cls.banner_item}></div>
      </div>
    </div>
  );
};
