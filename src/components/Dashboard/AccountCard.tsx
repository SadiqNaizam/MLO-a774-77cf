import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { MoreVertical, CreditCard, Plus } from 'lucide-react';

interface AccountCardProps {
  accountName?: string;
  sortCode?: string;
  accountNumber?: string;
  balance?: number;
  currencySymbol?: string;
  className?: string;
}

const defaultAccountData = {
  accountName: "Spend & Save Account" as const,
  sortCode: "77-85-66" as const,
  accountNumber: "04558856" as const,
  balance: 0.00,
  currencySymbol: "£" as const,
};

const AccountCard: React.FC<AccountCardProps> = ({
  accountName = defaultAccountData.accountName,
  sortCode = defaultAccountData.sortCode,
  accountNumber = defaultAccountData.accountNumber,
  balance = defaultAccountData.balance,
  currencySymbol = defaultAccountData.currencySymbol,
  className,
}) => {
  const [showQuickView, setShowQuickView] = React.useState<boolean>(false);

  const formattedBalance = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currencySymbol === '£' ? 'GBP' : 'USD', // Basic currency handling
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(balance);

  return (
    <Card className={cn("w-full shadow-md rounded-lg bg-card text-card-foreground overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-start justify-between pb-2 pt-4 px-4">
        <div className="space-y-0.5">
          <h2 className="text-xl font-semibold text-primary">{accountName}</h2>
          <p className="text-sm text-muted-foreground">
            {sortCode} | {accountNumber}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground shrink-0">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View statements</DropdownMenuItem>
            <DropdownMenuItem>Account details</DropdownMenuItem>
            <DropdownMenuItem>Manage card</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <p className="text-4xl font-bold my-3 text-card-foreground">{formattedBalance}</p>
        <div className="flex space-x-3 mt-4 mb-3">
          <Button variant="outline" className="flex-grow border-primary text-primary hover:bg-primary/10 focus:ring-ring h-11 rounded-full font-medium">
            Move money
          </Button>
          <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary/10 focus:ring-ring h-11 w-11 rounded-full shrink-0">
            <CreditCard className="h-5 w-5" />
          </Button>
        </div>
        <button
          onClick={() => setShowQuickView(!showQuickView)}
          className="flex items-center space-x-1.5 text-primary font-medium text-sm py-2 hover:text-primary/80 transition-colors"
        >
          <span>Quick view</span>
          <Plus className={`h-4 w-4 transition-transform ${showQuickView ? 'rotate-45' : ''}`} />
        </button>
        {showQuickView && (
          <div className="mt-2 p-3 bg-muted rounded-md text-sm text-muted-foreground animate-accordion-down">
            Quick view details would appear here. For example, recent transactions or available balance could be fetched and displayed.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AccountCard;
