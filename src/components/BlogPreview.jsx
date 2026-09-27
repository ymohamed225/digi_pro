import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, TrendingUp, Cpu, Globe } from 'lucide-react';

export const BlogPreview = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('ALL');

  const articles = [
    {
      id: 1,
      category: 'SaaS',
      date: '15 Août 2026',
      readTime: '5 min',
      icon: TrendingUp,
      title: 'Comment les PME africaines peuvent accélérer leur croissance grâce au SaaS',
      desc: 'Découvrez pourquoi adopter des outils logiciels sur-mesure et accessibles est devenu le facteur clé de compétitivité à Abidjan.',
      image: '/blog_saas.jpg'
    },
    {
      id: 2,
      category: 'IA',
      date: '10 Août 2026',
      readTime: '4 min',
      icon: Cpu,
      title: 'L\'IA au quotidien : Simplifier la gestion d\'entreprise sans complexité',
      desc: 'L\'intelligence artificielle ne doit plus être réservée aux géants de la tech. Voici comment DigiPro l\'intègre au cœur de ses produits.',
      image: '/blog_ai.jpg'
    },
    {
      id: 3,
      category: 'TRANSFORMATION',
      date: '02 Août 2026',
      readTime: '6 min',
      icon: Globe,
      title: 'De l\'écoute du besoin au produit à fort impact : La philosophie DigiPro',
      desc: 'Retour sur notre méthode d\'innovation axée sur la simplicité d\'usage et la résolution des vrais problèmes de société.',
      image: '/blog_transfo.jpg'
    }
  ];

  const filteredArticles = filter === 'ALL' 
    ? articles 
    : articles.filter(art => art.category === filter);

  return (
    <section id="insights" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-blue-600 tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              {t.blog.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {t.blog.titleStart}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">{t.blog.titleGradient}</span>
              {t.blog.titleEnd}
            </h2>
            <p className="text-slate-600 text-base max-w-xl">
              {t.blog.subtitle}
            </p>
          </div>

          {/* Interactive Filters */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl self-start md:self-auto">
            <button 
              onClick={() => setFilter('ALL')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${filter === 'ALL' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Tous
            </button>
            <button 
              onClick={() => setFilter('SaaS')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${filter === 'SaaS' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              SaaS PME
            </button>
            <button 
              onClick={() => setFilter('IA')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${filter === 'IA' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              IA
            </button>
          </div>
        </div>

        {/* Dynamic Articles Grid with High-Quality Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((article) => {
            return (
              <article key={article.id} className="group rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-900 backdrop-blur shadow-sm">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    <p className="text-xs text-slate-400 font-medium">{article.date} • {article.readTime}</p>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {article.desc}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                  <span className="text-xs font-semibold text-blue-600 group-hover:underline inline-flex items-center gap-1">
                    {t.blog.readMore} <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
