import React from 'react';
import cls from './Chat.module.scss';
import { ChatField } from './ui/ChatField';
import Icon from '../../shared/Icon';

export const Chat: React.FC = () => {
  const [isChatOpened, setIsChatOpened] = React.useState<boolean>(false);

  const handleOpenChat = () => {
    setIsChatOpened(true);
  };
  const handleCloseChat = () => {
    setIsChatOpened(false);
  };

  return (
    <>
      {!isChatOpened ? (
        <div className={cls.chat}>
          <button onClick={handleOpenChat} className={cls.chat_btn}>
            <Icon.Chat />
          </button>
        </div>
      ) : (
        <ChatField onClose={handleCloseChat} />
      )}
    </>
  );
};
