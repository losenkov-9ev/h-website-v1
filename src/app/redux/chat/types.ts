export interface Message {
  isUser?: boolean;
  isSupport?: boolean;
  time: string;
  message: string;
  avatar: string | false;
}

export interface ChatState {
  messages: Message[];
}
