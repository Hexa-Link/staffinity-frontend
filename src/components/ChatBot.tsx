/**
 * 🤖 CHATBOT - Asistente de IA
 * Ubicación: src/components/ChatBot.tsx
 * Descripción: Componente flotante de chatbot con integración Gemini.
 * Funcionalidades: Chat en tiempo real, conversaciones con IA, modal responsivo.
 * Dependencias: useChat hook, lucide-react icons, types/chat
 * Scope: Global - Se carga en layout.tsx
 */

'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, Loader } from 'lucide-react';
import { useChat } from '@/hooks/useChat';
import { Message } from '@/types/chat';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isLoading, sendMessage, setMessages } = useChat();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;

    await sendMessage(inputValue);
    setInputValue('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/70 flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-1 z-40 hover:scale-110 ${
          isOpen ? 'scale-95' : 'scale-100'
        }`}
        aria-label="Abrir chatbot"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          {/* Robot Head */}
          <rect x="6" y="4" width="28" height="20" rx="2" fill="white" />
          
          {/* Eyes */}
          <rect x="10" y="8" width="6" height="6" rx="1" fill="#0d9488" />
          <rect x="24" y="8" width="6" height="6" rx="1" fill="#0d9488" />
          
          {/* Mouth */}
          <path d="M 12 16 Q 20 19 28 16" stroke="#0d9488" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          
          {/* Antenna Left */}
          <line x1="10" y1="4" x2="10" y2="0" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <circle cx="10" cy="0" r="1.5" fill="white" />
          
          {/* Antenna Right */}
          <line x1="30" y1="4" x2="30" y2="0" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <circle cx="30" cy="0" r="1.5" fill="white" />
          
          {/* Body */}
          <rect x="12" y="24" width="16" height="12" rx="2" fill="white" />
          
          {/* Buttons */}
          <circle cx="16" cy="28" r="1.5" fill="#0d9488" />
          <circle cx="20" cy="28" r="1.5" fill="#0d9488" />
          <circle cx="24" cy="28" r="1.5" fill="#0d9488" />
          
          {/* Arms */}
          <rect x="2" y="28" width="10" height="3" rx="1.5" fill="white" />
          <rect x="28" y="28" width="10" height="3" rx="1.5" fill="white" />
        </svg>
      </button>

      {/* Chat Window - Fully Responsive */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 flex items-end md:items-stretch justify-center md:justify-end z-50">
          {/* Mobile Overlay */}
          <div
            className="fixed inset-0 bg-black/30 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Chat Container */}
          <div className="relative w-full h-full md:h-96 md:w-96 bg-white rounded-t-3xl md:rounded-2xl shadow-2xl shadow-teal-500/30 flex flex-col md:max-h-96">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 md:p-4 rounded-t-3xl md:rounded-t-2xl flex justify-between items-center flex-shrink-0">
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-base md:text-lg truncate">Asistente IA</h3>
                <p className="text-xs text-teal-100 hidden sm:block">Powered by Gemini</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-teal-700 p-1.5 md:p-2 rounded-full transition-colors flex-shrink-0 ml-2"
                aria-label="Cerrar chatbot"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs md:max-w-sm px-3 md:px-4 py-2 rounded-lg md:rounded-2xl text-sm ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-br-none md:rounded-br-none'
                        : 'bg-white text-gray-800 border border-teal-200 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="break-words leading-relaxed">{message.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-teal-200 px-3 md:px-4 py-2 rounded-lg md:rounded-2xl rounded-bl-none shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 md:p-4 bg-white rounded-b-3xl md:rounded-b-2xl flex-shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Escribe aquí..."
                  disabled={isLoading}
                  className="flex-1 bg-gray-100 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:opacity-50 placeholder:text-gray-400"
                  aria-label="Mensaje del chat"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full p-2 hover:shadow-lg hover:shadow-teal-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  aria-label="Enviar mensaje"
                >
                  {isLoading ? <Loader size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
