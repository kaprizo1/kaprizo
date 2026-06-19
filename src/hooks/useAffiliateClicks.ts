import { useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { Product } from '@/types';

export function useAffiliateClicks() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const trackClick = useCallback(async (product: Product) => {
    setLoading(true);
    setError(null);
    try {
      const { error: insertError } = await supabase
        .from('affiliate_clicks')
        .insert({
          product_id: product.id,
          product_name: product.name,
          affiliate_url: product.affiliateUrl,
          user_agent: navigator.userAgent,
          referrer: document.referrer,
        });

      if (insertError) {
        console.error('Failed to track click:', insertError);
        setError(insertError.message);
      }
    } catch (err) {
      console.error('Error tracking click:', err);
      setError('Failed to track click');
    } finally {
      setLoading(false);
    }
  }, []);

  return { trackClick, loading, error };
}
