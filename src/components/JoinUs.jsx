import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send } from 'lucide-react';

export const JoinUs = ({ onNotification }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    problem: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNotification("Idée transmise avec succès !", "Merci de contribuer à l'écosystème d'innovation DigiPro.");
    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      problem: ''
    });
  };

  return (
    <section id="rejoindre" className="py-20 md:py-32 bg-brand-softBg relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold text-brand-blue tracking-widest uppercase bg-brand-iceBg px-4 py-1.5 rounded-full border border-brand-blue/10">
              {t.join.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
              {t.join.titleStart}
              <span className="gradient-blue-text">{t.join.titleGradient}</span>
              {t.join.titleEnd}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {t.join.text}
            </p>
          </div>

          {/* Idea Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">{t.join.firstName}</label>
                <input 
                  type="text" 
                  required 
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  placeholder="Jean" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">{t.join.lastName}</label>
                <input 
                  type="text" 
                  required 
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  placeholder="Kouassi" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">{t.join.company}</label>
                <input 
                  type="text" 
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder="Nom de l'entreprise (optionnel)" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">{t.join.email}</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="exemple@entreprise.com" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">{t.join.phone}</label>
              <input 
                type="tel" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+225 07 00 00 00 00" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">{t.join.problem}</label>
              <textarea 
                required 
                rows="4" 
                value={formData.problem}
                onChange={(e) => setFormData({...formData, problem: e.target.value})}
                placeholder="Décrivez le défi ou le besoin que vous rencontrez..." 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm transition-all resize-none"
              ></textarea>
            </div>

            <button type="submit" className="w-full py-4 rounded-xl text-base font-semibold text-white bg-brand-blue hover:bg-blue-700 shadow-md shadow-brand-blue/20 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
              <span>{t.join.submitBtn}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
