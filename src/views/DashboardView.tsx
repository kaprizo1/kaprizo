import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { mockDashboardStats, mockProducts } from '@/data';
import { MousePointerClick, DollarSign, Wallet, TrendingUp, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { SocialMediaManager } from '@/components/dashboard/SocialMediaManager';
import { FooterManager } from '@/components/dashboard/FooterManager';

export function DashboardView() {
  const stats = mockDashboardStats;

  // Small helper for formatting currency
  const formatCurrency = (val: number) => `$${val.toLocaleString()}`;

  return (
    <div className="space-y-8">
      
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm dark:bg-zinc-950 dark:border-zinc-800">
          <div className="flex items-center justify-between mb-4">
             <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
               <MousePointerClick className="h-5 w-5" />
             </div>
             <Badge variant="new" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
               <TrendingUp className="w-3 h-3 mr-1" /> +12%
             </Badge>
          </div>
          <p className="text-zinc-500 font-medium mb-1 dark:text-zinc-400">Total Affiliate Clicks</p>
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">{stats.totalClicks.toLocaleString()}</h3>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm dark:bg-zinc-950 dark:border-zinc-800">
           <div className="flex items-center justify-between mb-4">
             <div className="h-10 w-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
               <DollarSign className="h-5 w-5" />
             </div>
             <Badge variant="new" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
               <TrendingUp className="w-3 h-3 mr-1" /> +8.4%
             </Badge>
          </div>
          <p className="text-zinc-500 font-medium mb-1 dark:text-zinc-400">Affiliate Est. Revenue</p>
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">{formatCurrency(stats.estRevenue)}</h3>
        </div>

        <div className="bg-zinc-900 text-white rounded-2xl p-6 border border-zinc-800 shadow-sm dark:bg-zinc-900 dark:border-zinc-700">
           <div className="flex items-center justify-between mb-4">
             <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300">
               <Wallet className="h-5 w-5" />
             </div>
             <Badge variant="outline" className="text-zinc-300 border-zinc-700">
               Direct Sales
             </Badge>
          </div>
          <p className="text-zinc-400 font-medium mb-1 dark:text-zinc-400">Direct Sales Revenue</p>
          <h3 className="text-3xl font-bold text-white dark:text-zinc-50">{formatCurrency(stats.directSales)}</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm dark:bg-zinc-950 dark:border-zinc-800">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-zinc-900 tracking-tight dark:text-zinc-50">Revenue & Clicks Trend</h3>
            <select className="bg-zinc-100 border-none text-sm font-medium rounded-lg text-zinc-600 px-3 py-1.5 dark:bg-zinc-900 dark:text-zinc-400">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={stats.revenueTrend}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#18181b" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#18181b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4e7" opacity={0.5} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#71717a', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#71717a', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#18181b" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm dark:bg-zinc-950 dark:border-zinc-800">
          <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-6 dark:text-zinc-50">Top Performers</h3>
          <div className="space-y-4">
            {mockProducts.slice(0, 4).map((product, i) => (
              <div key={product.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-50 transition-colors dark:hover:bg-zinc-900/50">
                <div className="h-12 w-12 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-100 dark:bg-zinc-900">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-zinc-900 truncate dark:text-zinc-50">{product.name}</h4>
                  <div className="flex items-center mt-0.5 text-xs">
                     {product.type === 'direct' ? (
                       <span className="text-blue-500 font-medium">Direct Sales</span>
                     ) : (
                       <span className="text-orange-500 font-medium">Affiliate Comm.</span>
                     )}
                  </div>
                </div>
                <div className="flex flex-col items-end">
                   <div className="flex items-center text-emerald-600 dark:text-emerald-400">
                     <ArrowUpRight className="h-3 w-3 mr-0.5" />
                     <span className="text-xs font-bold">{12 + i * 4}%</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Social Media Manager */}
      <SocialMediaManager />

      {/* Footer Manager */}
      <FooterManager />
    </div>
  );
}
