# CONTRIBUTING

Install dependencies:

        npm i

To generate the utility classes in development:

        npm run dev

It may be useful to use [@debug](https://sass-lang.com/documentation/at-rules/debug) to see what is happening.

It also may be useful to write first your code in the [SCSS Playground](https://www.sassmeister.com/).

In the [_api.scss](_api.scss) file you will need to uncomment the last line: `@include generate-utilities()`.

The output is generated in `dist/utilities.css`.
