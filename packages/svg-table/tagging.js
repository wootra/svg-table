#!/usr/bin/env node

const { readFileSync } = require('fs');
const packageJson = readFileSync('./package.json', 'utf-8');
const data = JSON.parse(packageJson);
const tagName = `${data.name}@${data.version}`;
console.log(tagName);
