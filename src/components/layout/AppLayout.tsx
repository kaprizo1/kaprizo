import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Footer } from './Footer';
import { ViewState } from '@/types';

interface AppLayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

export function AppLayout({ children, currentView, onChangeView }: AppLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Sidebar currentView={currentView} onChangeView={onChangeView} isOpen={mobileMenuOpen} closeMobile={() => setMobileMenuOpen(false)} />
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <Header currentView={currentView} onChangeView={onChangeView} toggleMobile={() => setMobileMenuOpen(!mobileMenuOpen)} />
        <main className="flex-1 p-4 md:p-8 lg:p-8 pb-20 w-full overflow-x-hidden">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
        {currentView !== 'dashboard' && <Footer />}
      </div>
    </div>
  );
}
