TARGET=$1

if [ ! -d "$TARGET" ]; then echo "$TARGET does not exist"; exit 1; fi

echo "removing existing dist folder at $TARGET..."

if [ -d "$TARGET/dist" ]; then rm -rf $TARGET/dist; fi

echo "coping dist folder"

cp -r ./dist $TARGET

if [ -d "$TARGET/dist" ]; then echo "done"; else echo "failed"; fi
