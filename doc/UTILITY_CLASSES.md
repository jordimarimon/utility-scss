# Utility classes

Here I will describe the utility classes that the framework generates based on the [default configuration](../_default.scss).

Any utility class has it's responsive variants:

```html
<div class="<responsive-breakpoint>:<class-name>"></div>
```

For example:

```html
<!-- It will apply to screens sizes larger than 480px -->
<div class="xs:flex"></div>

<!-- It will apply to screens sizes larger than 640px -->
<div class="sm:flex"></div>

<!-- It will apply to screens sizes larger than 768px -->
<div class="md:flex"></div>

<!-- It will apply to screens sizes larger than 1024px -->
<div class="lg:flex"></div>

<!-- It will apply to screens sizes larger than 1280px -->
<div class="xl:flex"></div>
```

The responsive variants are mobile-first. This means that they apply to screens sizes larger thant the defined breakpoint.

Responsive variants have a larger CSS specificity thant non-responsive classes. 

The CSS specificity works like this: "xl" > "lg" > "md" > "sm" > "xs" > non-responsive.

For example:

```html
<!-- Imagine that we're in a screen size larger than 1280px -->
<!-- The utility class "xl:flex" will win independently of the order used to write the class names -->
<div class="block xs:inline sm:grid md:table lg:hidden xl:flex"></div>
```

#### Layout

* `$display`

| Class name     | CSS Styles               |
|----------------|--------------------------|
| `block`        | `display: block;`        |
| `inline-block` | `display: inline-block;` |
| `inline`       | `display: inline;`       |
| `flex`         | `display: flex;`         |
| `inline-flex`  | `display: inline-flex;`  |
| `table`        | `display: table;`        |
| `inline-table` | `display: inline-table;` |
| `grid`         | `display: grid;`         |
| `inline-grid`  | `display: inline-grid;`  |
| `hidden`       | `display: none;`         |

* `$floats`

| Class name     | CSS Styles               |
|----------------|---------------------------|
| `float-right`  | `float: right;`           |
| `float-left`   | `float: left;`            |

* `$clears`

| Class name     | CSS Styles               |
|----------------|--------------------------|
| `clear-left`   | `clear: left;`           |
| `clear-right`  | `clear: right;`          |
| `clear-both`   | `clear: both;`           |

* `$isolations`

| Class name     | CSS Styles               |
|----------------|--------------------------|
| `isolate`      | `isolation: isolate;`    |
| `isolate-auto` | `isolation: auto;`       |

* `$object-fits`

| Class name          | CSS Styles                |
|---------------------|---------------------------|
| `object-contain`    | `object-fit: contain;`    |
| `object-cover`      | `object-fit: cover;`      |
| `object-fill`       | `object-fit: fill;`       |
| `object-none`       | `object-fit: none;`       |
| `object-scale-down` | `object-fit: scale-down;` |

* `$object-positions`

| Class name            | CSS Styles                       |
|-----------------------|----------------------------------|
| `object-bottom`       | `object-position: bottom;`       |
| `object-center`       | `object-position: center;`       |
| `object-left`         | `object-position: left;`         |
| `object-left-bottom`  | `object-position: left bottom;`  |
| `object-left-top`     | `object-position: left top;`     |
| `object-right`        | `object-position: right;`        |
| `object-right-bottom` | `object-position: right bottom;` |
| `object-right-top`    | `object-position: right top;`    |
| `object-top`          | `object-position: top;`          |

* `$overflows`

| Class name          | CSS Styles                |
|---------------------|---------------------------|
| `overflow-auto`     | `overflow: auto;`         |
| `overflow-hidden`   | `overflow: hidden;`       |
| `overflow-visible`  | `overflow: visible;`      |
| `overflow-scroll`   | `overflow: scroll;`       |
| `overflow-x-auto`   | `overflow-x: auto;`       |
| `overflow-x-hidden` | `overflow-x: hidden;`     |
| `overflow-x-visible`| `overflow-x: visible;`    |
| `overflow-x-scroll` | `overflow-x: scroll;`     |
| `overflow-y-auto`   | `overflow-y: auto;`       |
| `overflow-y-hidden` | `overflow-y: hidden;`     |
| `overflow-y-visible`| `overflow-y: visible;`    |
| `overflow-y-scroll` | `overflow-y: scroll;`     |

* `$overflow-webkit`

| Class name          | CSS Styles                           |
|---------------------|--------------------------------------|
| `overflow-touch`    | `-webkit-overflow-scrolling: touch;` |

* `$overscroll-behaviours`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|
| `overscroll-auto`   | `overscroll-behavior: ;`  |
| `overscroll-contain`| `overscroll-behavior: ;`  |
| `overscroll-none`   | `overscroll-behavior: ;`  |

* `$positions`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$offsets`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$visibilities`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$z-indexes`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

#### Flexbox i Grid

* `$flex-directions`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$flex-wraps`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$flex`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$flex-grows`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$flex-shrinks`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$flex-orders`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$grid-templates`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$grid-spans`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$grid-extremes`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$grid-auto-flows`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$grid-auto-axis`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$contents`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$justify-items`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$align-items`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$place-contents`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

#### Espaiats

* `$spacings`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

#### Mides

* `$widths`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$min-widths`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$max-widths`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$heights`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$min-heights`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$max-heights`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

#### Tipografia

* `$font-sizes`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$font-weights`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$letter-spacings`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$line-heights`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$font-styles`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$list-style-types`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$list-style-positions`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$text-alignments`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$text-colors`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$text-decorations`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$text-transforms`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$text-overflows`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$vertical-alignments`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$whitespaces`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$word-breaks`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$overflow-wraps`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

#### Backgrounds

* `$background-colors`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$background-clips`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$background-positions`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$background-repeats`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$background-sizes`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

#### Borders

* `$border-radius`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$borders`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$outlines`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

#### Efectes

* `$box-shadows`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$opacities`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

#### Transicions i Animacions

* `$transition-properties`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$transition-durations`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$transition-timing-functions`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

#### Interactivitat

* `$appearances`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$cursors`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$pointer-events`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

* `$user-selects`

| Class name          | CSS Styles                | 
|---------------------|---------------------------|

## Special Utilities

The following classes are internally generated by the framework.

| Class name          | CSS Styles                | 
|---------------------|---------------------------|
