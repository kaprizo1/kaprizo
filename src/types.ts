export type ProductType = 'direct' | 'affiliate';

export type BadgeType = 'NEW' | 'SALE' | "Editor's Pick" | 'LIMITED EDITION';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  type: ProductType;
  badge?: BadgeType;
  rating: number;
  reviewCount: number;
  affiliateUrl?: string;
  description?: string;
  features?: string[];
  pros?: string[];
  cons?: string[];
}

export interface DashboardStats {
  totalClicks: number;
  estRevenue: number;
  directSales: number;
  revenueTrend: { name: string; revenue: number; clicks: number }[];
}

export type ViewState = 'storefront' | 'dashboard' | 'product_details';

export interface SocialMedia {
  id: string;
  name: string;
  url: string;
  icon: string;
  active: boolean;
  sort_order: number;
  created_at: string;
}
