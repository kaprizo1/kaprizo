/*
# Create affiliate_clicks table

1. New Tables
- `affiliate_clicks`
  - `id` (uuid, primary key)
  - `product_id` (text, not null) — references the product clicked
  - `product_name` (text) — name of the product for display
  - `affiliate_url` (text) — the external partner URL
  - `clicked_at` (timestamptz, default now()) — timestamp of the click
  - `user_agent` (text) — browser user agent
  - `referrer` (text) — page referrer

2. Security
- Enable RLS on `affiliate_clicks`.
- Allow anonymous and authenticated users to insert clicks (for tracking).
- Allow anonymous and authenticated users to read clicks (for dashboard stats).
*/

CREATE TABLE IF NOT EXISTS affiliate_clicks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id text NOT NULL,
  product_name text,
  affiliate_url text,
  clicked_at timestamptz DEFAULT now(),
  user_agent text,
  referrer text
);

ALTER TABLE affiliate_clicks ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_clicks" ON affiliate_clicks;
CREATE POLICY "anon_insert_clicks"
ON affiliate_clicks FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_clicks" ON affiliate_clicks;
CREATE POLICY "anon_select_clicks"
ON affiliate_clicks FOR SELECT
TO anon, authenticated USING (true);
