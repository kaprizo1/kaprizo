import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { SocialMedia } from '@/types';

export function useSocialMedia() {
  const [socials, setSocials] = useState<SocialMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSocials = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error: fetchError } = await supabase
        .from('social_media')
        .select('*')
        .order('sort_order', { ascending: true });

      if (fetchError) {
        setError(fetchError.message);
      } else {
        setSocials(data || []);
      }
    } catch (err) {
      setError('Failed to fetch social media links');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSocials();
  }, [fetchSocials]);

  const toggleActive = useCallback(async (id: string, active: boolean) => {
    try {
      const { error: updateError } = await supabase
        .from('social_media')
        .update({ active })
        .eq('id', id);

      if (updateError) {
        setError(updateError.message);
      } else {
        setSocials((prev) =>
          prev.map((s) => (s.id === id ? { ...s, active } : s))
        );
      }
    } catch (err) {
      setError('Failed to update social media');
    }
  }, []);

  const updateUrl = useCallback(async (id: string, url: string) => {
    try {
      const { error: updateError } = await supabase
        .from('social_media')
        .update({ url })
        .eq('id', id);

      if (updateError) {
        setError(updateError.message);
      } else {
        setSocials((prev) =>
          prev.map((s) => (s.id === id ? { ...s, url } : s))
        );
      }
    } catch (err) {
      setError('Failed to update URL');
    }
  }, []);

  const addSocial = useCallback(async (name: string, url: string, icon: string) => {
    try {
      const { data, error: insertError } = await supabase
        .from('social_media')
        .insert({ name, url, icon, active: true, sort_order: socials.length + 1 })
        .select()
        .single();

      if (insertError) {
        setError(insertError.message);
        return null;
      } else if (data) {
        setSocials((prev) => [...prev, data]);
        return data;
      }
    } catch (err) {
      setError('Failed to add social media');
    }
    return null;
  }, [socials.length]);

  const deleteSocial = useCallback(async (id: string) => {
    try {
      const { error: deleteError } = await supabase
        .from('social_media')
        .delete()
        .eq('id', id);

      if (deleteError) {
        setError(deleteError.message);
      } else {
        setSocials((prev) => prev.filter((s) => s.id !== id));
      }
    } catch (err) {
      setError('Failed to delete social media');
    }
  }, []);

  return {
    socials,
    loading,
    error,
    fetchSocials,
    toggleActive,
    updateUrl,
    addSocial,
    deleteSocial,
  };
}
