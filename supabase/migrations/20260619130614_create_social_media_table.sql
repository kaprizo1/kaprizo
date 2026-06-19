/*
# Create social_media table for admin-managed social links

1. New Tables
- `social_media`
  - `id` (uuid, primary key)
  - `name` (text, not null) — display name of the platform (e.g., "Facebook")
  - `url` (text, not null) — the social media profile URL
  - `icon` (text) — lucide icon name (e.g., "Facebook", "Instagram")
  - `active` (boolean, default true) — whether the icon is shown on the site
  - `sort_order` (integer, default 0) — ordering on display
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `social_media`.
- Allow anonymous and authenticated users to read active social links.
- Allow anonymous and authenticated users to insert/update (for admin flexibility).
*/

CREATE TABLE IF NOT EXISTS social_media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  url text NOT NULL,
  icon text,
  active boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE social_media ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_social" ON social_media;
CREATE POLICY "anon_select_social"
ON social_media FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_social" ON social_media;
CREATE POLICY "anon_insert_social"
ON social_media FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_social" ON social_media;
CREATE POLICY "anon_update_social"
ON social_media FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_social" ON social_media;
CREATE POLICY "anon_delete_social"
ON social_media FOR DELETE
TO anon, authenticated USING (true);

-- Seed default social media entries
INSERT INTO social_media (name, url, icon, sort_order)
VALUES
  ('Facebook', 'https://facebook.com/kaprizo', 'Facebook', 1),
  ('Instagram', 'https://instagram.com/kaprizo', 'Instagram', 2),
  ('TikTok', 'https://tiktok.com/@kaprizo', 'Music', 3),
  ('YouTube', 'https://youtube.com/@kaprizo', 'Youtube', 4),
  ('Pinterest', 'https://pinterest.com/kaprizo', 'Pin', 5)
ON CONFLICT DO NOTHING;
