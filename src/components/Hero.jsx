'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ChevronRight, Cpu, ShieldCheck, Zap, Building2, Hammer, Home, Smartphone, 
  CheckCircle2, TrendingUp, Users, Activity, BarChart3, Lock, Sparkles, Layers,
  DollarSign, Package, FileText, UserCheck, Bot, Scissors
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Hero = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('crm');

  const tabContents = {
    crm: {
      badge: "Module SaaS • DigiCRM",
      title: "👥 DigiCRM",
      subtitle: "Gestion des clients & prospects",
      metricVal: "100% IA",
      metricLabel: "Prédictions Ventes",
      colorGradient: "from-blue-600 to-indigo-600",
      stats: [
        { label: "Prospects Suivis", val: "5 400+" },
        { label: "Taux Conversion", val: "+35%" },
        { label: "Rappels IA", val: "Automatiques" }
      ],
      features: [
        "Historique 360° des interactions clients",
        "Pipeline commercial dynamique & relances",
        "Segmentation automatique basée sur la Data"
      ]
    },
    sales: {
      badge: "Module SaaS • DigiSales",
      title: "💰 DigiSales",
      subtitle: "Ventes, devis & facturation PME",
      metricVal: "1 Click",
      metricLabel: "Devis en Facture",
      colorGradient: "from-emerald-600 to-teal-600",
      stats: [
        { label: "Factures/Mois", val: "12 000+" },
        { label: "Paiements Money", val: "Intégrés" },
        { label: "Impayés", val: "-60%" }
      ],
      features: [
        "Création de devis & factures conformes",
        "Encaissement Mobile Money & virement direct",
        "Suivi des objectifs des commerciaux en temps réel"
      ]
    },
    stock: {
      badge: "Module SaaS • DigiStock",
      title: "📦 DigiStock",
      subtitle: "Gestion des stocks & inventaires",
      metricVal: "Temps Réel",
      metricLabel: "Alertes Seuil IA",
      colorGradient: "from-amber-500 to-orange-600",
      stats: [
        { label: "Articles Gérés", val: "85 000+" },
        { label: "Ruptures", val: "0% Evitables" },
        { label: "Entrées/Sorties", val: "QR Code" }
      ],
      features: [
        "Suivi multi-dépôts et inventaires en direct",
        "Commandes fournisseurs automatiques par l'IA",
        "Traçabilité totale des entrées et sorties"
      ]
    },
    bi: {
      badge: "Module SaaS • DigiBI",
      title: "📊 DigiBI",
      subtitle: "Tableaux de bord & Analytics",
      metricVal: "Live Data",
      metricLabel: "Indicateurs Clés (KPI)",
      colorGradient: "from-indigo-600 to-purple-600",
      stats: [
        { label: "Tableaux BI", val: "Personnalisés" },
        { label: "Marge Nette", val: "Visibilité 100%" },
        { label: "Rapports", val: "Quotidiens" }
      ],
      features: [
        "Vision 360° du chiffre d'affaires et de la trésorerie",
        "Analyses prédictives basées sur l'historique Data",
        "Export rapide PDF, Excel et alertes WhatsApp"
      ]
    },
    ai: {
      badge: "Module SaaS • DigiAI",
      title: "🤖 DigiAI",
      subtitle: "Intelligence Artificielle & Prédictions",
      metricVal: "Machine Learning",
      metricLabel: "Co-Pilote PME",
      colorGradient: "from-cyan-600 to-blue-700",
      stats: [
        { label: "Prédictions", val: "Précision 95%" },
        { label: "Recommandations", val: "En Direct" },
        { label: "Temps Gagné", val: "15h/semaine" }
      ],
      features: [
        "Prévision intelligente de la demande et des ventes",
        "Détection automatique des anomalies financières",
        "Assistant conversationnel pour le dirigeant"
      ]
    },
    btp: {
      badge: "Module SaaS • DigiBTP",
      title: "🏗️ DigiBTP",
      subtitle: "Gestion spécialisée entreprises BTP",
      metricVal: "Chantiers 360°",
      metricLabel: "Suivi Dépenses & Matériel",
      colorGradient: "from-orange-600 to-red-600",
      stats: [
        { label: "Chantiers", val: "450+" },
        { label: "Pointage", val: "Mobile Terrain" },
        { label: "Matériaux", val: "Suivi 100%" }
      ],
      features: [
        "Coûts de revient et marges par chantier en direct",
        "Pointage géolocalisé des équipes terrain",
        "Suivi du parc d'engins, carburant et consommables"
      ]
    },
    couture: {
      badge: "Module SaaS • DigiCouture",
      title: "✂️ DigiCouture",
      subtitle: "Gestion spécialisée ateliers de couture",
      metricVal: "Sur-Mesure",
      metricLabel: "Fiches Mesures & Livraisons",
      colorGradient: "from-pink-600 to-rose-600",
      stats: [
        { label: "Ateliers", val: "380+" },
        { label: "Modèles Gérés", val: "15 000+" },
        { label: "Retards", val: "0%" }
      ],
      features: [
        "Fiches de mesures digitales par client et modèle",
        "Suivi de l'avancement des commandes et confection",
        "Alertes SMS/WhatsApp automatiques pour les essayages et livraisons"
      ]
    }
  };

  const activeData = tabContents[activeTab];

  return (
    <section id="accueil" className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white">
      
      {/* Ambient Glow Backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content Left with Motion */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            
            {/* Badge Tag */}
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">{t.hero.badge}</span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {t.hero.titleStart}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-blue-500">{t.hero.titleGradient}</span>
              {t.hero.titleEnd}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.a 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#solutions" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all duration-300"
              >
                <span>{t.hero.btnPrimary}</span>
                <ChevronRight className="w-5 h-5 ml-1" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all duration-300"
              >
                <span>{t.hero.btnSecondary}</span>
              </motion.a>
            </div>

            {/* Trust Micro features */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-xs text-slate-500 font-medium">{t.hero.trust1Label}</p>
                <p className="text-sm font-bold text-slate-900">{t.hero.trust1Title}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">{t.hero.trust2Label}</p>
                <p className="text-sm font-bold text-slate-900">{t.hero.trust2Title}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">{t.hero.trust3Label}</p>
                <p className="text-sm font-bold text-slate-900">{t.hero.trust3Title}</p>
              </div>
            </div>

          </motion.div>

          {/* Hero Visual Right: Animated Interactive Dashboard */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Container Dashboard UI */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200/80 space-y-6">
                
                {/* Mockup Window Top Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="text-xs font-mono font-bold text-slate-600 ml-2">digipro-saas-os v3.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-200">
                      <Bot className="w-3 h-3 mr-1 animate-pulse" />
                      DATA & IA CONNECTÉES
                    </span>
                  </div>
                </div>

                {/* SaaS Modules Selector Tabs Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-1 p-1.5 bg-slate-100 rounded-2xl text-[11px] font-bold">
                  {[
                    { id: 'crm', label: 'CRM', icon: Users, color: 'text-blue-600' },
                    { id: 'sales', label: 'Sales', icon: DollarSign, color: 'text-emerald-600' },
                    { id: 'stock', label: 'Stock', icon: Package, color: 'text-amber-600' },
                    { id: 'bi', label: 'BI', icon: BarChart3, color: 'text-indigo-600' },
                    { id: 'ai', label: 'AI', icon: Bot, color: 'text-cyan-600' },
                    { id: 'btp', label: 'BTP', icon: Hammer, color: 'text-orange-600' },
                    { id: 'couture', label: 'Couture', icon: Scissors, color: 'text-pink-600' },
                  ].map((tab) => {
                    const IconComp = tab.icon;
                    return (
                      <motion.button 
                        key={tab.id}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-2 px-1 rounded-xl flex flex-col items-center justify-center transition-all ${
                          activeTab === tab.id ? `bg-white ${tab.color} shadow-sm font-extrabold` : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        <IconComp className="w-3.5 h-3.5 mb-0.5" />
                        <span>{tab.label}</span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Hero Dashboard Live Display Panel with AnimatePresence */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    
                    {/* Top Featured Module Header */}
                    <div className={`p-5 rounded-2xl bg-gradient-to-r ${activeData.colorGradient} text-white shadow-md space-y-3 relative overflow-hidden`}>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest bg-white/20 px-2.5 py-1 rounded-md backdrop-blur border border-white/20">
                          {activeData.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-bold bg-white/10 px-3 py-1 rounded-lg backdrop-blur">
                          <Activity className="w-3.5 h-3.5 animate-spin" />
                          <span>{activeData.metricVal}</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-extrabold text-white">{activeData.title}</h3>
                        <p className="text-xs text-white/80">{activeData.subtitle}</p>
                      </div>
                    </div>

                    {/* 3 Metric Stats Badges */}
                    <div className="grid grid-cols-3 gap-3">
                      {activeData.stats.map((st, i) => (
                        <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                          <p className="text-xs text-slate-500 font-medium">{st.label}</p>
                          <p className="text-base font-extrabold text-slate-900 mt-0.5">{st.val}</p>
                        </div>
                      ))}
                    </div>

                    {/* Dynamic Feature Checklist */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2.5">
                      <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Capacités Clés du Module :</p>
                      {activeData.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                  </motion.div>
                </AnimatePresence>

                {/* Dashboard Bottom Tech Bar */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>Cryptage Cloud AES-256</span>
                  </span>
                  <span className="font-bold text-slate-900">Abidjan, Côte d'Ivoire 🇨🇮</span>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
