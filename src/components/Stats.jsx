import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Stats = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue/10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Stat 1 */}
          <div className="pt-6 md:pt-0">
            <p className="text-5xl lg:text-6xl font-extrabold text-brand-brightBlue mb-2">{t.stats.stat1Val}</p>
            <p className="text-lg font-semibold text-white">{t.stats.stat1Title}</p>
            <p className="text-xs text-slate-400 mt-1">{t.stats.stat1Desc}</p>
          </div>

          {/* Stat 2 */}
          <div className="pt-6 md:pt-0">
            <p className="text-5xl lg:text-6xl font-extrabold text-brand-brightBlue mb-2">{t.stats.stat2Val}</p>
            <p className="text-lg font-semibold text-white">{t.stats.stat2Title}</p>
            <p className="text-xs text-slate-400 mt-1">{t.stats.stat2Desc}</p>
          </div>

          {/* Stat 3 */}
          <div className="pt-6 md:pt-0">
            <p className="text-5xl lg:text-6xl font-extrabold text-brand-brightBlue mb-2">{t.stats.stat3Val}</p>
            <p className="text-lg font-semibold text-white">{t.stats.stat3Title}</p>
            <p className="text-xs text-slate-400 mt-1">{t.stats.stat3Desc}</p>
          </div>

        </div>
      </div>
    </section>
  );
};
