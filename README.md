# 🚀 DigiPro — Plateforme SaaS de Digitalisation des PME

> **« Simplifier. Digitaliser. Progresser. »**

**DigiPro** est une entreprise technologique ivoirienne basée à Abidjan, Côte d'Ivoire, spécialisée dans la digitalisation intelligente des PME africaines grâce à la Data et à l'Intelligence Artificielle.

---

## 💡 À propos du Projet

Plutôt qu'une simple agence informatique, **DigiPro** se positionne comme un éditeur de logiciels SaaS (Software as a Service) et un système d'exploitation modulaire conçu pour résoudre des problèmes concrets d'entreprise et de quotidien.

### 🌟 Fonctionnalités clés :
- **Architecture React + Vite + Tailwind CSS** : Ultra-rapide, réactive, accessible et Mobile-First.
- **Multilingue Réactif (i18n)** : Prise en charge native du Français (FR) et de l'Anglais (EN) en un clic.
- **Dashboard SaaS Interactif 100% Code** : Aperçu temps réel des modules logiciels directement en page d'accueil sans images lourdes.
- **Formulaires Dynamiques & Toasts** : Demandes de démo, co-construction d'idées et prise de rendez-vous avec notifications fluides.

---

## 🧰 Écosystème des Modules SaaS DigiPro

La plateforme s'articule autour de 9 modules spécialisés :

| Module | Icône | Fonction principale |
| :--- | :---: | :--- |
| **DigiCRM** | 👥 | Gestion des clients, prospects & historique des interactions |
| **DigiSales** | 💰 | Pilotage des ventes, devis, facturation conformes & suivi commercial |
| **DigiStock** | 📦 | Gestion des stocks, inventaires multi-dépôts & réapprovisionnement IA |
| **DigiBI** | 📊 | Tableaux de bord analytics & indicateurs de performance (KPI) en direct |
| **DigiAI** | 🤖 | Co-pilote d'Intelligence Artificielle & prédictions financières / ventes |
| **DigiDocs** | 📄 | Gestion électronique documentaire (GED) & signature numérique |
| **DigiRH** | 👨‍💼 | Gestion des ressources humaines, paie, congés & compétences |
| **DigiBTP** | 🏗️ | Gestion spécialisée des chantiers, matériels & coûts de revient BTP |
| **DigiCouture** | ✂️ | Gestion spécialisée des ateliers de couture, mesures clients & livraisons |

---

## 🛠️ Stack Technique

- **Frontend** : React 19, Vite 6
- **Styles** : Tailwind CSS v3, PostCSS, Autoprefixer
- **Icônes & Animations** : Lucide React, Framer Motion, CSS Animations
- **Internationalisation** : Context API React personnalisé (`LanguageContext`)

---

## 📦 Installation et Lancement

### Prérequis
- Node.js (version 18 ou supérieure)
- npm (ou yarn / pnpm)

### Étape 1 : Cloner le projet & dépendances
```bash
git clone <URL_DU_DEPOT>
cd DigiPro
npm install
```

### Étape 2 : Démarrer le serveur de développement
```bash
npm run dev
```
Le site sera accessible à l'adresse : `http://localhost:5173/`

### Étape 3 : Compiler pour la production
```bash
npm run build
```
Les fichiers statiques optimisés seront générés dans le dossier `dist/`.

---

## 📂 Structure des Dossiers

```text
DigiPro/
├── dist/                   # Build de production
├── public/                 # Assets statiques et images
├── src/
│   ├── components/         # Composants React réutilisables
│   │   ├── Navbar.jsx      # Navigation fixe avec switcher FR/EN & menu mobile
│   │   ├── Hero.jsx        # En-tête avec Dashboard SaaS interactif en code
│   │   ├── Mission.jsx     # Positionnement Data & IA (3 piliers)
│   │   ├── InnovationDomains.jsx # Grille des 9 modules SaaS DigiPro
│   │   ├── InnovationProcess.jsx # Méthodologie en 4 étapes
│   │   ├── Stats.jsx       # Métriques d'impact
│   │   ├── JoinUs.jsx      # Formulaire de co-construction
│   │   ├── BlogPreview.jsx # Articles Insights avec filtres par catégorie
│   │   ├── Contact.jsx     # Coordonnées Abidjan & formulaire démo
│   │   └── Footer.jsx      # Pied de page avec liens & slogan
│   ├── context/
│   │   └── LanguageContext.jsx # Gestion globale de la langue (FR/EN)
│   ├── i18n/
│   │   └── translations.js     # Textes multilingues complets
│   ├── App.jsx             # Composant racine
│   ├── main.jsx            # Point d'entrée React Vite
│   └── index.css           # Directives Tailwind CSS & utilitaires
├── package.json            # Scripts & dépendances
├── vite.config.js          # Configuration Vite
└── tailwind.config.js      # Thème & couleurs Brand DigiPro
```

---

## 📍 Contact & Localisation

- **Entreprise** : DIGIPRO TECHNOLOGY
- **Siège Social** : Abidjan, Côte d'Ivoire 🇨🇮
- **Email** : [contact@digipro.ci](mailto:contact@digipro.ci)
- **WhatsApp** : +225 07 00 00 00 00

---

© 2026 DIGIPRO. Tous droits réservés.
