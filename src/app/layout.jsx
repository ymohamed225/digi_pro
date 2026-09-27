import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

export const metadata = {
  title: "DIGIPRO — Digitalisation Intelligente des PME par la Data & l'IA",
  description: "Plateforme SaaS ivoirienne éditrice de solutions spécialisées (DigiCRM, DigiSales, DigiStock, DigiBI, DigiAI, DigiBTP, DigiCouture) pour l'accélération des PME.",
  keywords: ["SaaS PME", "Côte d'Ivoire", "Abidjan", "Data", "IA", "DigiCRM", "DigiSales", "DigiBTP", "DigiCouture"],
  openGraph: {
    title: "DIGIPRO — Digitalisation Intelligente des PME par la Data & l'IA",
    description: "La plateforme SaaS ivoirienne dédiée à l'accélération des PME africaines.",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="antialiased bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
