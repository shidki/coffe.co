import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: 'home' | 'about' | 'menu' | 'reservation') => void;
}

type PageId = 'home' | 'about' | 'menu' | 'reservation';

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: { name: string; id: PageId }[] = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Order', id: 'reservation' },
  ];

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full p-4 sm:p-6 flex justify-between items-center z-50 text-white">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl sm:text-2xl font-bold tracking-tighter cursor-pointer mix-blend-difference"
          onClick={() => handleNavClick('home')}
        >
          COFFEE.CO
        </motion.div>
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-sm font-medium tracking-widest uppercase">
          {menuItems.map((item, idx) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`cursor-pointer hover:text-amber-500 transition-colors relative ${
                currentPage === item.id ? 'text-amber-500' : 'mix-blend-difference'
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.name}
              {currentPage === item.id && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-500"
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden mix-blend-difference z-50 p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-full sm:w-80 h-screen bg-black/95 backdrop-blur-xl z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {menuItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`text-2xl sm:text-3xl font-bold tracking-wider uppercase cursor-pointer hover:text-amber-500 transition-colors ${
                    currentPage === item.id ? 'text-amber-500' : 'text-white'
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.name}
                  {currentPage === item.id && (
                    <motion.div
                      className="h-1 bg-amber-500 mt-2 rounded-full"
                      layoutId="mobile-indicator"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;