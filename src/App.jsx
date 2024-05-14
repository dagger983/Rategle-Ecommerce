import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import Category from './components/category/Categories';
import CarouselFlipkart from './components/carousel/carousel';
import BestDealsMobiles from './components/bestdeals(mobiles)/bestdealsmobiles';
import Banners from './components/banners/banners';
import Footer from './components/footer/footer';
import RotateError from './components/rotateerror/rotateerror';

function App() {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check for landscape orientation and small height (assumed for mobile)
      const isLandscape = window.matchMedia('(orientation: landscape)').matches;
      const isMobileHeight = window.matchMedia('(max-height: 598px)').matches;

      setShowError(isLandscape && isMobileHeight);
    };

    window.addEventListener('resize', handleResize);
    // Initial check on mount
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {showError ? (
        <RotateError />
      ) : (
        <>
          <Navbar />
         
          <Category />
          <CarouselFlipkart />
          <BestDealsMobiles />
          <Banners />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
