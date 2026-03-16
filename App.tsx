
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Dao from './pages/Dao';
import Investors from './pages/Investors';
import Contact from './pages/Contact';
import Docs from './pages/Docs';
import Legal from './pages/Legal';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    return window.location.hash.replace('#', '') || '/';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash.replace('#', '') || '/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderRoute = () => {
    if (currentRoute.startsWith('/products/')) {
      const slug = currentRoute.split('/')[2];
      return <ProductDetail slug={slug} />;
    }

    switch(currentRoute) {
      case '/': return <Home />;
      case '/products': return <Products />;
      case '/dao': return <Dao />;
      case '/about': return <About />;
      case '/investors': return <Investors />;
      case '/contact': return <Contact />;
      case '/docs': return <Docs />;
      case '/legal': return <Legal />;
      default: return <Home />;
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col selection:bg-cyan-500/30 bg-white dark:bg-[#050505] text-[#050505] dark:text-white transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            {renderRoute()}
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
