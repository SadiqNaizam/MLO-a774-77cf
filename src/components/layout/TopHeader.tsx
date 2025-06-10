import React from 'react';
import { cn } from '@/lib/utils';
import { UserCircle, MessageCircle } from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 w-full h-16 bg-background border-b border-border flex items-center justify-between px-4 z-50',
        className
      )}
    >
      {/* User Profile Icon with Notification Badge */}
      <button aria-label="User Profile" className="relative focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full">
        <UserCircle className="h-8 w-8 text-primary" />
        <span className="absolute -top-0.5 -right-0.5 bg-red-600 text-white text-[10px] font-semibold rounded-full h-4 w-4 flex items-center justify-center border-2 border-background">
          1
        </span>
      </button>

      {/* TSB Logo */}
      <div className="flex items-center space-x-1">
        <div className="h-7 w-7 bg-sky-400 rounded-full flex items-center justify-center text-white font-bold text-sm">T</div>
        <div className="h-7 w-7 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">S</div>
        <div className="h-7 w-7 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">B</div>
      </div>

      {/* Notification Icon (Chat/Message icon from image) */}
      <button aria-label="Notifications" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full">
        <MessageCircle className="h-8 w-8 text-primary" />
      </button>
    </header>
  );
};

export default TopHeader;
