import React from 'react';
import cls from './ChatItem.module.scss';
import clsx from 'clsx';
import { Mods } from '../../../../app/@types/types';
import { type Message } from '../../../../app/redux/chat/types';
import Icon from '../../../../shared/Icon';

export const ChatItem: React.FC<Message> = ({ isUser, isSupport, time, message, avatar }) => {
  const mods: Mods = {
    [cls.chatItem_user]: isUser,
    [cls.chatItem_support]: isSupport,
  };

  return (
    <div className={clsx(cls.chatItem, mods)}>
      <span className={cls.chatItem_time}>{time}</span>
      <div className={cls.chatItem_message}>{message}</div>
      <div className={cls.chatItem_avatar}>
        {avatar ? <img src={avatar} alt="" /> : <Icon.NonAvatar />}
      </div>
    </div>
  );
};
