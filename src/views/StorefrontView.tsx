import React from 'react';
import { HeroBento } from '@/components/storefront/HeroBento';
import { ProductGrid } from '@/components/storefront/ProductGrid';
import { mockProducts } from '@/data';
import { Product } from '@/types';

interface StorefrontViewProps {
  onSelectProduct: (product: Product) => void;
}

export function StorefrontView({ onSelectProduct }: StorefrontViewProps) {
  return (
    <div className="space-y-16">
      <HeroBento />
      <ProductGrid products={mockProducts} onSelectProduct={onSelectProduct} />
    </div>
  );
}
