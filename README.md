# ⚡ ELECTRO-DIAG

> Application web complète pour la consultation du RGIE (Règlement Général des Installations Électriques) belge et le diagnostic des pannes électriques.

![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=flat-square&logo=tailwind-css)

## 📋 Description

ELECTRO-DIAG est une application web moderne développée avec Next.js qui propose deux fonctionnalités principales :

1. **📚 Documentation RGIE interactive** - Navigation intuitive dans le Règlement Général des Installations Électriques belge
2. **🔧 Diagnostic des pannes électriques** - Guides détaillés avec modals interactives pour résoudre les problèmes électriques

## ✨ Fonctionnalités

### Documentation RGIE

- ✅ Interface de navigation par sections
- ✅ Affichage détaillé du contenu réglementaire
- ✅ Sections spécialisées (termes/définitions, nouveautés 2022-2025)
- ✅ Design responsive avec Tailwind CSS
- ✅ Recherche et filtrage des contenus

### Diagnostic des Pannes

- ✅ Liste interactive des pannes courantes
- ✅ Modals détaillées avec étapes de diagnostic
- ✅ Classification par niveau (débutant, intermédiaire, expert)
- ✅ Outils requis et avertissements de sécurité
- ✅ Interface utilisateur moderne et intuitive

## 🚀 Installation

### Prérequis

- Node.js 18+
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository**

   ```bash
   git clone https://github.com/Christophe72/electro-dialog.git
   cd electro-diag
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Lancer en mode développement**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Accéder à l'application**
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 📁 Structure du projet

```
electro-diag/
├── public/
│   └── rgie_data.json          # Données RGIE
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── pannes/
│   │   │   └── page.tsx        # Page diagnostic pannes
│   │   └── globals.css         # Styles globaux
│   ├── components/
│   │   ├── RGIEViewer.tsx      # Composant documentation RGIE
│   │   ├── SectionCard.tsx     # Carte de section RGIE
│   │   ├── SectionDetail.tsx   # Détails section RGIE
│   │   ├── ListePannes.tsx     # Liste des pannes
│   │   └── Modal.tsx           # Composant modal réutilisable
│   └── data/
│       ├── rgie_data.json      # Données RGIE (source)
│       └── pannes.json         # Données des pannes
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🛠️ Technologies utilisées

- **Frontend Framework**: Next.js 15.4.5
- **UI Library**: React 18+
- **Language**: TypeScript 5.0+
- **Styling**: Tailwind CSS 3.0+
- **Build Tool**: Next.js built-in compiler
- **Development**: ESLint, PostCSS

## 📖 Guide d'utilisation

### Navigation

- **Page d'accueil** : Vue d'ensemble avec navigation vers les deux sections principales
- **Documentation RGIE** : Cliquez sur les sections pour voir les détails
- **Diagnostic Pannes** : Cliquez sur une panne pour ouvrir la modal détaillée

### Fonctionnalités clés

- **Responsive design** : Fonctionne sur desktop, tablette et mobile
- **Navigation intuitive** : Menu de navigation en haut de page
- **Modals interactives** : Fermeture avec Escape, clic sur overlay ou bouton fermer
- **Contenu structuré** : Sections colorées et bien organisées

## 🔧 Scripts disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement

# Production
npm run build        # Build de production
npm run start        # Lance le serveur de production

# Qualité de code
npm run lint         # Vérification ESLint
```

## 🚀 Déploiement

### Build de production

```bash
npm run build
npm run start
```

### Déploiement sur Vercel (recommandé)

```bash
# Installation de Vercel CLI
npm i -g vercel

# Déploiement
vercel
```

### Déploiement sur d'autres plateformes

L'application peut être déployée sur :

- Netlify
- Render
- Railway
- Heroku
- DigitalOcean App Platform

## 📊 Données

### RGIE Data

Les données RGIE sont stockées dans `public/rgie_data.json` et comprennent :

- Introduction et objectifs
- Prescriptions générales
- Termes et définitions
- Mesures de protection
- Nouveautés réglementaires 2022-2025

### Pannes Data

Les données des pannes sont dans `src/data/pannes.json` avec :

- Symptômes détaillés
- Outils requis
- Étapes de diagnostic
- Niveaux de difficulté
- Avertissements de sécurité

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**Christophe72**

- GitHub: [@Christophe72](https://github.com/Christophe72)
- Repository: [electro-dialog](https://github.com/Christophe72/electro-dialog)

## 🙏 Remerciements

- **RGIE Belgique** pour la documentation réglementaire
- **Next.js Team** pour l'excellent framework
- **Tailwind CSS** pour le système de style
- **Communauté open source** pour les outils et libraries

## 📞 Support

Pour toute question ou problème :

- 🐛 **Issues**: [GitHub Issues](https://github.com/Christophe72/electro-dialog/issues)
- 📧 **Email**: [Créer un issue GitHub](https://github.com/Christophe72/electro-dialog/issues/new)

---

⚡ **ELECTRO-DIAG** - Votre compagnon pour la réglementation électrique belge et le diagnostic des pannes.
