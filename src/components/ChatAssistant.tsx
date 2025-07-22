import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { chatService } from '@/lib/chat-service';

interface Message {
  type: 'user' | 'assistant';
  content: string;
}

const INITIAL_MESSAGE: Message = {
  type: 'assistant',
  content: 'Hi! I\'m Saahil\'s portfolio assistant. I can help you learn more about his projects, skills, and experience. What would you like to know?'
};

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentResponse, setCurrentResponse] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingSpeed = 30; // ms per character

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, currentResponse]);

  const animateTyping = (text: string) => {
    setIsAnimating(true);
    let currentIndex = 0;
    
    const typeNextCharacter = () => {
      if (currentIndex <= text.length) {
        setCurrentResponse(text.slice(0, currentIndex));
        currentIndex++;
        setTimeout(typeNextCharacter, typingSpeed);
      } else {
        setIsAnimating(false);
        setIsTyping(false);
        setMessages(prev => [...prev, { type: 'assistant', content: text }]);
        setCurrentResponse('');
      }
    };

    typeNextCharacter();
  };

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = { type: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const response = chatService.generateResponse(userMessage.content);
    animateTyping(response.content);
  };

  const formatMessageContent = (content: string) => {
    return content.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line.startsWith('•') ? (
          <div className="flex gap-2 ml-2">
            <span className="text-blue-500">•</span>
            <span>{line.slice(1).trim()}</span>
          </div>
        ) : (
          <div>{line}</div>
        )}
      </React.Fragment>
    ));
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-lg hover:shadow-blue-500/25 text-white transition-all duration-300 hover:scale-105 z-50 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-medium">Chat with Assistant</span>
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-6 right-6 w-[400px] rounded-2xl bg-white dark:bg-slate-900 shadow-2xl transform transition-all duration-300 ease-in-out z-50 flex flex-col overflow-hidden ${
          isOpen 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-[120%] opacity-0 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100vh - 100px)' }}
      >
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-white" />
            <h2 className="text-lg font-semibold text-white">Portfolio Assistant</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white/80"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4" style={{ maxHeight: '500px' }}>
          <div className="flex flex-col gap-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800'
                  }`}
                >
                  <div className="whitespace-pre-wrap space-y-1">
                    {formatMessageContent(message.content)}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[85%] p-4 rounded-2xl bg-slate-100 dark:bg-slate-800">
                  {isAnimating ? (
                    <div className="whitespace-pre-wrap space-y-1">
                      {formatMessageContent(currentResponse)}
                    </div>
                  ) : (
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  )}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-4 border-t">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100 dark:bg-slate-800"
            />
            <Button
              type="submit"
              size="icon"
              className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              disabled={!input.trim() || isTyping}
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ChatAssistant; 