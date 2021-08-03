# Configuration options

**An options is a SCSS map.**

The key is the suffix to use in the utility class name and the value is the value that will be assigned 
to the css property that the utility styles.

You can nest SCSS maps. The keys will be concatenated using a "-".

**NOTE: The keys must be strings.**

The name of a utility class is generated based on the combination of a pre-defined prefix and your configuration suffix.

Some utility classes don't have a pre-defined prefix, and their name is just the configuration suffix.

One example of utility classes without prefix are the ones generated from the `$displays` option:

```scss
/**
 * Use case example:
 * 
 *      <div class="flex"></div>
 *      <div class="grid"></div>
 */
$displays: (
    "block": block,
    "inline-block": inline-block,
    "inline": inline,
    "flex": flex,
    "inline-flex": inline-flex,
    "table": table,
    "inline-table": inline-table,
    "grid": grid,
    "inline-grid": inline-grid,
    "hidden": none,
);
```

Option names will appear prefixed with `$` because they're SCSS variables.

I will use "*" to denote where the suffix goes (it depends on the configuration SCSS map keys).

A more in detail documentation about the utility classes available is [here](UTILITY_CLASSES.md).

#### Layout

| Option name              | Utility classes that it generates                                                   |
|--------------------------|-------------------------------------------------------------------------------------|
| `$displays`              | "*"                                                                                 |
| `$floats`                | "float-*"                                                                           |
| `$clears`                | "clear-*"                                                                           |
| `$isolations`            | "isolate-*"                                                                         |
| `$object-fits`           | "object-*"                                                                          |
| `$object-positions`      | "object-*"                                                                          |
| `$overflows`             | "overflow-\*", "overflow-x-\*", "overflow-y-*"                                      |
| `$overscroll-behaviours` | "overscroll-\*", "overscroll-x-\*", "overscroll-y-*"                                |
| `$positions`             | "*"                                                                                 |
| `$offsets`               | "top-\*", "right-\*", "bottom-\*", "left-\*", "inset-\*", "inset-x-\*", "inset-y-*" |
| `$visibilities`          | "*"                                                                                 |
| `$z-indexes`             | "z-*"                                                                               |

#### Flexbox and Grid

| Option name              | Utility classes that it generates                                       |
|--------------------------|-------------------------------------------------------------------------|
| `$flex-directions`       | "flex-*"                                                                |
| `$flex-wraps`            | "flex-*"                                                                |
| `$flex`                  | "flex-*"                                                                |
| `$flex-grows`            | "flex-grow-*"                                                           |
| `$flex-shrinks`          | "flex-shrink-*"                                                         |
| `$flex-orders`           | "order-*"                                                               |
| `$grid-templates`        | "grid-cols-\*", "grid-rows-*"                                           |
| `$grid-spans`            | "grid-col-span-\*", "grid-row-span-*"                                   |
| `$grid-extremes`         | "col-start-\*", "col-end-\*", "row-start-\*", "row-end-*"               |
| `$grid-auto-flows`       | "grid-auto-flows-*"                                                     |
| `$grid-auto-axis`        | "auto-cols-\*", "auto-rows-*"                                           |
| `$contents`              | "justify-\*", "content-*"                                               |
| `$justify-items`         | "justify-items-\*", "justify-self-\*", "place-items-\*", "place-self-*" |
| `$align-items`           | "items-\*", "self-*"                                                    |
| `$place-contents`        | "place-content-*"                                                       |

#### Spacings

| Option name    | Utility classes that it generates                                                                                                                                                                   |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `$spacings`    | "space-\*", "space-x-\*", "space-y-\*", "gap-\*", "gap-x-\*", "gap-y-\*", "p-\*", "px-\*", "py-\*", "pt-\*", "pr-\*", "pb-\*", "pl-\*", "m-\*", "mx-\*", "my-\*", "mt-\*", "mr-\*", "mb-\*", "ml-*" | 

#### Sizes

| Option name              | Utility classes that it generates                     |
|--------------------------|-------------------------------------------------------|
| `$widths`                | "w-*"                                                 |
| `$min-widths`            | "min-w-*"                                             |
| `$max-widths`            | "max-w-*"                                             |
| `$heights`               | "h-*"                                                 |
| `$min-heights`           | "min-h-*"                                             |
| `$max-heights`           | "max-h-*"                                             |

#### Typography

| Option name              | Utility classes that it generates                     |
|--------------------------|-------------------------------------------------------|
| `$font-sizes`            | "fs-*"                                                |
| `$font-weights`          | "fw-*"                                                |
| `$letter-spacings`       | "ls-*"                                                |
| `$line-heights`          | "lh-*"                                                |
| `$font-styles`           | "*"                                                   |
| `$list-style-types`      | "list-*"                                              |
| `$list-style-positions`  | "list-*"                                              |
| `$text-alignments`       | "text-*"                                              |
| `$text-colors`           | "text-*"                                              |
| `$text-decorations`      | "*"                                                   |
| `$text-transforms`       | "*"                                                   |
| `$text-overflows`        | "overflow-*"                                          |
| `$vertical-alignments`   | "align-*"                                             |
| `$whitespaces`           | "whitespace-*"                                        |
| `$word-breaks`           | "break-*"                                             |
| `$overflow-wraps`        | "wrap-*"                                              |

#### Backgrounds

| Option name              | Utility classes that it generates                     |
|--------------------------|-------------------------------------------------------|
| `$background-colors`     | "bg-*"                                                |
| `$background-clips`      | "bg-*"                                                |
| `$background-positions`  | "bg-*"                                                |
| `$background-repeats`    | "bg-*"                                                |
| `$background-sizes`      | "bg-*"                                                |

#### Borders

| Option name              | Utility classes that it generates                     |
|--------------------------|-------------------------------------------------------|
| `$border-radius`         | "rounded-*"                                           |
| `$borders`               | "border-*"                                            |
| `$outlines`              | "outline-*"                                           |

#### Effects

| Option name              | Utility classes that it generates                     |
|--------------------------|-------------------------------------------------------|
| `$box-shadows`           | "shadow-*"                                            |
| `$opacities`             | "opacity-*"                                           |

#### Transitions

| Option name              | Utility classes that it generates                           |
|--------------------------------|-------------------------------------------------------|
| `$transition-properties`       | "transition-*"                                        |
| `$transition-durations`        | "duration-*"                                          |
| `$transition-timing-functions` | "ease-*"                                              |

#### Interactivity

| Option name              | Utility classes that it generates                     |
|--------------------------|-------------------------------------------------------|
| `$appearances`           | "appearance-*"                                        |
| `$cursors`               | "cursor-*"                                            |
| `$pointer-events`        | "pointer-events-*"                                    |
| `$user-selects`          | "select-*"                                            |
