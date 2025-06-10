import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { PlusCircle } from 'lucide-react'; // Example icon if needed for Create Card

interface SavingsPot {
  id: string;
  potName: string;
  goalAmount: number;
  currencySymbol: string;
  initials: string;
  currentAmount?: number;
}

interface SavingsCardItemProps extends SavingsPot {
  className?: string;
}

const SavingsCardItem: React.FC<SavingsCardItemProps> = ({
  potName,
  goalAmount,
  currencySymbol,
  initials,
  currentAmount,
  className,
}) => {
  const formattedGoal = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currencySymbol === '£' ? 'GBP' : 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(goalAmount);

  return (
    <Card className={cn("shadow-md rounded-lg bg-card text-card-foreground", className)}>
      <CardContent className="p-3 sm:p-4 flex items-center justify-between">
        <div className="space-y-0.5">
          <CardTitle className="text-base font-semibold text-card-foreground">{potName}</CardTitle>
          <CardDescription className="text-xs sm:text-sm text-muted-foreground">
            {formattedGoal} Goal
            {typeof currentAmount === 'number' && 
              <span className="block text-xs">Current: {currencySymbol}{currentAmount.toFixed(2)}</span>
            }
          </CardDescription>
        </div>
        <div className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-accent text-accent bg-card font-semibold text-sm shrink-0">
          {initials}
        </div>
      </CardContent>
    </Card>
  );
};

interface CreateSavingsCardItemProps {
  title: string;
  subtitle: string;
  className?: string;
  onClick?: () => void;
}

const CreateSavingsCardItem: React.FC<CreateSavingsCardItemProps> = ({
  title,
  subtitle,
  className,
  onClick,
}) => {
  return (
    <Card
      className={cn("shadow-md rounded-lg bg-card text-card-foreground cursor-pointer hover:bg-muted/50 transition-colors h-full", className)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick?.()}
    >
      <CardContent className="p-3 sm:p-4 flex flex-col justify-center h-full">
        <CardTitle className="text-base font-semibold text-card-foreground">{title}</CardTitle>
        <CardDescription className="text-xs sm:text-sm text-muted-foreground mt-0.5">{subtitle}</CardDescription>
        {/* Optional: <PlusCircle className="h-5 w-5 text-primary mt-2 self-start" /> */}
      </CardContent>
    </Card>
  );
};

interface SavingsCardsGridProps {
  className?: string;
}

const SavingsCardsGrid: React.FC<SavingsCardsGridProps> = ({ className }) => {
  const savingsPotsData: SavingsPot[] = [
    { id: "1", potName: "Savings Pot 1", goalAmount: 0.00, currencySymbol: "£", initials: "SP", currentAmount: 0.00 },
    // Example of another pot:
    // { id: "2", potName: "Holiday Fund", goalAmount: 1000.00, currencySymbol: "£", initials: "HF", currentAmount: 250.00 },
  ];

  const handleCreatePot = React.useCallback(() => {
    console.log("Create new savings pot action triggered");
    // Implement actual logic, e.g., show a dialog or navigate
  }, []);

  return (
    <div className={cn("grid grid-cols-2 gap-3 sm:gap-4", className)}>
      {savingsPotsData.map((pot) => (
        <SavingsCardItem key={pot.id} {...pot} />
      ))}
      <CreateSavingsCardItem
        title="Start a Savings Pot"
        subtitle="Set a savings goal"
        onClick={handleCreatePot}
      />
    </div>
  );
};

export default SavingsCardsGrid;
