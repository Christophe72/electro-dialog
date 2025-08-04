@echo off
echo "# electro-dialog" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Christophe72/electro-dialog.git
git push -u origin main
pause
