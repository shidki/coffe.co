import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import CoffeeScene from './component/CoffeeScene';
import HomePage from './component/HomePage';
import AboutPage from './component/AboutPage';
import MenuPage from './component/MenuPage';
import ReservationPage from './component/ReservationPage';
import Navbar from './component/Navbar';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'menu' | 'reservation'>('home');
  const [pageCount, setPageCount] = useState(5.5);

  
  useEffect(() => {
    const calculatePages = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isSmallMobile = width < 480;
      
      
      let multiplier = 1.0;
      
      if (isSmallMobile) {
        multiplier = 1.25;
      } else if (isMobile) {
        multiplier = 1.15;
      } else if (isTablet) {
        multiplier = 1.08;
      }
      
      
      const aspectRatio = width / height;
      if (aspectRatio < 0.6) {
        multiplier *= 1.1;
      }
      
      
      let basePage = 5;
      switch(currentPage) {
        case 'home':
          basePage = isSmallMobile ? 7 : isMobile ? 7 : isTablet ? 5 : 6;
          break;
        case 'about':
          basePage = isSmallMobile ? 13 : isMobile ? 13 : isTablet ? 5.7 : 8;
          break;
        case 'menu':
          basePage = isSmallMobile ? 6.8 : isMobile ? 6.8 : isTablet ? 3.8 : 4.5;
          break;
        case 'reservation':
          basePage = 1;
          break;
      }
      
      
      const calculated = basePage * multiplier;
      
      
      const finalPage = calculated * 1.05;
      
      setPageCount(finalPage);
    };

    calculatePages();
    
    
    let timeoutId: number;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(calculatePages, 150) as unknown as number;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [currentPage]);

  return (
    <div className="fixed inset-0 w-full h-full bg-[#101010] overflow-hidden">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 5], fov: 40 }}
        className="w-full h-full"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <ScrollControls pages={pageCount} damping={0.2}>
          <CoffeeScene />
          
          {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'menu' && <MenuPage />}
          {currentPage === 'reservation' && <ReservationPage />}
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;