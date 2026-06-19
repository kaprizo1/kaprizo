/*
# Create footer_columns and footer_links tables for admin-managed footer

1. New Tables
- `footer_columns`
  - `id` (uuid, primary key)
  - `title` (text, not null) — column heading (e.g., "Customer Service")
  - `sort_order` (integer, default 0) — display order
  - `active` (boolean, default true) — whether column is shown
  - `created_at` (timestamptz, default now())

- `footer_links`
  - `id` (uuid, primary key)
  - `column_id` (uuid, not null) — references footer_columns
  - `label` (text, not null) — link text
  - `href` (text, not null) — link URL
  - `sort_order` (integer, default 0)
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on both tables.
- Allow anon + authenticated full access for admin flexibility.
*/

CREATE TABLE IF NOT EXISTS footer_columns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS footer_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  column_id uuid NOT NULL REFERENCES footer_columns(id) ON DELETE CASCADE,
  label text NOT NULL,
  href text NOT NULL DEFAULT '#',
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE footer_columns ENABLE ROW LEVEL SECURITY;
ALTER TABLE footer_links ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_footer_columns" ON footer_columns;
CREATE POLICY "anon_select_footer_columns"
ON footer_columns FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_footer_columns" ON footer_columns;
CREATE POLICY "anon_insert_footer_columns"
ON footer_columns FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_footer_columns" ON footer_columns;
CREATE POLICY "anon_update_footer_columns"
ON footer_columns FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_footer_columns" ON footer_columns;
CREATE POLICY "anon_delete_footer_columns"
ON footer_columns FOR DELETE
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_select_footer_links" ON footer_links;
CREATE POLICY "anon_select_footer_links"
ON footer_links FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_footer_links" ON footer_links;
CREATE POLICY "anon_insert_footer_links"
ON footer_links FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_footer_links" ON footer_links;
CREATE POLICY "anon_update_footer_links"
ON footer_links FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_footer_links" ON footer_links;
CREATE POLICY "anon_delete_footer_links"
ON footer_links FOR DELETE
TO anon, authenticated USING (true);

-- Seed default columns and links
INSERT INTO footer_columns (id, title, sort_order, active)
VALUES
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Customer Service', 1, true),
  ('b2c3d4e5-f6a7-8901-bcde-f23456789012', 'Shopping with us', 2, true),
  ('c3d4e5f6-a7b8-9012-cdef-345678901234', 'About Us', 3, true)
ON CONFLICT DO NOTHING;

INSERT INTO footer_links (column_id, label, href, sort_order)
VALUES
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Help Center', '#', 1),
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Returns & Refunds', '#', 2),
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Terms & Conditions', '#', 3),
  ('b2c3d4e5-f6a7-8901-bcde-f23456789012', 'Payment options', '#', 1),
  ('b2c3d4e5-f6a7-8901-bcde-f23456789012', 'Delivery info', '#', 2),
  ('c3d4e5f6-a7b8-9012-cdef-345678901234', 'Our Story', '#', 1),
  ('c3d4e5f6-a7b8-9012-cdef-345678901234', 'Blog', '#', 2),
  ('c3d4e5f6-a7b8-9012-cdef-345678901234', 'Press & Media', '#', 3)
ON CONFLICT DO NOTHING;
