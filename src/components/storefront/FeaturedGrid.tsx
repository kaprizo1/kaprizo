import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '@/types';
import { Button } from '@/components/ui/Button';

interface FeaturedGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export function FeaturedGrid({ products, onSelectProduct }: FeaturedGridProps) {
  const row1 = products.slice(0, 4);
  const row2 = products.slice(4, 8);
  const row3 = products.slice(8, 12);
  const row4 = products.slice(12, 16);

  return (
    <div className="space-y-14">
      {/* Section 1: Best Deals & Additions */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-zinc-900 tracking-tight dark:text-zinc-50">Best Deals & Additions</h2>
          <div className="flex space-x-2">
            <Button variant="secondary" className="rounded-full px-5 hover:bg-zinc-200 dark:bg-zinc-900" size="sm">Recommended</Button>
            <Button variant="ghost" className="rounded-full px-5 text-zinc-500" size="sm">Top Rated</Button>
            <Button variant="ghost" className="rounded-full px-5 text-zinc-500" size="sm">Coming Soon</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {row1.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onSelectProduct}
            />
          ))}
        </div>
      </div>

      {/* Section 2: New Arrivals */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-zinc-900 tracking-tight dark:text-zinc-50">New Arrivals</h2>
          <div className="flex space-x-2">
            <Button variant="secondary" className="rounded-full px-5 hover:bg-zinc-200 dark:bg-zinc-900" size="sm">This Week</Button>
            <Button variant="ghost" className="rounded-full px-5 text-zinc-500" size="sm">This Month</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {row2.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onSelectProduct}
            />
          ))}
        </div>
      </div>

      {/* Section 3: Limited Edition */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-zinc-900 tracking-tight dark:text-zinc-50">Limited Edition</h2>
          <Button variant="ghost" className="rounded-full px-5 text-zinc-500" size="sm">View All</Button>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {row3.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onSelectProduct}
            />
          ))}
        </div>
      </div>

      {/* Section 4: Curated Picks */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-zinc-900 tracking-tight dark:text-zinc-50">Curated Picks</h2>
          <Button variant="ghost" className="rounded-full px-5 text-zinc-500" size="sm">Explore All</Button>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {row4.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onSelectProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
