env=$1

if [ "$env" = "dev" ]; then 
  echo "dev environment detected..."
elif [ "$env" = "prod" ]; then
  echo "prod environment detected..."
else
  echo "environment not detected.. set it to dev or prod ..."
  exit 1
fi

echo "removing existing package.json..."
rm ./package.json
echo "generating package.json from package-$env.json..."
cp ./package-$env.json ./package.json

echo "done"