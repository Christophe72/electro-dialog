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

echo Étape 1: Vérification de l'état du dépôt...
if exist .git (
    echo Dépôt Git existant détecté. Synchronisation avec GitHub...
    git fetch origin
    if errorlevel 1 (
        echo ERREUR: Impossible de récupérer les changements distants
        pause
        exit /b 1
    )
    
    echo Tentative de merge automatique...
    git merge origin/main --no-edit
    if errorlevel 1 (
        echo CONFLIT DÉTECTÉ: Résolution automatique du README.md...
        git checkout --theirs README.md
        git add README.md
        git commit -m "Auto-résolution conflit README.md - Version locale conservée"
    )
) else (
    echo Étape 1: Initialisation du dépôt Git...
    git init
    git branch -M main
    git remote add origin https://github.com/Christophe72/electro-dialog.git
)

echo Étape 2: Ajout de tous les fichiers...
git add .

echo Étape 3: Commit des changements...
git commit -m "Mise à jour: Application RGIE complète avec QCM et diagnostic pannes"

echo Étape 4: Push vers GitHub...
git push origin main

if errorlevel 1 (
    echo.
    echo ATTENTION: Échec du push. Tentative de résolution automatique...
    
    echo Récupération des changements distants...
    git fetch origin
    
    echo Tentative de merge avec stratégie automatique...
    git merge origin/main --strategy-option=theirs --no-edit
    
    if errorlevel 1 (
        echo Résolution manuelle nécessaire. Commandes à exécuter:
        echo 1. git fetch origin
        echo 2. git merge origin/main
        echo 3. Résoudre les conflits manuellement
        echo 4. git add .
        echo 5. git commit -m "Résolution conflits"
        echo 6. git push origin main
        pause
        exit /b 1
    )
    
    echo Nouveau push après merge...
    git push origin main
    
    if errorlevel 1 (
        echo ERREUR: Push impossible même après merge
        pause
        exit /b 1
    )
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
