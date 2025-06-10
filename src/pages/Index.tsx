import React from 'react';

// Import organism components
import TopHeader from '../../components/layout/TopHeader';
import AccountCard from '../../components/Dashboard/AccountCard';
import SavingsCardsGrid from '../../components/Dashboard/SavingsCardsGrid';
import PromoBanner from '../../components/Dashboard/PromoBanner';
import TabBarNavigation from '../../components/layout/TabBarNavigation';

// Define interfaces for page-specific data passed to components
interface IndexPageAccountData {
  accountName: string;
  sortCode: string;
  accountNumber: string;
  balance: number;
  currencySymbol: string;
}

interface IndexPagePromoData {
  title: string;
  description: string;
  actionText: string;
}

const IndexPage: React.FC = () => {
  // Dummy data for components, defined directly in the page file
  const accountData: IndexPageAccountData = {
    accountName: "Spend & Save Account" as const,
    sortCode: "77-85-66" as const,
    accountNumber: "04558856" as const,
    balance: 0.00,
    currencySymbol: "£" as const,
  };

  const promoData: IndexPagePromoData = {
    title: "Switch to paperless in the mobile app." as const,
    description: "Cut down on your paperwork and save on filing. Click on Profile and update your settings or click below." as const,
    actionText: "Switch now" as const,
  };

  const handlePromoAction = () => {
    console.log("Promo action 'Switch now' clicked from IndexPage.");
    // In a real application, this could navigate to a settings page or open a modal.
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-background text-foreground">
      <TopHeader />

      <main className="flex-1 w-full overflow-y-auto pt-16 pb-16">
        {/* 
          Layout Requirements for mainContent:
          - container: w-full max-w-md mx-auto
          - layout: Flex space-y-6 flex-col (handled by space-y-6 on the div below)
          - Header height for pt: h-16 (4rem)
          - TabBar height for pb: h-16 (4rem)
          - Inner div py-6 for content padding within scrollable area
        */}
        <div className="w-full max-w-md mx-auto px-4 py-6 space-y-6">
          <AccountCard
            accountName={accountData.accountName}
            sortCode={accountData.sortCode}
            accountNumber={accountData.accountNumber}
            balance={accountData.balance}
            currencySymbol={accountData.currencySymbol}
          />
          
          <SavingsCardsGrid />
          
          <PromoBanner
            title={promoData.title}
            description={promoData.description}
            actionText={promoData.actionText}
            onActionClick={handlePromoAction}
          />
        </div>
      </main>

      <TabBarNavigation />
    </div>
  );
};

export default IndexPage;
