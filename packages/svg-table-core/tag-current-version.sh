#!/bin/bash

tagName=$(node ./tagging.js)
git add .
git commit -m "Release $tagName"
git push
git tag $tagName
git push origin $tagName