import React from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Heart, SlidersHorizontal, Search } from 'lucide-react';

export function HeroBento() {
  return (
    <div className="mb-12">
      {/* Filters & Actions Bar */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-bold text-zinc-900 tracking-tight dark:text-zinc-50 mr-4">Featured Collections</h2>
          <div className="hidden space-x-1 sm:flex">
            <Button variant="secondary" className="rounded-full px-5 hover:bg-zinc-200" size="sm">All</Button>
            <Button variant="ghost" className="rounded-full px-5 text-zinc-500" size="sm">Men</Button>
            <Button variant="ghost" className="rounded-full px-5 text-zinc-500" size="sm">Women</Button>
            <Button variant="ghost" className="rounded-full px-5 text-zinc-500" size="sm">Accessories</Button>
          </div>
        </div>
        <div className="flex items-center space-x-3">
           <Button variant="outline" size="icon" className="rounded-full text-zinc-500">
             <Search className="h-4 w-4" />
           </Button>
           <Button variant="outline" className="rounded-full gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Large Featured Card (Left) */}
        <div className="group relative overflow-hidden rounded-2xl md:col-span-2 min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1571781926291-c477d6af24d7?w=1200&q=80" 
            alt="Spring Collection" 
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#d4af37]">New Season</p>
            <h3 className="mb-6 text-4xl font-bold text-white tracking-tight">Spring Beige Collection</h3>
            <Button className="w-fit rounded-full bg-white text-zinc-900 hover:bg-zinc-100 font-medium px-6 py-5">
              View Lookbook
            </Button>
          </div>
        </div>

        {/* Right smaller cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1">
          {/* Top Right Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 min-h-[200px]">
            <img 
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80" 
              alt="Shoes" 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
               <button className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-red-500">
                <Heart className="h-5 w-5" />
              </button>
              <div className="flex items-end justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Suede Loafers</h4>
                  <p className="text-sm font-medium text-zinc-300">Italian Leather</p>
                </div>
                <p className="text-xl font-bold text-white">$120</p>
              </div>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 min-h-[200px]">
             <img 
              src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=800&q=80" 
              alt="Bag" 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
              <button className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-red-500">
                <Heart className="h-5 w-5" />
              </button>
              <div className="flex items-end justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Canvas Tote</h4>
                  <p className="text-sm font-medium text-zinc-300">Daily Essentials</p>
                </div>
                <p className="text-xl font-bold text-white">$85</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
