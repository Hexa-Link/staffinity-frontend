/**
 * 📝 CHAT TYPES - Tipos TypeScript
 * Ubicación: src/types/chat.ts
 * Descripción: Definiciones de tipos para el módulo de chat.
 * Interfaces: Message, ChatState
 * Usado por: ChatBot.tsx, useChat.ts
 */

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatState {
  isOpen: boolean;
  messages: Message[];
  inputValue: string;
  isLoading: boolean;
}
