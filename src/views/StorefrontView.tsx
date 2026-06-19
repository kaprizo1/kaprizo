import React from 'react';
import { HeroBento } from '@/components/storefront/HeroBento';
import { ProductGrid } from '@/components/storefront/ProductGrid';
import { FeaturedGrid } from '@/components/storefront/FeaturedGrid';
import { mockProducts } from '@/data';
import { Product } from '@/types';

interface StorefrontViewProps {
  onSelectProduct: (product: Product) => void;
}

export function StorefrontView({ onSelectProduct }: StorefrontViewProps) {
  return (
    <div className="space-y-16">
      <HeroBento />
      <FeaturedGrid products={mockProducts} onSelectProduct={onSelectProduct} />
    </div>
  );
}
