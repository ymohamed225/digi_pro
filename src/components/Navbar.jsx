'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, ArrowRight, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo DIGIPRO */}
          <a href="#accueil" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.08, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-blue-500/30 flex items-center justify-center bg-blue-600"
            >
              <img src="/favicon.jpg" alt="DigiPro Logo" className="w-full h-full object-cover" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900">
                DIGI<span className="text-blue-600">PRO</span>
              </span>
              <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase -mt-1">TECHNOLOGY</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['#accueil', '#a-propos', '#solutions', '#processus', '#insights', '#contact'].map((href, index) => {
              const labels = [t.nav.home, t.nav.about, t.nav.solutions, t.nav.vision, t.nav.insights, t.nav.contact];
              return (
                <motion.a 
                  key={href}
                  href={href} 
                  whileHover={{ y: -2 }}
                  className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {labels[index]}
                </motion.a>
              );
            })}
          </nav>

          {/* Actions & Lang Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage} 
              className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:border-blue-300 transition-all flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{lang}</span>
            </motion.button>

            <motion.a 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#rejoindre" 
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-300"
            >
              <span>{t.nav.cta}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.a>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button onClick={toggleLanguage} className="px-2.5 py-1 rounded-lg border border-slate-200 text-xs font-bold text-slate-600">
              <span>{lang}</span>
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle Menu" 
              className="p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-xl overflow-hidden"
          >
            <a href="#accueil" onClick={closeMenu} className="block py-2 text-base font-medium text-slate-800 hover:text-blue-600">{t.nav.home}</a>
            <a href="#a-propos" onClick={closeMenu} className="block py-2 text-base font-medium text-slate-800 hover:text-blue-600">{t.nav.about}</a>
            <a href="#solutions" onClick={closeMenu} className="block py-2 text-base font-medium text-slate-800 hover:text-blue-600">{t.nav.solutions}</a>
            <a href="#processus" onClick={closeMenu} className="block py-2 text-base font-medium text-slate-800 hover:text-blue-600">{t.nav.vision}</a>
            <a href="#insights" onClick={closeMenu} className="block py-2 text-base font-medium text-slate-800 hover:text-blue-600">{t.nav.insights}</a>
            <a href="#contact" onClick={closeMenu} className="block py-2 text-base font-medium text-slate-800 hover:text-blue-600">{t.nav.contact}</a>
            
            <div className="pt-2">
              <a href="#rejoindre" onClick={closeMenu} className="w-full flex items-center justify-center px-5 py-3 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md">
                <span>{t.nav.cta}</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
