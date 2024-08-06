apps=$(ls ./apps)
packages=$(ls ./packages)

for app in $apps; do
  echo "installing ./apps/$app"
  (cd ./apps/$app;pnpm install)
done

for package in $packages; do
    echo "installing ./packages/$package"
  (cd ./packages/$package;pnpm install)
done