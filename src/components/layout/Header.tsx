import React from 'react';
import { ShoppingBag, Search, Bell, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ViewState } from '@/types';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
  toggleMobile: () => void;
}

export function Header({ currentView, onChangeView, toggleMobile }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-zinc-200 bg-white/80 px-4 md:px-8 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      
      {/* Welcome Message */}
      <div className="flex items-center">
        <button className="mr-4 text-zinc-500 lg:hidden" onClick={toggleMobile}>
          <Menu className="h-6 w-6" />
        </button>
        <div className="flex flex-col hidden sm:flex">
          <h1 className="text-xl font-semibold text-zinc-900 tracking-tight dark:text-zinc-50">
            {currentView === 'dashboard' ? 'Partner Dashboard' : 'Welcome back, Taylor'}
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {currentView === 'dashboard' ? 'Overview of your earnings and stats.' : "Discover what's new in our curated collection."}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        
        {/* Toggle Store/Dashboard */}
        <div className="flex items-center rounded-full bg-zinc-100 p-1 dark:bg-zinc-900">
          <button
            onClick={() => onChangeView('storefront')}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
              currentView !== 'dashboard'
                ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-50"
                : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
            )}
          >
            Storefront
          </button>
          <button
            onClick={() => onChangeView('dashboard')}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
              currentView === 'dashboard'
                ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-50"
                : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
            )}
          >
            Dashboard
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 sm:border-l border-zinc-200 sm:pl-6 dark:border-zinc-800">
          <button className="text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50 hidden sm:block">
            <Search className="h-5 w-5" />
          </button>
          <ThemeToggle />
          <button className="relative text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50">
            <Bell className="h-5 w-5" />
            <span className="absolute right-0 top-0 flex h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-zinc-950"></span>
          </button>
          <button className="relative text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-900 text-[10px] font-bold text-white dark:bg-zinc-50 dark:text-zinc-900">
              3
            </span>
          </button>
          
          {/* Avatar */}
          <div className="h-9 w-9 cursor-pointer overflow-hidden rounded-full border border-zinc-200 ml-2 dark:border-zinc-800">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" 
              alt="User avatar" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
