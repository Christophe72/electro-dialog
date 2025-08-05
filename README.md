# ⚡ ELECTRO-DIAG

Application Next.js complète pour la gestion, consultation et formation sur le RGIE (Règlement Général des Installations Électriques) belge.

## 📋 Description

ELECTRO-DIAG est une application web moderne qui permet aux professionnels de l'électricité de :

- **Consulter** la documentation officielle du RGIE
- **Tester** leurs connaissances avec des QCM interactifs
- **Diagnostiquer** les pannes électriques courantes
- **Se former** sur les dernières évolutions réglementaires

## ✨ Fonctionnalités

### 📚 Documentation RGIE Interactive

- **7 sections complètes** couvrant tout le RGIE belge
- Interface de navigation intuitive par cartes
- Affichage détaillé du contenu avec retour facile
- Mise à jour avec les **nouveautés 2022-2025**

### 🧠 QCM de Vérification des Connaissances

- **4 questionnaires thématiques** (12 questions au total)
- **Prescriptions générales** - Règles de base du RGIE
- **Termes et définitions** - Vocabulaire technique
- **Mesures de protection** - Dispositifs de sécurité
- **Nouveautés 2022-2025** - Évolutions récentes
- Système de score avec feedback personnalisé
- Explications détaillées pour chaque réponse

### 🔧 Diagnostic des Pannes

- Guides détaillés pour résoudre les problèmes électriques
- Procédures de diagnostic étape par étape
- Solutions pratiques et conformes au RGIE

## 🚀 Technologies utilisées

- **Frontend** : Next.js 15, React 18, TypeScript
- **Styling** : Tailwind CSS
- **Développement** : Hot reload, ESLint, TypeScript strict
- **Déploiement** : Optimisé pour production

## 📦 Installation

```bash
# Cloner le projet
git clone https://github.com/Christophe72/electro-dialog.git
cd electro-dialog

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

L'application sera disponible sur `http://localhost:3000`

## 🗂️ Structure du projet

```
electro-diag/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Page d'accueil
│   │   ├── qcm/page.tsx      # Page QCM
│   │   └── pannes/page.tsx   # Page diagnostic pannes
│   ├── components/
│   │   ├── RGIEViewer.tsx    # Visualiseur documentation RGIE
│   │   ├── QCMViewer.tsx     # Interface QCM principale
│   │   ├── QCMQuiz.tsx       # Composant questionnaire
│   │   └── QCMCard.tsx       # Carte QCM
│   └── data/
│       ├── rgie_data.json    # Données RGIE complètes
│       ├── qcm_data.json     # Questions QCM
│       └── pannes.json       # Base de données pannes
├── public/
│   ├── rgie_data.json        # Données RGIE (accès web)
│   └── qcm_data.json         # Questions QCM (accès web)
└── ...
```

## 🎯 Utilisation

### Navigation principale

1. **📋 Documentation RGIE** - Consulter le règlement complet
2. **🧠 QCM Connaissances** - Tester vos connaissances
3. **🔧 Diagnostic Pannes** - Résoudre les problèmes électriques

### QCM - Conseils d'utilisation

- Lisez attentivement chaque question
- Prenez le temps de réfléchir aux implications
- Consultez les explications pour approfondir
- Refaites les QCM pour améliorer vos résultats

### Système de notation QCM

- **≥ 80%** : 🌟 Excellent - Maîtrise parfaite
- **≥ 60%** : 👍 Bien - Quelques révisions utiles
- **< 60%** : 📚 À réviser - Concepts de base à revoir

## 📊 Contenu RGIE couvert

- **Introduction RGIE** - Objectifs et structure
- **Prescriptions générales** - Règles de base BT
- **Termes et définitions** - Glossaire technique
- **Caractéristiques et protection** - Dimensionnement
- **Mise en œuvre et contrôles** - Installation et vérification
- **Prescriptions personnes** - Compétences et responsabilités
- **Nouveautés 2022-2025** - Dernières évolutions

## 🔧 Scripts disponibles

```bash
npm run dev          # Développement (port 3000)
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification du code
```

## 🌟 Contributions

Les contributions sont les bienvenues ! N'hésitez pas à :

- Signaler des bugs
- Proposer des améliorations
- Ajouter de nouvelles questions QCM
- Améliorer la documentation

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Support

Pour toute question ou support :

- Créer une issue sur GitHub
- Consulter la documentation RGIE officielle
- Vérifier les mises à jour réglementaires

---

**⚠️ Important** : Cette application est un outil d'aide à la formation. Pour toute installation électrique, référez-vous toujours à la version officielle du RGIE et consultez un professionnel qualifié.
