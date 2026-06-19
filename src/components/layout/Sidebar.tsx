import React from 'react';
import { Home, Grid, Tag, LayoutDashboard, LogOut, ChevronRight, PackageSearch } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  currentView: string;
  onChangeView: (view: any) => void;
  isOpen: boolean;
  closeMobile: () => void;
}

export function Sidebar({ currentView, onChangeView, isOpen, closeMobile }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={closeMobile} />
      )}
      <aside className={cn(
        "fixed left-0 top-0 z-40 h-screen w-64 border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 transition-transform duration-300",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
      <div className="flex h-full flex-col px-4 py-6">
        {/* Brand */}
        <div className="mb-8 flex items-center px-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900">
            <span className="text-xl font-bold font-serif">K</span>
          </div>
          <span className="ml-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Kaprizo
          </span>
        </div>

        {/* Navigation */}
        <div className="flex-1 space-y-1">
          <p className="px-4 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2 mt-4">
            Menu
          </p>
          
          <button
            onClick={() => onChangeView('storefront')}
            className={cn(
              "flex w-full items-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
              currentView === 'storefront' || currentView === 'product_details'
                ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800/50 dark:text-zinc-50"
                : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-50"
            )}
          >
            <Home className="mr-3 h-5 w-5" />
            Home
          </button>

          <button
            onClick={() => onChangeView('storefront')}
            className={cn(
              "flex w-full items-center justify-between rounded-md px-4 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-50",
            )}
          >
            <div className="flex items-center">
              <Grid className="mr-3 h-5 w-5" />
              Categories
            </div>
            <ChevronRight className="h-4 w-4 opacity-50" />
          </button>
          
          {/* Sub Items Simulation */}
          <div className="pl-12 pr-4 py-1 space-y-1">
            <button className="block w-full text-left text-sm text-zinc-500 hover:text-zinc-900 py-1 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50">Apparel</button>
            <button className="block w-full text-left text-sm text-zinc-500 hover:text-zinc-900 py-1 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50">Accessories</button>
            <button className="block w-full text-left text-sm text-zinc-500 hover:text-zinc-900 py-1 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50">Electronics</button>
          </div>

          <button
            onClick={() => onChangeView('storefront')}
            className={cn(
              "flex w-full items-center rounded-md px-4 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-50",
            )}
          >
            <Tag className="mr-3 h-5 w-5" />
            Deals & Offers
          </button>

          <p className="px-4 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2 mt-8">
            Business
          </p>
          
          <button
            onClick={() => onChangeView('dashboard')}
            className={cn(
              "flex w-full items-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
              currentView === 'dashboard'
                ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800/50 dark:text-zinc-50"
                : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-50"
            )}
          >
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Partner Dashboard
          </button>
          <button
            className={cn(
               "flex w-full items-center rounded-md px-4 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-50",
            )}
          >
            <PackageSearch className="mr-3 h-5 w-5" />
            Manage Inventory
          </button>
        </div>

        {/* Footer */}
        <div className="mt-auto border-t border-zinc-200 pt-4 dark:border-zinc-800">
          <button className="flex w-full items-center rounded-md px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-red-50 hover:text-red-600 dark:text-zinc-400 dark:hover:bg-red-950/30 dark:hover:text-red-500">
            <LogOut className="mr-3 h-5 w-5" />
            Sign out
          </button>
        </div>
      </div>
    </aside>
    </>
  );
}
