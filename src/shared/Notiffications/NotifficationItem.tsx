import React from 'react';
import cls from './Notiffications.module.scss';
import Icon from '../Icon';

export interface NotifficationItemProps {
  title: string;
  text: string;
}

export const NotifficationItem: React.FC<NotifficationItemProps> = ({ title, text }) => {
  return (
    <div className={cls.notifficationItem}>
      <div className={cls.notifficationItem_title}>{title}</div>
      <div className={cls.notifficationItem_text}>{text}</div>
      <div className={cls.notifficationItem_close}>
        <Icon.CloseNotiffication />
      </div>
    </div>
  );
};
