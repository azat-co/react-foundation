footer: © NodeProgram.com, Node.University and Azat Mardan 2017
slidenumbers: true

# React Foundation
## Module 4: Advancing Components

![inline 100%](images/azat.jpeg)
Azat Mardan @azat_co

![inline right](images/nu.png)

---


# Props Features

---

### Default Props

The `getDefaultProps` method is invoked once before the instance is created. The properties in the returned object will be set on `this.props` if they are not set by the parent.

---

### Default Props Example

```js
class Button extends React.Component {
  render(){
    return <button >{this.props.buttonLabel}</button>
  }
}
Button.defaultProps = {
  buttonLabel: 'lorem ipsum'
}
```

---

### Parent With a Missing Props

This parent component `Content` is missing props on 3 Button components:

```js
class Content extends React.Component {
  render() {
    return (
      <div>
        <Button buttonLabel="Start"/>
        <Button />
        <Button />
        <Button />
      </div>
    )
  }
}
```

---

### Default Props Demo

If the prop is missing the default value is used:

![inline](images/default-props.png)

Source code: `/default-props` or <http://plnkr.co/edit/7JC7qg3Ka87i5ObETV7r?p=preview>.

---

# Prop Types

---

### Prop Types

You can set the prop types on React.js classes. If the type doesn't match and you're in development mode, then you'll get a warning in the console.

Note: React.js suppresses this warning in production mode (more on the dev vs. prod later).

---

### Front-end Validation Warning

Warning: Never rely on the front-end user input validation. Use it only for better User Experience (UX) and check everything on the server-side.

---

### Development vs. Production

The way React.js team defines the development mode is when you're using un-minified version, and the production mode is when you're using minified version.

> We provide two versions of React: an uncompressed version for development and a minified version for production. The development version includes extra warnings about common mistakes, whereas the production version includes extra performance optimizations and strips all error messages.

---

### Validating Props

Use the `propTypes` property with the object that has props as keys and types as values. React.js types are in the React.PropTypes object. For example:

* `React.PropTypes.string`
* `React.PropTypes.number`
* `React.PropTypes.bool`
* `React.PropTypes.object`
* `React.PropTypes.array`
* `React.PropTypes.func`

---

### Prop Type Example

This class will have an optional `title` prop of the string type:

```js
class Button extends React.Component {
  //...
}  
Button.propTypes = {
  title: React.PropTypes.string
}
```

`/prop-types` or <http://plnkr.co/edit/fK74C6wrQeF5uRSno6Dy?p=preview>


---


### Required Prop Type

To make a prop required just add `isRequired` to the type. This class will have a `handler` prop of function type required:

```js
class Button extends React.Component {
  //...  
}
Button.propTypes = {
  handler:  React.PropTypes.func.isRequired
}
```

---

### Prop Types Demo

The example in the `module2/prop-types` folder will produce these warnings:

```
Warning: Failed propType: Required prop `handler` was not specified in `Button`. Check the render method of `Content`.
Warning: Failed propType: Invalid prop `title` of type `number` supplied to `Button`, expected `string`. Check the render method of `Content`.
```

Only the unminifed version of React.js shows the warnings—development mode.

---

### Custom Validation

Just return an instance of `Error`. For example, this code validate email with Regular Expression:

```js
email(props, propName, componentName) {
  let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  if (!emailRegularExpression.test(props[propName])) {
    return new Error('Email validation failed!')
  }
}
```

---

### Additional Prop Types

There are many additional types and helper methods. Please refer to the documentation:

<https://facebook.github.io/react/docs/reusable-components.html#prop-validation>

---

# Higher-Order Components

---

```js
const LoadWebsite = (Component) => {
  class _LoadWebsite extends React.Component {
    constructor(props) {
      super(props)
      this.state = {label: 'Run'}
      this.state.handleClick = this.handleClick.bind(this)
    }
    // ...
    render() {
      console.log(this.state)
      return <Component {...this.state} {...this.props} />
    }
  }
  return _LoadWebsite
}
```

---

# Rendering Children

---

### Children Components

Instance A:

```
<Content>
  <h1>React.js</h1>
  <p>Rocks</p>
</Content>
```

Instance B:

```
<Content>
  <img src="https://facebook.github.io/react/img/logo.svg"/>
</Content>
```

---

### Children Prop

There's an easy way to render all the children with `{this.props.children}`.

---

### Children Prop Example

For example, we add a `div` and pass along children elements:

```js
class Content extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
```

---

### Parent

The parent has children `<h1>` and `<p>`:

```js
ReactDOM.render(
  <Content>
    <h1>React.js</h1>
    <p>Rocks</p>
  </Content>,
  document.getElementById('content')
)
```

Source code: `/children` or <http://plnkr.co/edit/ykC29RjWxxmblI2HyfiV?p=preview>.

---

### Children is an Array

Children is an Array if n>1. You can access individual elements link this:

```js
{this.props.children[0]}
{this.props.children[1]}
```

---

### Children Truthy Check

There's only one element, this.props.children is NOT an array. Use `React.Children.count(this.props.children)` to get the accurate count.

More helpers: <https://facebook.github.io/react/docs/top-level-api.html#react.children>

---


# Style Attribute

---

### CSS Style Attribute

You can set the style attribute using JS object literal or JSON and camel case (backgroundImage instead of background-image). For example, the first `{}` is for object and the second `{}` is for rendering:

```html
<div style={{borderColor: 'blue', fontFamily: 'Arial'}}>
```

---

### Style with Object

Of course, we can define the style as an object and use it in JSX with `{}`:

```js
class Content extends React.Component {
  render() {
    let style = {border: '1px solid blue'}
    return (
      <div style={style}>
        <h1>Hello!</h1>
      </div>
    )
  }
}
```

Source code: `/style` or <http://plnkr.co/edit/8OjJ1vBPH7sN9pNf065G?p=preview>.

---


### `componentDidMount()`

The `componentDidMount()` method is invoked when component is inserted into the DOM. You can use this method to perform operations, and/or send AJAX/XHR requests.

---

### `componentDidMount()` Example

Print DOM:

```js
class Content extends React.Component {
  componentDidMount() {
    console.log(ReactDOM.findDOMNode(this))
  }
  render() {
    return (
      <div/>
    )
  }
}
```

---





### Autocomplete Project

1. Data: Express, MongoDB, Universal JS
1. Setup: JSX, npm, Babel and Webpack

---


# Demo

Project: Autocomplete

Source code:  `code/react/autocomplete`

---

![](images/autocomplete-1.png)

---

![](images/autocomplete-2.png)

---

To run the project:

```
$ npm install
$ npm start
```

Navigate to <http://localhost:3000>

---


## Workshop: Autocomplete 🔨💻😁

1. Make it work (`mongod`?)
1. Add remove/delete/x icon/button to *each* chat room in views
1. Add a REST endpoint to delete
1. Add AJAX/XHR call to remove message (pass ID in the URL as as DELETE /rooms/:id)
1. Deploy to cloud: Heroku, now.sh, AWS, etc.

