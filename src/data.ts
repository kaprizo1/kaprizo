import { Product, DashboardStats } from './types';

export const mockProducts: Product[] = [
  {
    id: 'p1',
    name: 'Aether Noise-Canceling Headphones',
    subtitle: 'Studio-quality sound anywhere',
    price: 299,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    type: 'direct',
    badge: 'NEW',
    rating: 4.8,
    reviewCount: 124,
    description: 'Immerse yourself in pure audio with our flagship noise-canceling headphones. Featuring 40mm custom drivers and 30-hour battery life.',
    features: ['Active Noise Cancellation', '30-hour battery', 'Bluetooth 5.3', 'Custom tactile controls'],
    pros: ['Exceptional sound clarity', 'All-day comfort', 'Premium build quality'],
    cons: ['Carrying case is bulky', 'No water resistance rating']
  },
  {
    id: 'p2',
    name: 'Nomad Canvas Tote',
    subtitle: 'Daily essentials carrier',
    price: 85,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
    type: 'affiliate',
    affiliateUrl: 'https://example.com/partner-tote',
    rating: 4.6,
    reviewCount: 389,
    description: 'A durable, stylish tote bag perfect for everyday use. Made from sustainable heavy-weight organic canvas.',
    pros: ['Spacious interior', 'Eco-friendly materials', 'Durable straps'],
    cons: ['Lacks internal zipper pockets']
  },
  {
    id: 'p3',
    name: 'Suede Loafers',
    subtitle: 'Italian Leather',
    price: 120,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80',
    type: 'affiliate',
    badge: "Editor's Pick",
    rating: 4.9,
    reviewCount: 56,
    affiliateUrl: 'https://example.com/partner-shoes',
    description: 'Handcrafted in Italy using premium suede. These loafers offer unmatched comfort without compromising on style.',
    pros: ['Extremely comfortable out of box', 'Versatile styling', 'High-quality stitching'],
    cons: ['Requires suede protector spray', 'Sizing runs slightly large']
  },
  {
    id: 'p4',
    name: 'Mineral Face Sunscreen',
    subtitle: 'SPF 50 Broad Spectrum',
    price: 34,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80',
    type: 'direct',
    badge: 'SALE',
    rating: 4.5,
    reviewCount: 210,
    description: 'A lightweight, non-greasy mineral sunscreen that blends completely transparent on all skin tones.',
    pros: ['No white cast', 'Reef safe formulation', 'Works well under makeup'],
    cons: ['Slightly thicker consistency', 'Higher price point for size']
  },
  {
    id: 'p5',
    name: 'Ceramic Pour-Over Kettle',
    subtitle: 'Precision brewing',
    price: 65,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80',
    type: 'affiliate',
    rating: 4.7,
    reviewCount: 89,
    affiliateUrl: 'https://example.com/kettle'
  },
  {
    id: 'p6',
    name: 'Linen Blend Throw',
    subtitle: 'Textured comfort',
    price: 110,
    image: 'https://images.unsplash.com/photo-1584345290616-e41b9d4f0d61?w=800&q=80',
    type: 'direct',
    rating: 4.9,
    reviewCount: 42
  },
  {
    id: 'p7',
    name: 'Mechanical Keyboard v2',
    subtitle: 'Tactile typing experience',
    price: 145,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80',
    type: 'affiliate',
    badge: 'NEW',
    rating: 4.8,
    reviewCount: 312,
    affiliateUrl: 'https://example.com/kb'
  },
  {
    id: 'p8',
    name: 'Aroma Diffuser Stone',
    subtitle: 'Essential oil companion',
    price: 45,
    image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&q=80',
    type: 'direct',
    rating: 4.4,
    reviewCount: 78
  }
];

export const mockDashboardStats: DashboardStats = {
  totalClicks: 12458,
  estRevenue: 4350.75,
  directSales: 18900.00,
  revenueTrend: [
    { name: 'Mon', revenue: 1200, clicks: 400 },
    { name: 'Tue', revenue: 1900, clicks: 600 },
    { name: 'Wed', revenue: 1400, clicks: 450 },
    { name: 'Thu', revenue: 2100, clicks: 800 },
    { name: 'Fri', revenue: 2800, clicks: 1200 },
    { name: 'Sat', revenue: 3200, clicks: 1500 },
    { name: 'Sun', revenue: 2900, clicks: 1300 },
  ]
};
