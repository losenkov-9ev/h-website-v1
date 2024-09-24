import React from 'react';
import cls from './Footer.module.scss';
import Icon from '../../shared/Icon';

export const Footer: React.FC = () => {
  return (
    <div className={cls.footer}>
      <div className="container">
        <div className={cls.footer_inner}>
          <div className={cls.footer_copy}>© 2023 Hermes. All rights reserved</div>
          <a href="#" className={cls.footer_up}>
            <Icon.GoUp />
          </a>
        </div>
      </div>
    </div>
  );
};
