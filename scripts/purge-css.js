const { PurgeCSS } = require('purgecss');
const chalk = require('chalk');
const glob = require('glob');
const fs = require('fs');

// See: https://purgecss.com/configuration.html#options
const DEFAULT_OPTIONS = {
  content: ['dist/index.html', 'dist/*.js'],
  css: ['dist/*.css'],
  keyframes: true,
  extractors: [
    {
      extractor: (content) => {
        // fix for escaped prefixes that are used for variants (sm:, lg:, etc...)
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
      },
      extensions: ['html', 'js'],
    },
  ],
};

function getFilesizeInKiloBytes(filename) {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats.size / 1024;

  return fileSizeInBytes.toFixed(2);
}

function logResult(data) {
  console.log(chalk.green.bold("PurgeCSS done! \n"));

  for (const d of data) {
    d.newSize = getFilesizeInKiloBytes('./dist/' + d.file) + "kb";
  }

  console.table(data);
}

module.exports = {
  purge: function main(options = {}) {

    if (!options.css) {
      throw new Error('No CSS pattern has been provided.');
    }

    for (const pattern of options.css) {

      glob(pattern, {nonull: true}, async (error, files) => {

        if (error || !files && files.length <= 0) {
          throw new Error("\tCannot find style files to purge. \n");
        }

        const data = [];

        for (const file of files) {
          // get original file size
          const originalSize = getFilesizeInKiloBytes(file) + "kb";

          data.push({ "file": file, "originalSize": originalSize, "newSize": "" });
        }

        console.log(chalk.yellow.bold("Running PurgeCSS...\n"));

        const purgeCSSResult = await new PurgeCSS().purge({
          ...DEFAULT_OPTIONS,
          ...options,
        });

        for (const d of purgeCSSResult) {
          fs.writeFileSync(d.file, d.css);
        }

        logResult(data);

      });

    }
  },
};
