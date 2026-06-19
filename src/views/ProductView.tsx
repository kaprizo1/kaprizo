import React from 'react';
import { Product } from '@/types';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ChevronLeft, Star, ShieldCheck, ExternalLink, Check, X, ArrowRightLeft } from 'lucide-react';
import { mockProducts } from '@/data';

interface ProductViewProps {
  product: Product;
  onBack: () => void;
}

export function ProductView({ product, onBack }: ProductViewProps) {
  // Grab a couple of other products for the comparison table
  const comparisonProducts = mockProducts.filter(p => p.id !== product.id).slice(0, 2);

  return (
    <div className="space-y-12">
      {/* Top Nav */}
      <button 
        onClick={onBack}
        className="flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Storefront
      </button>

      {/* Product Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden dark:bg-zinc-900">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="aspect-square bg-zinc-100 rounded-lg overflow-hidden border-2 border-zinc-900 dark:bg-zinc-900 dark:border-zinc-50">
               <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
             <div className="aspect-square bg-zinc-100 rounded-lg overflow-hidden border-2 border-transparent hover:border-zinc-300 transition-colors opacity-60 dark:bg-zinc-900 dark:hover:border-zinc-700">
               <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale" />
            </div>
             <div className="aspect-square bg-zinc-100 rounded-lg overflow-hidden border-2 border-transparent hover:border-zinc-300 transition-colors opacity-60 dark:bg-zinc-900 dark:hover:border-zinc-700">
               <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale" />
            </div>
             <div className="aspect-square bg-zinc-100 rounded-lg overflow-hidden border-2 border-transparent hover:border-zinc-300 transition-colors opacity-60 dark:bg-zinc-900 dark:hover:border-zinc-700">
               <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale" />
            </div>
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col pt-4">
           {product.type === 'direct' ? (
              <span className="flex items-center text-xs uppercase tracking-wider font-bold text-zinc-500 mb-4 dark:text-zinc-400">
                <ShieldCheck className="mr-1.5 h-4 w-4 text-blue-500" />
                Verified direct from Kaprizo
              </span>
            ) : (
              <span className="flex items-center text-xs uppercase tracking-wider font-bold text-zinc-500 mb-4 dark:text-zinc-400">
                <ExternalLink className="mr-1.5 h-4 w-4 text-orange-500" />
                Trusted Partner Offer
              </span>
            )}
           
           <h1 className="text-3xl font-bold text-zinc-900 tracking-tight mb-2 dark:text-zinc-50">{product.name}</h1>
           <p className="text-lg text-zinc-500 mb-6 dark:text-zinc-400">{product.subtitle}</p>

           <div className="flex items-center space-x-4 mb-6">
             <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">${product.price}</span>
             <div className="flex items-center bg-zinc-100 px-3 py-1 rounded-full dark:bg-zinc-900">
               <Star className="h-4 w-4 fill-amber-400 text-amber-400 mr-1.5" />
               <span className="text-sm font-bold text-zinc-900 dark:text-zinc-50">{product.rating}</span>
               <span className="text-sm text-zinc-500 ml-1.5 dark:text-zinc-400">({product.reviewCount} reviews)</span>
             </div>
           </div>

           <p className="text-zinc-600 mb-8 leading-relaxed dark:text-zinc-300">
             {product.description || "In-depth review and detailed information coming soon for this outstanding piece. Discover the perfect blend of modern aesthetic and functional design."}
           </p>

           <div className="mt-auto space-y-4">
              {product.type === 'direct' ? (
                <Button size="lg" className="w-full py-6 text-base shadow-xl">
                  Add to Cart
                </Button>
              ) : (
                <Button size="lg" variant="outline" className="w-full py-6 shadow-sm border-zinc-300 text-base dark:border-zinc-700">
                  Buy from Partner Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              )}
              <div className="flex justify-center space-x-6 text-sm text-zinc-500 mt-6 dark:text-zinc-400">
                <span className="flex items-center"><ShieldCheck className="h-4 w-4 mr-1.5" /> Secure Checkout</span>
                <span className="flex items-center"><ArrowRightLeft className="h-4 w-4 mr-1.5" /> Easy Returns</span>
              </div>
           </div>
        </div>
      </div>

      {/* Pros and Cons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-zinc-200 dark:border-zinc-800">
        <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 dark:bg-emerald-950/20 dark:border-emerald-900/50">
          <h3 className="text-lg font-bold text-emerald-900 mb-6 flex items-center dark:text-emerald-400">
            <Check className="h-5 w-5 mr-2" />
            Reasons to buy
          </h3>
          <ul className="space-y-4">
            {product.pros?.map((pro, i) => (
              <li key={i} className="flex text-emerald-800 dark:text-emerald-300">
               <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span>
               {pro}
              </li>
            )) || <li>Premium quality components</li>}
          </ul>
        </div>
        
        <div className="bg-red-50 rounded-2xl p-8 border border-red-100 dark:bg-red-950/20 dark:border-red-900/50">
          <h3 className="text-lg font-bold text-red-900 mb-6 flex items-center dark:text-red-400">
            <X className="h-5 w-5 mr-2" />
            Reasons to avoid
          </h3>
          <ul className="space-y-4">
             {product.cons?.map((con, i) => (
              <li key={i} className="flex text-red-800 dark:text-red-300">
               <span className="h-1.5 w-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
               {con}
              </li>
            )) || <li>Limited stock availability</li>}
          </ul>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="pt-8">
        <h2 className="text-2xl font-bold text-zinc-900 tracking-tight mb-8 dark:text-zinc-50">Compare with similar items</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-b border-zinc-200 dark:border-zinc-800 w-1/4">Features</th>
                <th className="p-4 border-b border-zinc-200 dark:border-zinc-800 w-1/4">
                  <div className="flex flex-col items-center">
                    <img src={product.image} className="w-16 h-16 rounded-md object-cover mb-2" />
                    <span className="font-bold text-sm text-center">{product.name}</span>
                  </div>
                </th>
                {comparisonProducts.map(cp => (
                   <th key={cp.id} className="p-4 border-b border-zinc-200 dark:border-zinc-800 w-1/4">
                    <div className="flex flex-col items-center">
                      <img src={cp.image} className="w-16 h-16 rounded-md object-cover mb-2" />
                      <span className="font-medium text-sm text-zinc-600 text-center dark:text-zinc-400">{cp.name}</span>
                    </div>
                   </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
               <tr>
                <td className="p-4 border-b border-zinc-200 font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">Price</td>
                <td className="p-4 border-b border-zinc-200 text-center font-bold dark:border-zinc-800">${product.price}</td>
                {comparisonProducts.map(cp => (
                  <td key={cp.id} className="p-4 border-b border-zinc-200 text-center text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">${cp.price}</td>
                ))}
              </tr>
               <tr>
                <td className="p-4 border-b border-zinc-200 font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">Rating</td>
                <td className="p-4 border-b border-zinc-200 text-center dark:border-zinc-800">
                  <div className="flex items-center justify-center">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" /> {product.rating}
                  </div>
                </td>
                {comparisonProducts.map(cp => (
                  <td key={cp.id} className="p-4 border-b border-zinc-200 text-center dark:border-zinc-800">
                    <div className="flex items-center justify-center text-zinc-600 dark:text-zinc-400">
                      <Star className="w-4 h-4 fill-amber-400/50 text-amber-400/50 mr-1" /> {cp.rating}
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 border-b border-zinc-200 font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">Fulfillment</td>
                <td className="p-4 border-b border-zinc-200 text-center dark:border-zinc-800">
                  <Badge variant={product.type === 'direct' ? 'default' : 'secondary'} className="text-[10px]">
                    {product.type === 'direct' ? 'Direct' : 'Partner'}
                  </Badge>
                </td>
                {comparisonProducts.map(cp => (
                   <td key={cp.id} className="p-4 border-b border-zinc-200 text-center dark:border-zinc-800">
                     <Badge variant={cp.type === 'direct' ? 'default' : 'secondary'} className="text-[10px]">
                      {cp.type === 'direct' ? 'Direct' : 'Partner'}
                    </Badge>
                   </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
