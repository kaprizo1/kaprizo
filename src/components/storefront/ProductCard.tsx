import React from 'react';
import { Heart, ShoppingCart, ExternalLink, ShieldCheck } from 'lucide-react';
import { Product } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div className="group flex flex-col bg-white dark:bg-zinc-950">
      <div className="relative overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900 aspect-square max-h-[250px] cursor-pointer" onClick={() => onClick(product)}>
        {/* Image */}
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Top Left Badge */}
        {product.badge && (
          <div className="absolute left-3 top-3 z-10">
            <Badge variant={
              product.badge === 'NEW' ? 'new' : 
              product.badge === 'SALE' ? 'sale' : 'default'
            }>
              {product.badge}
            </Badge>
          </div>
        )}

        {/* Top Right Actions */}
        <button className="absolute right-3 top-3 z-10 rounded-full bg-white/50 p-2 text-zinc-900 backdrop-blur-sm transition-colors hover:bg-white hover:text-red-500 dark:bg-zinc-900/50 dark:text-zinc-50 dark:hover:bg-zinc-900 dark:hover:text-red-500" onClick={(e) => e.stopPropagation()}>
          <Heart className="h-4 w-4" />
        </button>

        {/* Hover Quick Add Action (Visible on hover on desktop) */}
        <div className="absolute bottom-3 left-3 right-3 flex translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
           <Button className="w-full shadow-lg rounded-full" onClick={(e) => e.stopPropagation()}>
              + Quick Add
           </Button>
        </div>
      </div>
      
      {/* Product Details Area */}
      <div className="mt-4 flex flex-col flex-1 px-1">
        <div className="flex flex-col gap-1.5 mb-2">
            {/* Purchase Type Badge */}
            {product.type === 'direct' ? (
              <span className="flex items-center text-[10px] uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
                <ShieldCheck className="mr-1 h-3 w-3 text-blue-500" />
                Sold by Kaprizo
              </span>
            ) : (
              <span className="flex items-center text-[10px] uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
                <ExternalLink className="mr-1 h-3 w-3 text-orange-500" />
                Partner Offer
              </span>
            )}
        </div>

        {/* Name and Price Line */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 leading-tight cursor-pointer hover:underline" onClick={() => onClick(product)}>
            {product.name}
          </h3>
          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 whitespace-nowrap">
            ${product.price}
          </p>
        </div>
        
        {/* Subtitle */}
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1">
          {product.subtitle}
        </p>
        
        {/* Action Button */}
        <div className="mt-4">
           {product.type === 'direct' ? (
              <Button size="sm" className="w-full bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Buy Now
              </Button>
           ) : (
              <Button size="sm" variant="outline" className="w-full border-zinc-300 dark:border-zinc-700">
                <ExternalLink className="mr-2 h-4 w-4" />
                Shop Deal
              </Button>
           )}
        </div>
      </div>
    </div>
  );
}
