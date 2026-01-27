


export interface MessagePreview {
  count: number;
  text: string;
  time: string;
  status: 'sent' | 'delivered' | 'read'; 
}

export interface User {
  id: number;
  name: string;
  avatar: string;
  isOnline: boolean;
  isTyping: boolean;
  lastMessage: MessagePreview;
}

