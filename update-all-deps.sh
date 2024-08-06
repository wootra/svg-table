apps=$(ls ./apps)
packages=$(ls ./packages)

for app in $apps; do
  echo "updating ./apps/$app"
  (cd ./apps/$app;pnpm update)
done

for package in $packages; do
    echo "updating ./packages/$package"
  (cd ./packages/$package;pnpm update)
done