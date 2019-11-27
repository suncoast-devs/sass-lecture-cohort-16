# Sass

## CSS with superpowers

### (Syntacticaly Awesome Style Sheets)

---

# History

Hampton Catlin, created Haml in 2006. A whitespace significant alternative syntax for HTML. 

---

```html
<section class=”container”>
  <h1>Hello, World.</h1>
  <h2>Ut enim ad minim veniam</h2>
  <div class=”content”>
    # Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  </div>
</section>
```

👇

```haml
%section.container
  %h1 Hello, World.
  %h2 Ut enim ad minim veniam
  .content
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

---

Let's do this for CSS too!

---

# Preprocessing

---

![fit](https://archive.makzan.net/images/introducing-web-design/preprocessing.png)

---

# Using Sass

`create-react-app` already supports Sass.

    yarn add node-sass

Done!

---

# Flavors

## `.scss`

### vs.

## `.sass`

---

# Features

https://sass-lang.com/documentation

---

## Variables

---

```scss
$base-color: #c6538c;
$border-dark: rgba($base-color, 0.88);

.alert {
  border: 1px solid $border-dark;
}
```

👇

```css
.alert {
  border: 1px solid rgba(198, 83, 140, 0.88);
}
```

---

## Nesting

---

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

---

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

---

## Mixins

---

```scss
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}
.box { @include transform(rotate(30deg)); }
```

👇

```css
.box {
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}

```

---

## Extend

---

```scss
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```

---

```css
.message, .success, .error, .warning {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```