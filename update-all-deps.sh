apps=$(ls ./apps)
packages=$(ls ./packages)

for app in $apps; do
  (cd ./apps/$app && pnpm install)
done

for package in $packages; do
  (cd ./packages/$package && pnpm install)
done