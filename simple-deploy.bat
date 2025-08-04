@echo off
echo Deploiement de ELECTRO-DIAG sur GitHub...
git init
git add .
git commit -m "Initial commit: Application ELECTRO-DIAG complete avec RGIE et diagnostic pannes"
git branch -M main
git remote add origin https://github.com/Christophe72/electro-dialog.git
git push -u origin main
echo.
echo Deploiement termine ! Projet disponible sur:
echo https://github.com/Christophe72/electro-dialog
pause
