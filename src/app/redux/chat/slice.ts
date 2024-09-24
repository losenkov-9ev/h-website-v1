import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatState, Message } from './types';

const initialState: ChatState = {
  messages: [
    {
      isUser: true,
      message: 'Привет!!',
      time: '12:00',
      avatar: false,
    },
    {
      isSupport: true,
      message: 'Привет',
      time: '12:01',
      avatar: '/chat-support.jpg',
    },
    {
      isUser: true,
      message: 'Мне нужна помощь',
      time: '12:00',
      avatar: false,
    },
    {
      isSupport: true,
      message: 'С чем я могу вам помочь?',
      time: '12:01',
      avatar: '/chat-support.jpg',
    },
  ],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<Message>) {
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
