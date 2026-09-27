import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const InnovationProcess = () => {
  const { t } = useLanguage();

  return (
    <section id="processus" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-24">
          <span className="text-xs font-bold text-brand-blue tracking-widest uppercase bg-brand-iceBg px-4 py-1.5 rounded-full border border-brand-blue/10">
            {t.process.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
            {t.process.titleStart}
            <span className="gradient-blue-text">{t.process.titleGradient}</span>
            {t.process.titleEnd}
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            {t.process.subtitle}
          </p>
        </div>

        {/* Process Timeline 4 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Connecting line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-8 z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-brand-blue/30 transition-all text-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-blue text-white font-bold text-xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-brand-blue/20">
              🔍
            </div>
            <span className="text-xs font-extrabold text-brand-blue tracking-widest uppercase">Étape 01</span>
            <h3 className="text-lg font-bold text-brand-navy mt-1 mb-2">{t.process.step1}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.process.step1Desc}
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-brand-blue/30 transition-all text-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-blue text-white font-bold text-xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-brand-blue/20">
              💡
            </div>
            <span className="text-xs font-extrabold text-brand-blue tracking-widest uppercase">Étape 02</span>
            <h3 className="text-lg font-bold text-brand-navy mt-1 mb-2">{t.process.step2}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.process.step2Desc}
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-brand-blue/30 transition-all text-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-blue text-white font-bold text-xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-brand-blue/20">
              ⚙️
            </div>
            <span className="text-xs font-extrabold text-brand-blue tracking-widest uppercase">Étape 03</span>
            <h3 className="text-lg font-bold text-brand-navy mt-1 mb-2">{t.process.step3}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.process.step3Desc}
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative z-10 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-brand-blue/30 transition-all text-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-blue text-white font-bold text-xl flex items-center justify-center mx-auto mb-6 shadow-md shadow-brand-blue/20">
              🚀
            </div>
            <span className="text-xs font-extrabold text-brand-blue tracking-widest uppercase">Étape 04</span>
            <h3 className="text-lg font-bold text-brand-navy mt-1 mb-2">{t.process.step4}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.process.step4Desc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
