# Install

        npm i -D utility-scss

If you want to install a particular version:

        npm i -D utility-scss@<version>

The framework doesn't include `autoprefixer` because every application has it's own requirements in browser support.

You will have to execute manually `autoprefixer` in your production build.

You will also need to manually execute [PurgeCSS](https://purgecss.com/) in your production builds.

Once you have the framework installed, you will need to add the following lines in your SCSS entry file:

```scss
@use "~utility-scss/api";

// This is optional, you can use your own file that normalizes/resets the user agent styles
@import "~utility-scss/reset";

api.generate-utilities();
```

That's all, you can now use all the utility classes.

The utility classes have been generated from the [default configuration](../_default.scss).

## Create your own configuration file

Most of the time, you will want to configure your design system. To do so, create a SCSS file and start
writing your configuration options. An example:

```scss
// This line is to extend the default configuration (it's optional but I recommend it)
@forward "~utility-scss/default";

// Any option you write here will override the default configuration option

// You can nest maps. Nested SCSS maps keys will be concatenaded with "-". 

// Examples of some options that you can configure (there are a lot more!):

/**
 * The breakpoints that will be used for generating the responsive variants.
 */
$breakpoints: (
    "xs": 30em, // 480px
    "sm": 40em, // 640px
    "md": 48em, // 768px
    "lg": 64em, // 1024px
    "xl": 80em, // 1280px
);

/**
 * Colors for text. You may use it in the HTML, the following way:
 * 
 *      <p class="text-primary-500">Hello World!</p>
 *      <p class="text-white">Hello World!</p>
 *      <p class="md:text-gray-800">Hello World!</p>
 */
$text-colors: (
    "white": hsl(0, 0%, 100%),
    "black": hsl(0, 0%, 0%),
    "current": currentColor,
    "primary": (
        "100": hsl(4, 100%, 97%),
        "200": hsl(4, 100%, 87%),
        "300": hsl(4, 100%, 67%),
        "400": hsl(4, 100%, 57%),
        "500": hsl(4, 100%, 50%),
        "600": hsl(4, 100%, 47%),
        "700": hsl(4, 100%, 37%),
        "800": hsl(4, 100%, 17%),
    ),
    "gray": (
        "100": hsl(0, 0%, 90%),
        "200": hsl(0, 0%, 85%),
        "300": hsl(0, 0%, 75%),
        "400": hsl(0, 0%, 60%),
        "500": hsl(0, 0%, 40%),
        "600": hsl(0, 0%, 30%),
        "700": hsl(0, 0%, 20%),
        "800": hsl(0, 0%, 10%),
    ),
);

/**
 * Font sizes. You may use it in the HTML, the following way:
 *
 *      <p class="fs-3">Hello World!</p>
 *      <p class="fs-2">Hello World!</p>
 *      <p class="md:fs-4">Hello World!</p>
 */
$font-sizes: (
    "1": 0.75rem,
    "2": 0.875rem,
    "3": 1rem,
    "4": 1.125rem,
    "5": 1.25rem,
    "6": 1.5rem,
    "7": 1.875rem,
    "8": 2.25rem,
    "9": 3rem,
);
```

Once you have your design system defined:

```scss
@use "~utility-scss/api";

// Imagine we have created our design system in a file located in "./_config.scss"
@use "config";

// This is optional, you can use your own file that normalizes/resets the user agent styles
@import "~utility-scss/reset";

api.generate-utilities(config);
```
