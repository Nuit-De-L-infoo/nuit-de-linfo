'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'pirate';
  timestamp: Date;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initial greeting
  useEffect(() => {
    setMessages([
      {
        id: '1',
        text: "Ahoy matey! I'm Guybrush Threepwood, mighty pirate and your guide to the ocean's mysteries! What would ye like to know about the seven seas?",
        sender: 'pirate',
        timestamp: new Date()
      }
    ]);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Call chatbot API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputText }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from chatbot');
      }

      const data = await response.json();

      // Add pirate response
      const pirateMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || 'Arrr, something went wrong!',
        sender: 'pirate',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, pirateMessage]);
    } catch (error) {
      console.error('Failed to get response:', error);
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Arrr, there was an error processing your message!',
        sender: 'pirate',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {/* Chat toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <Image
            src="/images/pirates/pngwing.com.png"
            alt=""
            width={50}
            height={50}
            className="rounded-full"
          />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col transition-all duration-300 ease-in-out">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center justify-center w-full">
            <Image
                src="/images/pirates/pngwing.com.png"
                alt="Pirate Avatar"
                width={35}
                height={35}
                className="rounded-full mr-3"
              />
              <h2 className="font-bold text-lg">Ocean Explorer&apos;s Guide</h2>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-800'
                  } shadow-md`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 rounded-lg p-3 animate-pulse">
                  Typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about the ocean..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
