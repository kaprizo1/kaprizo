import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';

export interface FooterColumn {
  id: string;
  title: string;
  sort_order: number;
  active: boolean;
  created_at: string;
  links: FooterLink[];
}

export interface FooterLink {
  id: string;
  column_id: string;
  label: string;
  href: string;
  sort_order: number;
  created_at: string;
}

export function useFooter() {
  const [columns, setColumns] = useState<FooterColumn[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFooter = useCallback(async () => {
    setLoading(true);
    try {
      const { data: cols, error: colsError } = await supabase
        .from('footer_columns')
        .select('*')
        .order('sort_order', { ascending: true });

      if (colsError) {
        setError(colsError.message);
        setLoading(false);
        return;
      }

      const { data: links, error: linksError } = await supabase
        .from('footer_links')
        .select('*')
        .order('sort_order', { ascending: true });

      if (linksError) {
        setError(linksError.message);
        setLoading(false);
        return;
      }

      const enriched = (cols || []).map((col) => ({
        ...col,
        links: (links || []).filter((l) => l.column_id === col.id),
      }));

      setColumns(enriched);
    } catch (err) {
      setError('Failed to fetch footer data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFooter();
  }, [fetchFooter]);

  const toggleColumn = useCallback(async (id: string, active: boolean) => {
    try {
      const { error: updateError } = await supabase
        .from('footer_columns')
        .update({ active })
        .eq('id', id);

      if (updateError) {
        setError(updateError.message);
      } else {
        setColumns((prev) =>
          prev.map((c) => (c.id === id ? { ...c, active } : c))
        );
      }
    } catch (err) {
      setError('Failed to update column');
    }
  }, []);

  const updateColumnTitle = useCallback(async (id: string, title: string) => {
    try {
      const { error: updateError } = await supabase
        .from('footer_columns')
        .update({ title })
        .eq('id', id);

      if (updateError) {
        setError(updateError.message);
      } else {
        setColumns((prev) =>
          prev.map((c) => (c.id === id ? { ...c, title } : c))
        );
      }
    } catch (err) {
      setError('Failed to update column title');
    }
  }, []);

  const addColumn = useCallback(async (title: string) => {
    try {
      const { data, error: insertError } = await supabase
        .from('footer_columns')
        .insert({ title, sort_order: columns.length + 1, active: true })
        .select()
        .single();

      if (insertError) {
        setError(insertError.message);
        return null;
      }
      if (data) {
        setColumns((prev) => [...prev, { ...data, links: [] }]);
        return data;
      }
    } catch (err) {
      setError('Failed to add column');
    }
    return null;
  }, [columns.length]);

  const deleteColumn = useCallback(async (id: string) => {
    try {
      const { error: deleteError } = await supabase
        .from('footer_columns')
        .delete()
        .eq('id', id);

      if (deleteError) {
        setError(deleteError.message);
      } else {
        setColumns((prev) => prev.filter((c) => c.id !== id));
      }
    } catch (err) {
      setError('Failed to delete column');
    }
  }, []);

  const addLink = useCallback(async (columnId: string, label: string, href: string) => {
    try {
      const col = columns.find((c) => c.id === columnId);
      const nextOrder = col ? col.links.length + 1 : 1;

      const { data, error: insertError } = await supabase
        .from('footer_links')
        .insert({ column_id: columnId, label, href, sort_order: nextOrder })
        .select()
        .single();

      if (insertError) {
        setError(insertError.message);
        return null;
      }
      if (data) {
        setColumns((prev) =>
          prev.map((c) =>
            c.id === columnId ? { ...c, links: [...c.links, data] } : c
          )
        );
        return data;
      }
    } catch (err) {
      setError('Failed to add link');
    }
    return null;
  }, [columns]);

  const updateLink = useCallback(async (id: string, label: string, href: string) => {
    try {
      const { error: updateError } = await supabase
        .from('footer_links')
        .update({ label, href })
        .eq('id', id);

      if (updateError) {
        setError(updateError.message);
      } else {
        setColumns((prev) =>
          prev.map((c) => ({
            ...c,
            links: c.links.map((l) =>
              l.id === id ? { ...l, label, href } : l
            ),
          }))
        );
      }
    } catch (err) {
      setError('Failed to update link');
    }
  }, []);

  const deleteLink = useCallback(async (id: string) => {
    try {
      const { error: deleteError } = await supabase
        .from('footer_links')
        .delete()
        .eq('id', id);

      if (deleteError) {
        setError(deleteError.message);
      } else {
        setColumns((prev) =>
          prev.map((c) => ({
            ...c,
            links: c.links.filter((l) => l.id !== id),
          }))
        );
      }
    } catch (err) {
      setError('Failed to delete link');
    }
  }, []);

  return {
    columns,
    loading,
    error,
    fetchFooter,
    toggleColumn,
    updateColumnTitle,
    addColumn,
    deleteColumn,
    addLink,
    updateLink,
    deleteLink,
  };
}
