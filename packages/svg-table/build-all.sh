echo "removing existing folder..."
rm -rf dist
mkdir dist
echo "building react repo..."
(cd ../svg-table-react; pnpm install; pnpm run build; mv dist ../svg-table/dist/react)
echo "building solid repo..."
(cd ../svg-table-solid; pnpm install; pnpm run build; mv dist ../svg-table/dist/solid)
echo "building vanilla repo..."
(cd ../svg-table-vanilla; pnpm install; pnpm run build; mv dist ../svg-table/dist/vanilla)

