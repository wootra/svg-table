#!/bin/bash

tagName=$(node ./tagging.js)
git tag $tagName
git push origin $tagName