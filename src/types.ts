export type ProductType = 'direct' | 'affiliate';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  type: ProductType;
  badge?: 'NEW' | 'SALE' | "Editor's Pick";
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
