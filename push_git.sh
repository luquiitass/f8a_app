rm -r www && echo "eliminado www de rais" &&
cd .. && echo "ubicando en directorio prod/" &&
ng build --prod && echo " build prod" &&
sleep 10s && echo "slep 10s" &&
cp -r www prod/www && echo "copiando /www en /prod/www" &&
sleep 10s && echo "slep 10s" &&
cd prod/ && echo "abriendo dir /prod/" &&
git add -A && echo "git add" &&
git commit -m "deploy app" &&  echo "commit " && 
git push origin futbol-alem && echo "push futbol-alem";