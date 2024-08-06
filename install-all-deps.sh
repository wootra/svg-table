apps=$(ls ./apps)
packages=$(ls ./packages)

for app in $apps; do
  echo "installing ./apps/$app"
  (cd ./apps/$app;rm -rf node_modules;pnpm install --no-frozen-lockfile)
done

for package in $packages; do
    echo "installing ./packages/$package"
  (cd ./packages/$package;rm -rf node_modules;pnpm install --no-frozen-lockfile)
done