import React, { useEffect, useRef } from 'react';
import cls from './ChatField.module.scss';
import { ChatItem } from '../ChatItem';
import { useAppDispatch } from '../../../../app/redux/store';
import { useSelector } from 'react-redux';
import { selectMessages } from '../../../../app/redux/chat/selectors';
import { addMessage } from '../../../../app/redux/chat/slice';
import Icon from '../../../../shared/Icon';

interface ChatFieldProps {
  onClose: () => void;
}

export const ChatField: React.FC<ChatFieldProps> = ({ onClose }) => {
  const [messageText, setMessageText] = React.useState<string>('');
  const messages = useSelector(selectMessages);
  const dispatch = useAppDispatch();

  const chatBoxRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (messageText) {
      const newMessage = {
        isUser: true,
        message: messageText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: '',
      };
      dispatch(addMessage(newMessage));
      setMessageText('');
    }
  };

  return (
    <div className={cls.chatField}>
      <div className={cls.chatField_head}>
        Чат поддержки
        <button className={cls.chatField_close} onClick={onClose}>
          <Icon.Close />
        </button>
      </div>
      <div className={cls.chatField_box} ref={chatBoxRef}>
        <div className={cls.chatField_boxWrapper}>
          {messages.map((message, index) => (
            <ChatItem key={`${message.time}_${index}`} {...message} />
          ))}
        </div>
      </div>
      <div className={cls.chatField_inputWrapper}>
        <input
          type="text"
          className={cls.chatField_input}
          value={messageText}
          placeholder="Ваше сообщение"
          onChange={(e) => setMessageText(e.target.value)}
        />
        <button className={cls.chatField_inputButton} onClick={handleSendMessage}>
          <Icon.SendMessage />
        </button>
      </div>
    </div>
  );
};
