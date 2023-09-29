rm -r www || echo "LUCAS-------------------->borrando prod/www" &&
cd .. && echo "LUCAS-------------------->ubicando en directori raiz" &&
ng build --prod && echo "LUCAS--------------------> build prod" &&
sleep 10s && echo "LUCAS-------------------->slep 10s" &&
cp -r www prod/www && echo "LUCAS--------------------> copiando /www en /prod/www" &&
sleep 10s && echo "LUCAS--------------------> slep 10s" &&
cd prod/ && echo "LUCAS--------------------> abriendo dir /prod/" &&
git add -A && echo "LUCAS--------------------> git add" &&
git commit -m "LUCAS--------------------> deploy app" &&  echo "commit " && 
git push origin futbol-alem && echo "LUCAS--------------------> push futbol-alem";