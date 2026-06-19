import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '@/types';
import { Button } from '@/components/ui/Button';

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export function ProductGrid({ products, onSelectProduct }: ProductGridProps) {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-zinc-900 tracking-tight dark:text-zinc-50">Best Deals & Additions</h2>
        <div className="flex space-x-2">
          <Button variant="secondary" className="rounded-full px-5 hover:bg-zinc-200 dark:bg-zinc-900" size="sm">Recommended</Button>
          <Button variant="ghost" className="rounded-full px-5 text-zinc-500" size="sm">Top Rated</Button>
          <Button variant="ghost" className="rounded-full px-5 text-zinc-500" size="sm">Coming Soon</Button>
        </div>
      </div>
      
      {/* 
        CRITICAL REQUIREMENT: 
        4 cards per row on desktop (lg:grid-cols-4), 2 on tablet (sm:grid-cols-2), 1 on mobile (grid-cols-1).
        Cards inside are forced to have max-h-[250px] images.
      */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={onSelectProduct} 
          />
        ))}
      </div>
    </div>
  );
}
