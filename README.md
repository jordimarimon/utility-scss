# utility-scss

**IT'S A WORK IN PROGRESS**

This SCSS framework is a proof of concept that I did to see how I could generate a lot of utility classes with SCSS only,
without relying on JS. It's inspired by [TailwindCSS](https://tailwindcss.com/) and [Bootstrap](https://getbootstrap.com/).

**THE USE OF THIS FRAMEWORK IS DISCOURAGED**, it's just a proof of concept. It's better for you to use 
any other CSS framework out there or no framework at all!

This CSS framework provides the following functionalities:

* A SCSS mixin that is able to generate all the utility classes based on a configuration file written in SCSS.
* A bunch of mixins/functions that may be useful.
* A file to reset the user agent styles (it's basically a copy of [Normalize.css](https://necolas.github.io/normalize.css/)).
* A CLI or NodeJS API that wraps around [PurgeCSS](https://purgecss.com/) so you can execute it for production.

## Motivation

If you want to know why the hell I wrote another CSS framework, look it up [here](./doc/MOTIVATION.md),

## Install

To see how to install and configure it, look it up [here](./doc/INSTALL.md).

## Options

To see the available options, look it up [here](./doc/OPTIONS.md).

## Utility classes

To see all the utility classes generated (based on the [default configuration](./_default.scss)), 
look it up [here](./doc/UTILITY_CLASSES.md).

## Mixins/Funcions

To see the available mixins/functions, look it up [here](./doc/MIXINS.md).

## Purge CSS

Here I will describe how to use the CLI/NodeJS API for executing [PurgeCSS](https://purgecss.com/).

**NOTE: The only reason this wrapper around [PurgeCSS](https://purgecss.com/) exists, it's because
I need to define a custom [extractor](https://purgecss.com/configuration.html) for the responsive variants.**

The CLI name is `utility-scss`. Write in the terminal `utility-scss` to see the available options.

The CLI options are exactly the same ones as the ones of [PurgeCSS](https://purgecss.com/CLI.html).

You can add the following "script" in the `package.json` (execute it after your "build" has finished):

```json
"scripts": {
    // Imagine you have your production build in a folder named "dist"
    "purge": "utility-scss --css 'dist/*.css' --content 'dist/index.html, dist/*.js'"
}
```

If you prefer to use the NodeJS API:

```javascript
const { purge } = require('utility-scss');

purge(<PURGE_CSS_OPTIONS>);
```

The options are the same as the ones in [PurgeCSS](https://purgecss.com/configuration.html#options).

**NOTE: Don't override the `extractors` option.**

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md)
