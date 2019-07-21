cd %1
REM git archive master --format=zip --output=clone.zip
git add .
git commit -a -m "Mensaje: "
REM git remote add origin https://github.com/corbaz/ApiRest
git push origin master --force


