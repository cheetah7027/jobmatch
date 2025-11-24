import { useState } from 'react';
import { ArrowLeft, Send, Paperclip, Search } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface MessagingScreenProps {
  onNavigate: (screen: string) => void;
}

const mockChats = [
  {
    id: 1,
    company: 'TechCorp Inc.',
    jobTitle: 'Senior React Developer',
    avatar: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzYzNzg4MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    lastMessage: "We'd love to schedule an interview!",
    time: '2m ago',
    unread: 2
  },
  {
    id: 2,
    company: 'DesignLab',
    jobTitle: 'Product Designer',
    avatar: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzYzNzg4MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    lastMessage: 'Great portfolio! When can you start?',
    time: '1h ago',
    unread: 0
  },
  {
    id: 3,
    company: 'StartupXYZ',
    jobTitle: 'Full Stack Engineer',
    avatar: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzYzNzg4MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    lastMessage: 'Thank you for your interest!',
    time: '2d ago',
    unread: 0
  }
];

const mockMessages = [
  {
    id: 1,
    sender: 'company',
    text: 'Hi! Thanks for your interest in the Senior React Developer position.',
    time: '10:30 AM'
  },
  {
    id: 2,
    sender: 'user',
    text: 'Hello! I\'m very excited about this opportunity.',
    time: '10:32 AM'
  },
  {
    id: 3,
    sender: 'company',
    text: 'We\'d love to schedule an interview with you. Are you available this week?',
    time: '10:35 AM'
  },
  {
    id: 4,
    sender: 'user',
    text: 'Yes, I\'m available Thursday or Friday afternoon.',
    time: '10:37 AM'
  }
];

export default function MessagingScreen({ onNavigate }: MessagingScreenProps) {
  const [view, setView] = useState<'list' | 'chat'>('list');
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [message, setMessage] = useState('');

  const handleChatSelect = (chat: any) => {
    setSelectedChat(chat);
    setView('chat');
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Mock sending message
      setMessage('');
    }
  };

  if (view === 'chat' && selectedChat) {
    return (
      <div className="w-full h-full flex flex-col bg-[#FAFAFA]">
        {/* Chat Header */}
        <div className="p-4 bg-white border-b border-[#E5E5E5] flex items-center gap-3">
          <button onClick={() => setView('list')}>
            <ArrowLeft className="w-6 h-6 text-[#111111]" />
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <ImageWithFallback
              src={selectedChat.avatar}
              alt={selectedChat.company}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-[#111111]">{selectedChat.company}</h4>
            <p className="text-[#6E6E6E] text-sm">{selectedChat.jobTitle}</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {mockMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] p-3 rounded-2xl ${
                  msg.sender === 'user'
                    ? 'bg-[#2E6CE6] text-white rounded-br-sm'
                    : 'bg-white text-[#111111] rounded-bl-sm'
                }`}
              >
                <p>{msg.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.sender === 'user' ? 'text-white/70' : 'text-[#6E6E6E]'
                  }`}
                >
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-[#E5E5E5]">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center text-[#6E6E6E]">
              <Paperclip className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 bg-[#2E6CE6]/10 text-[#2E6CE6] rounded-full text-sm">
              📄 Send Resume
            </button>
            <Input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 h-10 rounded-full border-2 border-[#E5E5E5] focus:border-[#2E6CE6]"
            />
            <button
              onClick={handleSendMessage}
              className="w-10 h-10 bg-[#2E6CE6] rounded-full flex items-center justify-center"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <button onClick={() => onNavigate('swipe')}>
            <ArrowLeft className="w-6 h-6 text-[#111111]" />
          </button>
          <h2 className="text-[#111111]">Messages</h2>
          <div className="w-6" />
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E6E6E]" />
          <Input
            type="text"
            placeholder="Search messages..."
            className="h-12 pl-12 rounded-xl border-2 border-[#E5E5E5] focus:border-[#2E6CE6]"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-auto">
        {mockChats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => handleChatSelect(chat)}
            className="w-full p-4 flex items-center gap-3 hover:bg-[#FAFAFA] transition-colors border-b border-[#E5E5E5]"
          >
            <div className="relative">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <ImageWithFallback
                  src={chat.avatar}
                  alt={chat.company}
                  className="w-full h-full object-cover"
                />
              </div>
              {chat.unread > 0 && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#FF5A5F] rounded-full flex items-center justify-center text-white text-xs">
                  {chat.unread}
                </div>
              )}
            </div>

            <div className="flex-1 text-left">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-[#111111]">{chat.company}</h4>
                <span className="text-[#6E6E6E] text-sm">{chat.time}</span>
              </div>
              <p className="text-[#6E6E6E] text-sm truncate">{chat.jobTitle}</p>
              <p
                className={`text-sm truncate ${
                  chat.unread > 0 ? 'text-[#111111]' : 'text-[#6E6E6E]'
                }`}
              >
                {chat.lastMessage}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}