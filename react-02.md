footer: © NodeProgram.com, Node.University and Azat Mardan 2017
slidenumbers: true

# React Foundation
## Module 2: Component-Based Architecture

![inline 100%](images/azat.jpeg)
Azat Mardan @azat_co

![inline right](images/nu.png)

---

# Composable Components

The concept of components is the foundation of React.js philosophy. They allow you to reuse code and logic. They are like templates only better.

---

### Types of React.js Components

React.js component types:

* Regular HTML elements such as h1, p, div, etc.
* Custom or composable components

---

### Difference Between Regular and Custom Components

If it's a regular HTML tag name, then React.js will create such element. Otherwise, it will look for the custom component definition.

Note: React.js uses lower-case vs. upper case to distinguish between HTML tags and components.

---

### Defining a Component

Composable components are created with `class/extends` and must have `render` method that returns regular component (`div`, `h1`, etc.):

```js
const React = require('react')

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello world!</h1>
  }
}
```

---

# Sidenote `createClass()`

Old style (ES5):

```js
var React = require('react')

var HelloWorld = React.createClass({
  render: function() {
    return (
      <h1>Hello world!!!</h1>
    )
  }
})
```

---

### Refactoring with a HelloWorld Component

The `hello-world-component/jsx/hello-world.jsx` file has a custom component:


```js
const React = require('react')
const ReactDOM = require('react-dom')

const HelloWorld = require('./hello-world.jsx')

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('example')
)
```

---

### HTML Skeleton

Point your `index.html` to use `js/bundle.js`:

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <div id="example"></div>
    <script src="js/bundle.js"></script>
  </body>
</html>
```

---


### Running the Code


Open `index.html` and check if you see Hello world! (Use `static`)

---

![](images/hello-world-component-2.png)

---


# Variables

Use `{}` to render variable inside of JSX:

```js
{a}
{' '}
{b}
```


---


Even use JavaScript in the curly braces!

```js
{Math.random()}
{365/7}
```

---

### Variable Example

In the `variable/script.jsx` file, we output the value of `a`:

```js
class Content extends React.Component {
  render() {
    let a = 1
    return (
      <div>
        <h1>
          {a}. Core React.js
        </h1>
        <p>This text is very useful for learning React.js.</p>
      </div>
    )
  }
}
```

---