#!/bin/bash
VERSION=$1
if [ -z $VERSION ]; then
  echo "version is empty"
  exit 1
fi

echo "version is $VERSION"

pnpm run lint
pnpm build
echo $VERSION
npm version $VERSION

sh ./tag-current-version.sh
npm publish --access public
