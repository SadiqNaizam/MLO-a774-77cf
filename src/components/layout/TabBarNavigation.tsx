import React from 'react';
import { cn } from '@/lib/utils';
import { Home, ArrowRightLeft, LayoutGrid, MoreHorizontal, LucideIcon } from 'lucide-react';

interface TabItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href?: string;
  isNew?: boolean;
}

const tabItems: TabItem[] = [
  { id: 'Home', label: 'Home', icon: Home, href: '/', isNew: true },
  { id: 'Payments', label: 'Payments', icon: ArrowRightLeft, href: '/payments' },
  { id: 'Products', label: 'Products', icon: LayoutGrid, href: '/products' },
  { id: 'More', label: 'More', icon: MoreHorizontal, href: '/more' },
];

interface TabBarNavigationProps {
  className?: string;
  onTabChange?: (tabId: string, href?: string) => void;
}

const TabBarNavigation: React.FC<TabBarNavigationProps> = ({ className, onTabChange }) => {
  const [activeTab, setActiveTab] = React.useState<string>(tabItems[0].id);

  const handleTabClick = React.useCallback((tabId: string, href?: string) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId, href);
    }
    // In a real app with react-router, navigation would happen here:
    // if (href) navigate(href);
    if (href) {
      console.log(`Simulating navigation to ${href}`);
    }
  }, [onTabChange]);

  return (
    <nav
      className={cn(
        'fixed bottom-0 left-0 right-0 w-full h-16 bg-card border-t border-border flex items-stretch justify-around shadow-top z-50',
        className
      )}
    >
      {tabItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleTabClick(item.id, item.href)}
          aria-current={activeTab === item.id ? 'page' : undefined}
          className={cn(
            'flex flex-col items-center justify-center pt-2 pb-1 px-1 space-y-0.5 flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-card',
            activeTab === item.id ? 'text-primary' : 'text-muted-foreground hover:bg-muted/10 transition-colors'
          )}
        >
          <div className="relative"> {/* Container for icon and its potential badge */}
            <item.icon className="h-6 w-6" strokeWidth={activeTab === item.id ? 2.5 : 2} />
            {item.id === 'Home' && item.isNew && (
              <span
                className="absolute -top-[6px] -right-[10px] text-[9px] font-semibold bg-pink-500 text-white px-1.5 py-[1px] rounded-sm leading-tight shadow-sm"
              >
                NEW
              </span>
            )}
          </div>
          <span className={cn(
            "text-xs",
            activeTab === item.id ? 'font-semibold' : 'font-medium'
            )}>
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default TabBarNavigation;
