import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface PromoBannerProps {
  title?: string;
  description?: string;
  actionText?: string;
  onActionClick?: () => void;
  defaultVisible?: boolean;
  className?: string;
}

const defaultPromoData = {
  title: "Switch to paperless in the mobile app." as const,
  description: "Cut down on your paperwork and save on filing. Click on Profile and update your settings or click below." as const,
  actionText: "Switch now" as const,
};

const PromoBanner: React.FC<PromoBannerProps> = ({
  title = defaultPromoData.title,
  description = defaultPromoData.description,
  actionText = defaultPromoData.actionText,
  onActionClick,
  defaultVisible = true,
  className,
}) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(defaultVisible);

  const handleClose = React.useCallback(() => {
    setIsVisible(false);
    // If parent needs to know: props.onClose?.();
  }, []);

  const handleAction = React.useCallback(() => {
    console.log("Promo action clicked:", actionText);
    if (onActionClick) {
      onActionClick();
    }
    // Example action: setIsVisible(false); // Optionally hide after action
  }, [actionText, onActionClick]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        "w-full bg-card text-card-foreground p-4 rounded-lg shadow-md flex items-start space-x-3 border-l-4 border-amber-500", // Using amber-500 for the highlight
        className
      )}
      role="alert"
    >
      <div className="flex-grow space-y-1">
        <h3 className="font-semibold text-md text-card-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <Button 
          variant="link" 
          className="p-0 h-auto text-primary font-semibold hover:text-primary/80 text-sm mt-1.5"
          onClick={handleAction}
        >
          {actionText}
        </Button>
      </div>
      <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:bg-muted/50 shrink-0" onClick={handleClose} aria-label="Close promo banner">
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default PromoBanner;
