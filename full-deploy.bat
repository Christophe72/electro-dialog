@echo off
echo ========================================
echo Déploiement complet du projet electro-diag
echo ========================================

REM Créer un fichier .gitignore approprié
echo node_modules/ > .gitignore
echo .next/ >> .gitignore
echo .env.local >> .gitignore
echo .env.development.local >> .gitignore
echo .env.test.local >> .gitignore
echo .env.production.local >> .gitignore
echo .vercel >> .gitignore
echo *.log >> .gitignore
echo .DS_Store >> .gitignore

REM Créer/mettre à jour le README
echo # electro-diag > README.md
echo. >> README.md
echo Application Next.js pour la consultation du RGIE (Règlement Général des Installations Électriques) belge. >> README.md
echo. >> README.md
echo ## Fonctionnalités >> README.md
echo - Interface de navigation intuitive >> README.md
echo - Affichage structuré des sections RGIE >> README.md
echo - Recherche et filtrage des contenus >> README.md
echo - Design responsive avec Tailwind CSS >> README.md
echo. >> README.md
echo ## Technologies >> README.md
echo - Next.js 14+ >> README.md
echo - React 18+ >> README.md
echo - TypeScript >> README.md
echo - Tailwind CSS >> README.md
echo. >> README.md
echo ## Installation et utilisation >> README.md
echo ``` >> README.md
echo # Installation des dépendances >> README.md
echo npm install >> README.md
echo. >> README.md
echo # Démarrage en mode développement >> README.md
echo npm run dev >> README.md
echo. >> README.md
echo # Build de production >> README.md
echo npm run build >> README.md
echo npm start >> README.md
echo ``` >> README.md
echo. >> README.md
echo L'application sera accessible sur http://localhost:3000 >> README.md

echo Initialisation Git...
git init

echo Ajout de tous les fichiers...
git add .

echo Premier commit...
git commit -m "Initial commit: Application RGIE Next.js avec interface complète"

echo Configuration de la branche principale...
git branch -M main

echo Ajout du dépôt distant...
git remote add origin https://github.com/Christophe72/electro-dialog.git

echo Push vers GitHub...
git push -u origin main

echo.
echo Déploiement terminé !
echo Projet disponible sur: https://github.com/Christophe72/electro-dialog
pause
