import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import OurProducts from './components/OurProducts';
import Services from './components/Services';
import Sustainability from './components/Sustainability';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import QuoteModal from './components/QuoteModal';
import LogisticsSection from './components/LogisticsSection';
import LogisticsPage from './components/LogisticsPage';
import WhatsAppToggle from './components/WhatsAppToggle';
import { PRODUCTS } from './data';
import { ProductDetail, ProductCategoryKey } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { applySeoForPage, PageKey } from './seo';
import { ASSET_IMAGES } from './assets';
import { useTranslation } from './LanguageContext';

const ASSETS = {
  coffee: ASSET_IMAGES.coffeeExport,
  pulses: ASSET_IMAGES.spicesPulsesExport,
  lithium: ASSET_IMAGES.lithiumOreExport,
  cargo: ASSET_IMAGES.cargoLogistics,
  investments: ASSET_IMAGES.hospitalityProperty
};

interface PageHeaderProps {
  title: string;
  subtitle: string;
  bgImage: string;
}

function PageHeader({ title, subtitle, bgImage }: PageHeaderProps) {
  return (
    <div className="relative h-[40vh] min-h-[280px] flex items-center justify-center bg-[#241710] overflow-hidden pt-28 lg:pt-[128px]">
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.32] sepia-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#241710] via-[#2E1E15]/55 to-[#241710]/45"></div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(#FAF7F008_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span className="text-[#A8B986] font-mono font-medium text-[9px] tracking-[0.4em] uppercase block mb-3 animate-[fade-in_1s_ease-out]">
          Kajo Group • illu Import Export • Est. 1985 GC
        </span>
        <h1 className="font-display font-light text-[#FAF7F0] tracking-widest text-2xl sm:text-3xl lg:text-4xl leading-tight uppercase animate-[fade-in_1.2s_ease-out]">
          {title}
        </h1>
        <div className="w-12 h-0.5 bg-[#6B8238] mx-auto my-5"></div>
        <p className="font-sans text-[#DFD3BF] font-bold text-[10px] tracking-widest uppercase max-w-2xl mx-auto leading-relaxed animate-[fade-in_1.4s_ease-out]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const { language } = useTranslation();
  const [currentPage, setCurrentPage] = useState<PageKey>('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState<ProductCategoryKey>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);

  const normalizeRoute = (route: string) => {
    const rawRoute = route.startsWith('#') ? route.slice(1) : route;
    const path = rawRoute.split('?')[0].split('#')[0];

    if (!path || path === '/') {
      return '/';
    }

    return `/${path.replace(/^\/+|\/+$/g, '')}`;
  };

  const getPageFromRoute = (route: string): PageKey => {
    const normalizedRoute = normalizeRoute(route);

    switch (normalizedRoute) {
      case '/story':
        return 'story';
      case '/products':
        return 'products';
      case '/contact':
        return 'contact';
      case '/logistics':
      case '/investments':
        return 'logistics';
      default:
        return 'home';
    }
  };

  const syncPageFromRoute = (route = window.location.pathname) => {
    setCurrentPage(getPageFromRoute(route));
    window.scrollTo({ top: 0 });
  };

  const navigateToRoute = (route: string, type: 'push' | 'replace' = 'push') => {
    const normalizedRoute = normalizeRoute(route);

    if (window.location.pathname !== normalizedRoute) {
      if (type === 'push') {
        window.history.pushState({}, '', normalizedRoute);
      } else {
        window.history.replaceState({}, '', normalizedRoute);
      }
    }

    syncPageFromRoute(normalizedRoute);
  };

  useEffect(() => {
    applySeoForPage(currentPage, language);
  }, [currentPage, language]);

  useEffect(() => {
    const handleInitialRoute = () => {
      const hashRoute = window.location.hash;
      if (hashRoute) {
        const normalizedRoute = normalizeRoute(hashRoute);
        if (normalizedRoute !== window.location.pathname) {
          window.history.replaceState({}, '', normalizedRoute);
        }
      }

      syncPageFromRoute(window.location.pathname);
    };

    const handlePopState = () => {
      syncPageFromRoute(window.location.pathname);
    };

    handleInitialRoute();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleExploreCategory = (categoryId: string) => {
    if (currentPage === 'products' || currentPage === 'home') {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigateToRoute('/products');
    }

    const product = PRODUCTS.find((p) => p.id === categoryId);
    if (product) {
      setTimeout(() => {
        setSelectedProduct(product);
      }, 450);
    }
  };

  const handleOpenQuoteModal = (category: ProductCategoryKey = 'all') => {
    setQuoteCategory(category);
    setIsQuoteOpen(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-[#4A5D23]/25 selection:text-[#2E1E15] bg-[#241710]">
      {/* 1. Universal sticky header */}
      <Header
        onRequestQuote={() => handleOpenQuoteModal('all')}
        currentPage={currentPage}
        onNavigate={navigateToRoute}
      />

      {/* Main sections container */}
      <main className="flex-grow bg-[#F6F1E7]">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* 1. Editorial Hero */}
              <Hero
                onExploreCategory={handleExploreCategory}
                onRequestQuote={() => handleOpenQuoteModal('all')}
              />

              {/* 2. Corporate Profile: 1985/2012 History, Culture, Mission & Vision, Founder Message, Management & 10 Core Values */}
              <AboutUs
                onRequestQuote={() => handleOpenQuoteModal('all')}
                onNavigate={navigateToRoute}
              />

              {/* 3. Export Excellence: Green Bean Coffee, Spices/Pulses/Oilseeds, Lithium Ore */}
              <OurProducts onSelectProduct={(product) => setSelectedProduct(product)} />

              {/* 4. Quality Policy in Our Coffee Production Line (6 Principles) & Corporate Facts */}
              <Services
                cargoImg={ASSETS.cargo}
                onRequestQuote={() => handleOpenQuoteModal('coffee')}
              />

              {/* 5. Diverse Investments: 10 Business Divisions */}
              <LogisticsSection
                evImg={ASSETS.investments}
                onExploreLogistics={() => {
                  navigateToRoute('/logistics');
                }}
              />

              {/* 6. Social Responsibility & Environmental Stewardship */}
              <Sustainability onRequestQuote={() => handleOpenQuoteModal('all')} />

              {/* 7. Headquarters Map, Trade Desk Contact & Why Kajo Group (8 Strategic Advantages) */}
              <ContactSection />
            </motion.div>
          )}

          {currentPage === 'story' && (
            <motion.div
              key="story"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-[#F6F1E7]"
            >
              <PageHeader
                title="About Kajo Group"
                subtitle="Founded in 1985 GC as Kajo Import Export • Evolving Globally with illu Import Export"
                bgImage={ASSET_IMAGES.ethiopianFarmLandscape}
              />
              <AboutUs
                onRequestQuote={() => handleOpenQuoteModal('all')}
                onNavigate={navigateToRoute}
                showFullProfile={true}
              />
              <Sustainability onRequestQuote={() => handleOpenQuoteModal('all')} />
            </motion.div>
          )}

          {currentPage === 'products' && (
            <motion.div
              key="products"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-[#F6F1E7]"
            >
              <PageHeader
                title="Export Excellence"
                subtitle="Ethiopian Origin Green Bean Coffee, Spices, Pulses & Oilseeds, and High-Grade Lithium Ore"
                bgImage={ASSETS.coffee}
              />
              <OurProducts
                onSelectProduct={(product) => setSelectedProduct(product)}
                showAllSections={true}
              />
              <Services
                cargoImg={ASSETS.cargo}
                onRequestQuote={() => handleOpenQuoteModal('coffee')}
              />
            </motion.div>
          )}

          {currentPage === 'logistics' && (
            <motion.div
              key="logistics"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-[#F6F1E7]"
            >
              <PageHeader
                title="Diverse Investments"
                subtitle="Ten Strategic Business Divisions Across Agro-Processing, Healthcare, Freight, Hospitality, Construction, Manufacturing & IT"
                bgImage={ASSETS.investments}
              />
              <LogisticsPage onRequestQuote={() => handleOpenQuoteModal('investments')} />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-[#F6F1E7]"
            >
              <PageHeader
                title="Connect With Kajo Group"
                subtitle="Arada Sub City, Habtegiorgis Street, Addis Ababa, Ethiopia • +251 11 70 60 50"
                bgImage={ASSETS.cargo}
              />
              <ContactSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigateToRoute} />

      {/* Product Information Detail Overlay */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onRequestQuote={(category) => handleOpenQuoteModal(category)}
        />
      )}

      {/* Corporate Trade Quote Request Overlay */}
      {isQuoteOpen && (
        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
          defaultCategory={quoteCategory}
        />
      )}

      {/* Floating Global Contact Channel */}
      <WhatsAppToggle />
    </div>
  );
}
