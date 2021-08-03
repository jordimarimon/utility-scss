# Mixins/Functions

Here you have a bunch of mixins and functions available.

To use a mixin/function:

```scss
@use "~utility-scss/mixins/<module>";

.test-class {
    // mixin
    @include <module>.<mixin>([...args]);

    // mixin with content projection
    @include <module>.<mixin>([...args]) {
        // ...
    }

    // function
    <property>: <module>.<function>([...args]);
}
```

If the return type is `void`, it's a mixin, otherwise it's a function.

#### Animations module

| Mixin/Function               | Type       | Description |
|------------------------------|------------|-------------|
| `scale-in`                   | `(): void`  |            |
| `scale-out`                  | `(): void`  |            |
| `fade-in`                    | `(): void`  |            |
| `fade-out`                   | `(): void`  |            |
| `ping`                       | `(): void`  |            |
| `spin`                       | `(): void`  |            |
| `pulse`                      | `(): void`  |            |
| `bounce`                     | `(): void`  |            |

#### Breakpoints module

| Mixin/Function               | Type                               | Description |
|------------------------------|------------------------------------|------------|
| `media-down`                 | `($breakpoint): void { @content }` |            |
| `media-up`                   | `($breakpoint): void { @content }` |            |

#### Effects module

| Mixin/Function               | Type                               | Description |
|------------------|------------------------------------------------|-------------|
| `hover-rotate-x` | `($color: red): void`                           |            |
| `skeleton`       | `($pulse: false, $color: hsl(0, 0%, 85%): void` |            |

#### Layout module

| Mixin/Function               | Type                                                                                           | Description |
|------------------------------|------------------------------------------------------------------------------------------------|------------|
| `flex`                       | `($display: flex, $direction: row, $align: stretch, $justify: flex-start, $wrap: nowrap): void` |            |
| `responsive-flex`            | `($sizes, $gap: 0): void`                                                                       |            |
| `responsive-grid`            | `($min-width: 1fr, $min-height: 0, $gap: 1rem): void`                                           |            |
| `gap`                        | `($value): void`                                                                                |            |
| `container-query`            | `($width, $container-breakpoint): void`                                                         |            |

#### Core module

| Mixin/Function               | Type                            | Description |
|------------------------------|---------------------------------|------------|
| `to-number`                  | `($value): <length[unitless]>`  |            |
| `strip-unit`                 | `($number): <lenght[unitless]>` |            |
| `flat-map`                   | `($map): scss:map`              |            |

#### Resets module

| Mixin/Function               | Type       | Description |
|------------------------------|-----------|------------|
| `button`                     | `(): void` |            |
| `input`                      | `(): void` |            |

#### Unit module

| Mixin/Function               | Type                                                                                                | Description |
|------------------------------|-----------------------------------------------------------------------------------------------------|------------|
| `rem`                        | `($val): <length[rem]>`                                                                              |            |
| `em`                         | `($val, $context: 16px): <length[em]>`                                                               |            |

#### Utils module

| Mixin/Function               | Type                                             | Description |
|------------------------------|--------------------------------------------------|------------|
| `text-overflow`              | `($max-width: unset, $type: ellipsis): void`      |            |
| `fix-radial-overflow-webkit` | `(): void`                                        |            |
| `animation`                  | `(): void { @content }`                           |            |
| `hover`                      | `(): void { @content }`                           |            |
| `aspect-ratio`               | `($width: 1, $height: 1): void`                   |            |
| `scrollbar`                  | `($size, $color, $background: transparent): void` |            |
