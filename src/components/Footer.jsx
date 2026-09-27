import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Layers } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-navy text-slate-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Logo & Pitch */}
          <div className="md:col-span-5 space-y-4">
            <a href="#accueil" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white font-bold">
                <Layers className="w-6 h-6" />
              </div>
              <span className="font-display font-extrabold text-2xl text-white">DIGI<span className="text-brand-brightBlue">PRO</span></span>
            </a>

            <p className="text-sm font-semibold text-slate-300 italic">
              {t.footer.slogan}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Navigation</p>
            <ul className="space-y-2 text-xs">
              <li><a href="#accueil" className="hover:text-white transition-colors">{t.nav.home}</a></li>
              <li><a href="#a-propos" className="hover:text-white transition-colors">{t.nav.about}</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">{t.nav.solutions}</a></li>
              <li><a href="#processus" className="hover:text-white transition-colors">{t.nav.vision}</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">{t.nav.insights}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Products Overview */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Axes Produit</p>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2"><span>🏢</span> <span>DigiPro Business</span></li>
              <li className="flex items-center gap-2"><span>🏗️</span> <span>DigiPro Build</span></li>
              <li className="flex items-center gap-2"><span>🏠</span> <span>DigiPro Immo</span></li>
              <li className="flex items-center gap-2"><span>📱</span> <span>DigiPro Life</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <p>{t.footer.rights}</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">{t.footer.terms}</a>
            <a href="#" className="hover:text-white">{t.footer.privacy}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
