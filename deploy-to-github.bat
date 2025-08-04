@echo off
echo ========================================
echo Déploiement du projet electro-diag sur GitHub
echo ========================================
echo.

REM Vérifier si Git est installé
git --version >nul 2>&1
if errorlevel 1 (
    echo ERREUR: Git n'est pas installé ou n'est pas dans le PATH
    echo Veuillez installer Git depuis https://git-scm.com/
    pause
    exit /b 1
)

echo Étape 1: Création/mise à jour du README.md...
echo # electro-diag > README.md
echo. >> README.md
echo Application Next.js pour la gestion et consultation du RGIE (Règlement Général des Installations Électriques). >> README.md
echo. >> README.md
echo ## Description >> README.md
echo Cette application permet de consulter et naviguer dans les différentes sections du RGIE belge. >> README.md
echo. >> README.md
echo ## Technologies utilisées >> README.md
echo - Next.js >> README.md
echo - React >> README.md
echo - TypeScript >> README.md
echo - Tailwind CSS >> README.md
echo. >> README.md
echo ## Installation >> README.md
echo ``` >> README.md
echo npm install >> README.md
echo npm run dev >> README.md
echo ``` >> README.md

echo Étape 2: Initialisation du dépôt Git...
git init

echo Étape 3: Ajout de tous les fichiers...
git add .

echo Étape 4: Premier commit...
git commit -m "first commit - Application RGIE avec interface Next.js"

echo Étape 5: Création de la branche main...
git branch -M main

echo Étape 6: Ajout de l'origine distante...
git remote add origin https://github.com/Christophe72/electro-dialog.git

echo Étape 7: Push vers GitHub...
git push -u origin main

if errorlevel 1 (
    echo.
    echo ATTENTION: Une erreur s'est produite lors du push.
    echo Cela peut arriver si:
    echo - Le dépôt distant n'existe pas encore
    echo - Vous n'avez pas les permissions d'écriture
    echo - Vous devez vous authentifier
    echo.
    echo Veuillez:
    echo 1. Créer le dépôt 'electro-dialog' sur GitHub si ce n'est pas fait
    echo 2. Vérifier vos credentials GitHub
    echo 3. Réessayer le push manuellement avec: git push -u origin main
    pause
    exit /b 1
)

echo.
echo ========================================
echo Déploiement terminé avec succès !
echo ========================================
echo.
echo Votre projet est maintenant disponible sur:
echo https://github.com/Christophe72/electro-dialog
echo.
pause
