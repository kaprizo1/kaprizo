import React, { useState } from 'react';
import { useFooter, FooterColumn } from '@/hooks/useFooter';
import { Button } from '@/components/ui/Button';
import { Plus, Trash2, Save, ChevronDown, ChevronUp } from 'lucide-react';

export function FooterManager() {
  const {
    columns,
    loading,
    toggleColumn,
    updateColumnTitle,
    addColumn,
    deleteColumn,
    addLink,
    updateLink,
    deleteLink,
  } = useFooter();

  const [newColumnTitle, setNewColumnTitle] = useState('');
  const [expandedCols, setExpandedCols] = useState<Record<string, boolean>>({});
  const [editingTitle, setEditingTitle] = useState<Record<string, string>>({});
  const [newLink, setNewLink] = useState<Record<string, { label: string; href: string }>>({});
  const [editingLink, setEditingLink] = useState<Record<string, { label: string; href: string }>>({});

  const activeColumns = columns.filter((c) => c.active);

  const toggleExpand = (id: string) => {
    setExpandedCols((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddColumn = async () => {
    if (!newColumnTitle.trim()) return;
    await addColumn(newColumnTitle.trim());
    setNewColumnTitle('');
  };

  const handleSaveTitle = async (id: string) => {
    const title = editingTitle[id];
    if (title !== undefined) {
      await updateColumnTitle(id, title);
      setEditingTitle((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    }
  };

  const handleAddLink = async (columnId: string) => {
    const link = newLink[columnId];
    if (!link?.label.trim() || !link?.href.trim()) return;
    await addLink(columnId, link.label.trim(), link.href.trim());
    setNewLink((prev) => ({ ...prev, [columnId]: { label: '', href: '' } }));
  };

  const handleSaveLink = async (id: string) => {
    const link = editingLink[id];
    if (link) {
      await updateLink(id, link.label, link.href);
      setEditingLink((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm dark:bg-zinc-950 dark:border-zinc-800">
        <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-4 dark:text-zinc-50">Footer Manager</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm dark:bg-zinc-950 dark:border-zinc-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-zinc-900 tracking-tight dark:text-zinc-50">Footer Manager</h3>
        <span className="text-xs text-zinc-500 dark:text-zinc-400">
          {activeColumns.length} of {columns.length} columns active
        </span>
      </div>

      <div className="space-y-4 mb-8">
        {columns.map((col) => (
          <div
            key={col.id}
            className={`rounded-xl border transition-colors ${
              col.active
                ? 'border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/30'
                : 'border-zinc-100 bg-zinc-50/30 opacity-60 dark:border-zinc-800/50 dark:bg-zinc-900/20'
            }`}
          >
            {/* Column Header */}
            <div className="flex items-center gap-4 p-4">
              <button
                onClick={() => toggleExpand(col.id)}
                className="p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                {expandedCols[col.id] ? (
                  <ChevronUp className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                )}
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    defaultValue={col.title}
                    onChange={(e) =>
                      setEditingTitle((prev) => ({ ...prev, [col.id]: e.target.value }))
                    }
                    className="text-sm font-semibold bg-transparent border border-transparent rounded-md px-2 py-1 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white dark:text-zinc-50 dark:focus:bg-zinc-900"
                  />
                  {editingTitle[col.id] !== undefined && editingTitle[col.id] !== col.title && (
                    <button
                      onClick={() => handleSaveTitle(col.id)}
                      className="p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                      title="Save title"
                    >
                      <Save className="h-3.5 w-3.5 text-zinc-600 dark:text-zinc-300" />
                    </button>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">{col.active ? 'On' : 'Off'}</span>
                  <button
                    onClick={() => toggleColumn(col.id, !col.active)}
                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                      col.active ? 'bg-zinc-900 dark:bg-zinc-50' : 'bg-zinc-300 dark:bg-zinc-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                        col.active ? 'translate-x-4.5' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <button
                  onClick={() => deleteColumn(col.id)}
                  className="p-1.5 rounded-md hover:bg-red-50 text-zinc-400 hover:text-red-500 transition-colors dark:hover:bg-red-950/30"
                  title="Delete column"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Expanded Links */}
            {expandedCols[col.id] && (
              <div className="px-4 pb-4 border-t border-zinc-100 dark:border-zinc-800">
                <div className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <div key={link.id} className="flex items-center gap-2">
                      <input
                        type="text"
                        defaultValue={link.label}
                        onChange={(e) =>
                          setEditingLink((prev) => ({
                            ...prev,
                            [link.id]: {
                              ...prev[link.id],
                              label: e.target.value,
                              href: prev[link.id]?.href ?? link.href,
                            },
                          }))
                        }
                        className="flex-1 min-w-0 text-xs bg-white border border-zinc-200 rounded-md px-2 py-1.5 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-300"
                      />
                      <input
                        type="text"
                        defaultValue={link.href}
                        onChange={(e) =>
                          setEditingLink((prev) => ({
                            ...prev,
                            [link.id]: {
                              ...prev[link.id],
                              href: e.target.value,
                              label: prev[link.id]?.label ?? link.label,
                            },
                          }))
                        }
                        className="flex-1 min-w-0 text-xs bg-white border border-zinc-200 rounded-md px-2 py-1.5 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-300"
                      />
                      {editingLink[link.id] &&
                        (editingLink[link.id].label !== link.label ||
                          editingLink[link.id].href !== link.href) && (
                          <button
                            onClick={() => handleSaveLink(link.id)}
                            className="p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                            title="Save link"
                          >
                            <Save className="h-3.5 w-3.5 text-zinc-600 dark:text-zinc-300" />
                          </button>
                        )}
                      <button
                        onClick={() => deleteLink(link.id)}
                        className="p-1 rounded-md hover:bg-red-50 text-zinc-400 hover:text-red-500 transition-colors dark:hover:bg-red-950/30"
                        title="Delete link"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}

                  {/* Add new link */}
                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="text"
                      placeholder="Link label"
                      value={newLink[col.id]?.label || ''}
                      onChange={(e) =>
                        setNewLink((prev) => ({
                          ...prev,
                          [col.id]: {
                            ...prev[col.id],
                            label: e.target.value,
                            href: prev[col.id]?.href || '',
                          },
                        }))
                      }
                      className="flex-1 min-w-0 text-xs bg-white border border-zinc-200 rounded-md px-2 py-1.5 text-zinc-700 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-300"
                    />
                    <input
                      type="text"
                      placeholder="https://..."
                      value={newLink[col.id]?.href || ''}
                      onChange={(e) =>
                        setNewLink((prev) => ({
                          ...prev,
                          [col.id]: {
                            ...prev[col.id],
                            href: e.target.value,
                            label: prev[col.id]?.label || '',
                          },
                        }))
                      }
                      className="flex-1 min-w-0 text-xs bg-white border border-zinc-200 rounded-md px-2 py-1.5 text-zinc-700 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-300"
                    />
                    <Button
                      size="sm"
                      onClick={() => handleAddLink(col.id)}
                      className="gap-1 text-xs h-7 px-2"
                    >
                      <Plus className="h-3 w-3" />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add new column */}
      <div className="border-t border-zinc-200 pt-6 dark:border-zinc-800">
        <h4 className="text-sm font-bold text-zinc-900 mb-4 dark:text-zinc-50">Add new column</h4>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Column title"
            value={newColumnTitle}
            onChange={(e) => setNewColumnTitle(e.target.value)}
            className="flex-1 text-sm bg-white border border-zinc-200 rounded-lg px-3 py-2 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-50"
          />
          <Button onClick={handleAddColumn} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Column
          </Button>
        </div>
      </div>
    </div>
  );
}
