# Motivation

You may be asking yourself why the hell there is another CSS framework??

You're 100% right, there is really no answer of why this framework exists. I don't recommend it's use.

I could argue that it's more for educational purposes. Maybe someone out there wants to use it as an example of how to create
a utility-first CSS framework with only SCSS.

Just to name a few of the CSS frameworks out there (all of them pretty awesome):

* [TailwindCSS](https://tailwindcss.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Foundation](https://get.foundation/index.html)
* [WindiCSS](https://windicss.org/)
* [Materialize](https://materializecss.com/)
* [SematincUI](https://semantic-ui.com/)
* [Bulma](https://bulma.io/)
* [UIkit](https://getuikit.com/)
* [PureCSS](https://purecss.io/)
* [Skeleton](http://getskeleton.com/)
* [Primer](https://primer.style/)

... and I could continue 😱


I will share my opinion on what has been useful to me when writing CSS/HTML/JS:

* A CSS framework shouldn't provide JS functionality. 
* I prefer to work with two libraries/frameworks when I write web applications: a CSS framework and a Web Component framework.
* CSS classes should be responsive and mobile-first. The default values should be for small screens and then use responsive variants to target larger screens.
* When dealing with web components, always prefer an implementation with raw CSS and HTML rather than involving JS.
* Always prefer utility classes over "functional specific classes". Utility classes are more easy to scale.
* CSS classes that target a web component should be built based on a base class and then extend it via modifiers.
* Always try to write low [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) CSS selectors.
* Try to write you're CSS selectors without relying on HTML tags so these selectors can be reused in other contexts. Only base styles should target HTML/SVG elements.
* Avoid `!important` in your CSS. I have been able to write large codebase without relying on it.
* Try to have your design system defined in one place and stick to it.
* Use `rem`, `em` and `%` units over `px` or `viewport` units. Viewport units are tricky to use in mobile browsers. Pixel units may not scale well when user changes the default font-size.
* Use HSL for CSS colors instead of RGB or HEX (at least until LCH gets supported by most browsers)
* A CSS framework shouldn't limit the developer ability to style the web application.
* Also try to stick to the standards, don't try to fight against them. In the long run it will be better.

This framework is somewhat similar to [TailwindCSS](https://tailwindcss.com/) but written in SCSS.

[TailwindCSS](https://tailwindcss.com/) is way more powerful, you should use TailwindCSS if you're searching for a utility fist
CSS framework.

CSS frameworks that are utility first are more powerful when used in combination with a web component library. Utility classes are
useful for styling the responsive layout.

I want to make it clear that I have a lot of respect for CSS frameworks like [Bootstrap](https://getbootstrap.com/) 
 or [TailwindCSS](https://tailwindcss.com/), I think that they're awesome, and you should give them a try.

Also, I recommend a lot the use of [PurgeCSS](https://purgecss.com/). It's an amazing tool to use for reducing the amount
of unused CSS in your application.

I encourage to put your repetitive HTML/CSS/JS in a web component and rely on utility classes for styling the layout of
your page.

These are some things that I try to follow:

* Web components for presentational logic (try to make them lightweight in JS and accessible)
* Animations should be an enhancement (use `prefers-reduced-motion: no-preference` to add animations)
* Utility CSS classes for layout (responsiveness). Mobile-first always.
* I use one file for defining all my design system, and I stick to it. 
* JS for business logic, state management, communication with the backend and routing (or use the file system).

Also try not to write random/magic numbers in your CSS. It's better to define a design system and use your configuration
values for assigning CSS properties values (for example in TailwindCSS you would use the `theme` function or the `@apply` directive). 
It makes it really easy to maintain a large codebase if there is one file that controls all your CSS.
