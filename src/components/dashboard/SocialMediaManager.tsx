import React, { useState } from 'react';
import { useSocialMedia } from '@/hooks/useSocialMedia';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Switch } from '@/components/ui/Switch';
import { Plus, Trash2, Save, Facebook, Instagram, Youtube, Pin, Music } from 'lucide-react';

const iconOptions = [
  { label: 'Facebook', value: 'Facebook', icon: Facebook },
  { label: 'Instagram', value: 'Instagram', icon: Instagram },
  { label: 'YouTube', value: 'Youtube', icon: Youtube },
  { label: 'Pinterest', value: 'Pin', icon: Pin },
  { label: 'TikTok', value: 'Music', icon: Music },
];

export function SocialMediaManager() {
  const { socials, loading, toggleActive, updateUrl, addSocial, deleteSocial } = useSocialMedia();
  const [newName, setNewName] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newIcon, setNewIcon] = useState('Facebook');
  const [editingUrl, setEditingUrl] = useState<Record<string, string>>({});

  const handleAdd = async () => {
    if (!newName.trim() || !newUrl.trim()) return;
    await addSocial(newName.trim(), newUrl.trim(), newIcon);
    setNewName('');
    setNewUrl('');
    setNewIcon('Facebook');
  };

  const handleUrlChange = (id: string, value: string) => {
    setEditingUrl((prev) => ({ ...prev, [id]: value }));
  };

  const handleSaveUrl = async (id: string) => {
    const url = editingUrl[id];
    if (url !== undefined) {
      await updateUrl(id, url);
      setEditingUrl((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm dark:bg-zinc-950 dark:border-zinc-800">
        <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-4 dark:text-zinc-50">Social Media Manager</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm dark:bg-zinc-950 dark:border-zinc-800">
      <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-6 dark:text-zinc-50">Social Media Manager</h3>

      <div className="space-y-4 mb-8">
        {socials.map((social) => (
          <div
            key={social.id}
            className="flex items-center gap-4 p-4 rounded-xl border border-zinc-100 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/30"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              {(() => {
                const IconComp = iconOptions.find((o) => o.value === social.icon)?.icon || Facebook;
                return <IconComp className="h-4 w-4" />;
              })()}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{social.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <input
                  type="text"
                  defaultValue={social.url}
                  onChange={(e) => handleUrlChange(social.id, e.target.value)}
                  className="flex-1 min-w-0 text-xs bg-white border border-zinc-200 rounded-md px-2 py-1 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-300"
                />
                {editingUrl[social.id] !== undefined && editingUrl[social.id] !== social.url && (
                  <button
                    onClick={() => handleSaveUrl(social.id)}
                    className="p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    title="Save URL"
                  >
                    <Save className="h-3.5 w-3.5 text-zinc-600 dark:text-zinc-300" />
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-500 dark:text-zinc-400">{social.active ? 'On' : 'Off'}</span>
                <button
                  onClick={() => toggleActive(social.id, !social.active)}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                    social.active ? 'bg-zinc-900 dark:bg-zinc-50' : 'bg-zinc-300 dark:bg-zinc-700'
                  }`}
                >
                  <span
                    className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                      social.active ? 'translate-x-4.5' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <button
                onClick={() => deleteSocial(social.id)}
                className="p-1.5 rounded-md hover:bg-red-50 text-zinc-400 hover:text-red-500 transition-colors dark:hover:bg-red-950/30"
                title="Delete"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add new */}
      <div className="border-t border-zinc-200 pt-6 dark:border-zinc-800">
        <h4 className="text-sm font-bold text-zinc-900 mb-4 dark:text-zinc-50">Add new platform</h4>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <input
            type="text"
            placeholder="Platform name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="text-sm bg-white border border-zinc-200 rounded-lg px-3 py-2 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-50"
          />
          <input
            type="text"
            placeholder="https://..."
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            className="text-sm bg-white border border-zinc-200 rounded-lg px-3 py-2 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-50"
          />
          <select
            value={newIcon}
            onChange={(e) => setNewIcon(e.target.value)}
            className="text-sm bg-white border border-zinc-200 rounded-lg px-3 py-2 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-50"
          >
            {iconOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <Button onClick={handleAdd} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Platform
          </Button>
        </div>
      </div>
    </div>
  );
}
