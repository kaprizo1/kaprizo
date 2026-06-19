/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { StorefrontView } from './views/StorefrontView';
import { ProductView } from './views/ProductView';
import { DashboardView } from './views/DashboardView';
import { ViewState, Product } from './types';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('storefront');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product_details');
  };

  const handleBackToStorefront = () => {
    setSelectedProduct(null);
    setCurrentView('storefront');
  };

  const renderView = () => {
    switch (currentView) {
      case 'product_details':
        return selectedProduct ? (
          <ProductView product={selectedProduct} onBack={handleBackToStorefront} />
        ) : (
           <StorefrontView onSelectProduct={handleProductSelect} />
        );
      case 'dashboard':
        return <DashboardView />;
      case 'storefront':
      default:
        return <StorefrontView onSelectProduct={handleProductSelect} />;
    }
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="kaprizo-theme">
      <AppLayout currentView={currentView} onChangeView={setCurrentView}>
        {renderView()}
      </AppLayout>
    </ThemeProvider>
  );
}
