import { readFileSync, writeFileSync } from 'fs';
const buildTime = new Date().toLocaleString();
const html = readFileSync('index.html', 'utf8').replace(/__BUILD_TIME__/g, buildTime);
writeFileSync('index.html', html);
