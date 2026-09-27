'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Users, DollarSign, Package, BarChart3, Bot, FileText, UserCheck, Hammer, Scissors } from 'lucide-react';
import { motion } from 'framer-motion';

export const InnovationDomains = () => {
  const { t } = useLanguage();

  const modules = [
    {
      icon: Users,
      badge: "SaaS CRM",
      title: t.innovation.card1Title,
      desc: t.innovation.card1Desc,
      bgIcon: "bg-blue-50 text-blue-600",
      status: t.innovation.statusSoon
    },
    {
      icon: DollarSign,
      badge: "Ventes & Facturation",
      title: t.innovation.card2Title,
      desc: t.innovation.card2Desc,
      bgIcon: "bg-emerald-50 text-emerald-600",
      status: t.innovation.statusDev
    },
    {
      icon: Package,
      badge: "Gestion des Stocks",
      title: t.innovation.card3Title,
      desc: t.innovation.card3Desc,
      bgIcon: "bg-amber-50 text-amber-600",
      status: t.innovation.statusSoon
    },
    {
      icon: BarChart3,
      badge: "Business Intelligence",
      title: t.innovation.card4Title,
      desc: t.innovation.card4Desc,
      bgIcon: "bg-indigo-50 text-indigo-600",
      status: t.innovation.statusSoon
    },
    {
      icon: Bot,
      badge: "IA & Prédictions",
      title: t.innovation.card5Title,
      desc: t.innovation.card5Desc,
      bgIcon: "bg-cyan-50 text-cyan-600",
      status: t.innovation.statusResearch
    },
    {
      icon: FileText,
      badge: "Documents & Signature",
      title: t.innovation.card6Title,
      desc: t.innovation.card6Desc,
      bgIcon: "bg-purple-50 text-purple-600",
      status: t.innovation.statusSoon
    },
    {
      icon: UserCheck,
      badge: "Ressources Humaines",
      title: t.innovation.card7Title,
      desc: t.innovation.card7Desc,
      bgIcon: "bg-rose-50 text-rose-600",
      status: t.innovation.statusSoon
    },
    {
      icon: Hammer,
      badge: "Spécialisé BTP & Chantiers",
      title: t.innovation.card8Title,
      desc: t.innovation.card8Desc,
      bgIcon: "bg-orange-50 text-orange-600",
      status: t.innovation.statusDev
    },
    {
      icon: Scissors,
      badge: "Spécialisé Ateliers & Mode",
      title: t.innovation.card9Title,
      desc: t.innovation.card9Desc,
      bgIcon: "bg-pink-50 text-pink-600",
      status: t.innovation.statusDev
    }
  ];

  return (
    <section id="solutions" className="py-20 md:py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-20"
        >
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            {t.innovation.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.innovation.titleStart}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">{t.innovation.titleGradient}</span>
            {t.innovation.titleEnd}
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            {t.innovation.subtitle}
          </p>
        </motion.div>

        {/* 9 SaaS Modules Grid with Staggered Framer Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, idx) => {
            const IconComponent = mod.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${mod.bgIcon} flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                      {mod.status}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600">{mod.badge}</span>
                    <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">{mod.title}</h3>
                  </div>

                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                    {mod.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Plateforme SaaS</span>
                  <span className="text-blue-600 flex items-center gap-1 font-semibold">
                    {t.innovation.inExploration} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
