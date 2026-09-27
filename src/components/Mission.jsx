import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Database, Bot, Layers, TrendingUp } from 'lucide-react';

export const Mission = () => {
  const { t } = useLanguage();

  return (
    <section id="a-propos" className="py-12 md:py-16 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 md:mb-12">
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            {t.mission.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.mission.titleStart}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">{t.mission.titleGradient}</span>
            {t.mission.titleEnd}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-1">
            {t.mission.text}
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Card 1: DATA & INTELLIGENCE */}
          <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Database className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.mission.pillar1Title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {t.mission.pillar1Desc}
            </p>
          </div>

          {/* Card 2: MODULES SAAS CLÉ EN MAIN */}
          <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Layers className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.mission.pillar2Title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {t.mission.pillar2Desc}
            </p>
          </div>

          {/* Card 3: SIMPLICITÉ & IMPACT */}
          <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.mission.pillar3Title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {t.mission.pillar3Desc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
