import React from 'react';
import { Facebook, Instagram, Youtube, Pin, Music } from 'lucide-react';
import { useSocialMedia } from '@/hooks/useSocialMedia';

const iconMap: Record<string, React.ElementType> = {
  Facebook,
  Instagram,
  Youtube,
  Pin,
  Music,
};

export function Footer() {
  const { socials, loading } = useSocialMedia();
  const activeSocials = socials.filter((s) => s.active).sort((a, b) => a.sort_order - b.sort_order);

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-5 dark:text-zinc-50">
              Customer Service
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Shopping with us */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-5 dark:text-zinc-50">
              Shopping with us
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50">
                  Payment options
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50">
                  Delivery info
                </a>
              </li>
            </ul>
          </div>

          {/* Collaborate with us */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-5 dark:text-zinc-50">
              Collaborate with us
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50">
                  Affiliate program
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50">
                  Partner with us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50">
                  Seller Login
                </a>
              </li>
            </ul>
          </div>

          {/* Pay with */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-5 dark:text-zinc-50">
              Pay with
            </h4>
            <div className="flex items-center gap-3">
              {/* Visa */}
              <div className="h-8 w-12 rounded bg-zinc-100 flex items-center justify-center dark:bg-zinc-900">
                <svg className="h-4 w-auto" viewBox="0 0 48 16" fill="none">
                  <path d="M17.5 1.5h-3.2l-2.1 12.8h3.2l2.1-12.8zM28.5 1.5c-1.1 0-2 .3-2.5.9l-.2.3-1.6 8.5c.9-.4 2-.6 3.2-.6 1.2 0 2.2.3 2.8.8l-.2-1.1c-.3-1.4-1.4-3.7-3.2-6.4l-.3-.4z" fill="#1A1F71"/>
                  <path d="M32.5 1.5l-3.1 12.8h3.2l3.1-12.8h-3.2zM12.5 1.5L9 9.2 8.5 7.5C7.5 4.5 5 2.5 5 2.5l3.2 11.8h3.3l4.8-12.8h-3.8z" fill="#1A1F71"/>
                  <path d="M5 2.5C5 2.5 2 5 1 7.5c-.5 1.2-.3 2.5.5 3.5 1 1.2 2.8 1.8 4.5 1.5l1.5-8C6.5 4 5 2.5 5 2.5z" fill="#1A1F71"/>
                </svg>
              </div>
              {/* Mastercard */}
              <div className="h-8 w-12 rounded bg-zinc-100 flex items-center justify-center dark:bg-zinc-900">
                <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="none">
                  <circle cx="7" cy="12" r="7" fill="#EB001B"/>
                  <circle cx="17" cy="12" r="7" fill="#F79E1B"/>
                  <path d="M12 17.3c1.5-1.3 2.5-3.2 2.5-5.3s-1-4-2.5-5.3c-1.5 1.3-2.5 3.2-2.5 5.3s1 4 2.5 5.3z" fill="#FF5F00"/>
                </svg>
              </div>
              {/* PayPal */}
              <div className="h-8 w-12 rounded bg-zinc-100 flex items-center justify-center dark:bg-zinc-900">
                <svg className="h-4 w-auto" viewBox="0 0 48 16" fill="none">
                  <path d="M8.5 2.5H4.2L1.5 13.5h2.8l.8-3.5h1.8c2.5 0 4.2-1.5 4.8-3.8.3-1.2.1-2.2-.5-2.9-.7-.8-1.8-1.3-3-1.3zm1 3.8c-.2.8-.9 1.4-1.8 1.4H5.8l.7-3h1.8c.9 0 1.3.5 1.2 1.6z" fill="#003087"/>
                  <path d="M20.5 2.5h-4.3l-2.7 11h2.8l.8-3.5h1.8c2.5 0 4.2-1.5 4.8-3.8.3-1.2.1-2.2-.5-2.9-.7-.8-1.8-1.3-3-1.3zm1 3.8c-.2.8-.9 1.4-1.8 1.4h-1.9l.7-3h1.8c.9 0 1.3.5 1.2 1.6z" fill="#003087"/>
                  <path d="M32.5 5.5c-1.3 0-2.5.5-3.2 1.5l-.2-.3c.3-1.2 1.2-2.2 2.5-2.5l-.5-2.2c-2.5.5-4.2 2.8-4.8 5.5l-1.2 5.5h2.8l.8-3.8c.5-1.2 1.5-2 2.8-2 .5 0 1 .2 1.2.5l1.2-2.8c-.5-.3-1.2-.4-1.9-.4z" fill="#003087"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Stay connected */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-5 dark:text-zinc-50">
              Stay connected
            </h4>
            <div className="flex items-center gap-3">
              {loading ? (
                <span className="text-xs text-zinc-400">Loading...</span>
              ) : (
                activeSocials.map((social) => {
                  const Icon = iconMap[social.icon] || Facebook;
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-9 w-9 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-zinc-900 hover:text-white transition-all dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-50 dark:hover:text-zinc-900"
                      aria-label={social.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            &copy; 2025 Kaprizo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-50">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
