'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Mission } from '../components/Mission';
import { InnovationDomains } from '../components/InnovationDomains';
import { InnovationProcess } from '../components/InnovationProcess';
import { Stats } from '../components/Stats';
import { JoinUs } from '../components/JoinUs';
import { BlogPreview } from '../components/BlogPreview';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage() {
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

      {/* Animated Toast Notification with Framer Motion */}
      <AnimatePresence>
        {toast.show && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 pointer-events-none"
          >
            <div className="bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl border border-blue-500/30 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold">{toast.title}</p>
                <p className="text-xs text-slate-300">{toast.body}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
