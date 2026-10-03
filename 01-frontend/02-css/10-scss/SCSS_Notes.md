SCSS (sassy css)

SCSS is an advanced version of CSS that makes writing styles easier and
more powerful. It adds extra features like nesting, mixins, and imports,
which help you write cleaner and more organized code.

### 3. Nesting

In normal CSS, you often repeat selectors again and again:

But in SCSS, you can **nest** your CSS the same way your HTML is
structured: it makes your css more neat and readable

nav {
  background: black;

  ul {
    list-style: none;

    li {
      display: inline-block;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}

------------------------------------------------------------------------

### 4. Partials & Import

When your project grows, you don't want all your code in **one big
file** it's confusing.

So SCSS allows you to **split your styles** into small files called
**partials**.

For example : partial files start with `_` (underscore)

    _header.scss
    _footer.scss
    _variables.scss
    style.scss

Then you combine them in your main file using:

@import "header";
@import "footer";

------------------------------------------------------------------------

### 5. Mixins

A **mixin** is like a "reusable piece of code."

If you find yourself writing the same CSS again and again for example,
Flexbox centering you can save it as a mixin.

Example:

@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center;
}

Now you can use `@include flex-center;` anywhere you need centering.

No need to retype those three lines again and again.

You can even make your mixins smarter by adding **arguments** (like
function parameters):

@mixin box($width, $color) {
  width: $width;
  background: $color;
}

.card {
  @include box(200px, #ff6347);
}

So now your `.card` will automatically get a width of 200px and a
background color of tomato all from one reusable mixin.

------------------------------------------------------------------------

### 6. Built-in Functions

SCSS has some **in-built color tools** that make design tweaks super
easy.

Examples:

lighten($color, 20%); // makes the color lighter
darken($color, 10%);  // makes the color darker
mix(#ff0000, #0000ff, 50%); // mixes two colors

You can use them like this:

button {
  background: lighten(#3498db, 10%);
}
