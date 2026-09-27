import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { InnovationDomains } from './components/InnovationDomains';
import { InnovationProcess } from './components/InnovationProcess';
import { Stats } from './components/Stats';
import { JoinUs } from './components/JoinUs';
import { BlogPreview } from './components/BlogPreview';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Check } from 'lucide-react';

function AppContent() {
  const [toast, setToast] = useState({ show: false, title: '', body: '' });

  const showNotification = (title, body) => {
    setToast({ show: true, title, body });
    setTimeout(() => {
      setToast({ show: false, title: '', body: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Mission />
        <InnovationDomains />
        <InnovationProcess />
        <Stats />
        <JoinUs onNotification={showNotification} />
        <BlogPreview />
        <Contact onNotification={showNotification} />
      </main>
      <Footer />

      {/* Toast Notification Component */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 pointer-events-none ${
          toast.show ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        }`}
      >
        <div className="bg-brand-navy text-white px-6 py-4 rounded-2xl shadow-2xl border border-brand-blue/30 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-bold">{toast.title}</p>
            <p className="text-xs text-slate-300">{toast.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
