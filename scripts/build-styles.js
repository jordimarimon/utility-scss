#!/usr/bin/env node

const fs = require('fs');
const sass = require('sass');

if (process.argv.length !== 3) {
    throw new Error('Invalid number of arguments, expected one argument as the source path of the SCSS file.');
}

const sourceFile = process.argv[2];

if (!fs.existsSync(sourceFile)) {
    throw new Error('File provided doesn\'t exist.');
}

if (!sourceFile.endsWith('.scss')) {
    throw new Error('Expected a SCSS file.');
}

const outputFile = './dist/utilities.css';
const css = sass.renderSync({file: sourceFile, outputStyle: 'compressed'}).css.toString();

fs.writeFileSync(outputFile, css, 'utf8');
