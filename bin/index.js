#!/usr/bin/env node

const { purge } = require('../scripts/purge-css');
const { Command } = require('commander');
const figlet = require('figlet');
const chalk = require('chalk');
const boxen = require('boxen');
const clear = require('clear');

const program = new Command();
const option = process.argv[2] || '';
const isHelp = process.argv.length < 3 || option === '-h' || option === '--help';

// Clear the console
clear();

// See PurgeCSS options: https://purgecss.com/CLI.html#installation
program
    .version('1.0.0')
    .option('-con, --content <files>','glob of content files')
    .option('-css, --css <files>','glob of css files')
    .option('-o, --output <path>','file path directory to write purged css files to')
    .option('-font, --font-face','option to remove unused font-faces')
    .option('-keyframes, --keyframes','option to remove unused keyframes')
    .option('-rejected, --rejected','option to output rejected selectors')
    .option('-s, --safelist <list>','list of classes that should not be removed')
    .option('-h, --help','display help for command')
    .parse(process.argv);

if (isHelp) {
    // Print out the CLI name.
    // It's pretty bad what this outputs... but who cares, it's for fun!
    console.log(
        boxen(
            chalk
                .hex('#ff0000')
                .bold(figlet.textSync('Utility SCSS CLI', { horizontalLayout: 'full' })),
            {padding: 1, margin: {top: 1, bottom: 1}, borderStyle: 'double'},
        )
    );

    program.help();
} else {
    const options = program.opts();

    if (options.content) {
        options.content = options.content.split(',');
    }

    if (options.css) {
        options.css = options.css.split(',');
    }

    purge(options);
}
