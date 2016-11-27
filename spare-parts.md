
# Nested Elements

Nesting React.js components is easy.

---


### Rendering Title and Text

This is how we can nest `<h1>` and `<p>` inside of `<div>`:

```js
ReactDOM.render(
  <div>
    <h1>
      Core React.js
    </h1>
    <p>This text is very useful for learning React.js.</p>
  </div>,
  document.getElementById('example')
)
```

---

### Single Top-Level Tag

Remember to always have only one element as the top level tag!
For example, this is a **no go**:

```js
ReactDOM.render(  
  <h1>
    Core React.js
  </h1>
  <p>This text is very useful for learning React.js.</p>
  ,
  document.getElementById('content')
)
```

---

Obviously, we can create nested structures in custom components:

```js
const Content extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Core React.js
        </h1>
        <p>This text is very useful for learning React.js.</p>
      </div>
    )
  }
}
```

---

```js
ReactDOM.render(
  <Content />,
  document.getElementById('content')
)
```

---

### Running the Code

Open `content.html` and check if you see title and text!

![inline](images/content.png)

---

### Order of the Code

Remember that the content element (`<div id="content"></div>`) must precede the React.js code (`<script ...`), for the `getElementById` method to locate the proper DOM element:

```html
...
    <div id="content"></div>
    <script type="text/jsx">
      var Content = React.createClass({
      ...
      })
      ReactDOM.render(
        <Content />,
        document.getElementById('content')
      )
    </script>
...
```

---

# Variables

Use `{}` to render variable inside of JSX:

```js
{a}
{' '}
{b}
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

# States

States are mutable properties of components meaning they can change. When state changes the corresponding view changes, but everything else in DOM remains intact.

---

### Initial State


```js
class Content extends React.Component {
  constructor(props){
    super(props)
    this.state = {a: 0}
  },
  render() {
    // ...
  }
}
```

---

### Sidenote: ES5

The initial state is set by the `getInitialState` method which is called once when the element is created.

Let's use this method to return `a`:

```js
var Content = React.createClass({
  getInitialState: function(){
    return {a: 0}
  },
  render: function() {
    // ...
  }
})
```

---

### Updating State

State is updated with `this.setState()`, so this code will update the value with a random number every 300 milliseconds:

```js
class Content extends React.Component {
  constructor(props){
    super(props)
    this.state = {a: 0}
    setInterval(()=>{
      this.setState({a: Math.random()})
    }, 300)
  }
  render() {
    // ...
  }
}
```

---

### Outputting The State

To output the state property `a`, we use `{this.state.a}`:

```js
  render() {
    return (
      <div>
        <h1>Changing the State</h1>
        <p>This value is random: {this.state.a}</p>
      </div>
    )
  }
}
```

---

### Rendering

The rendering didn't change:

```js
ReactDOM.render(
  <Content />,
  document.getElementById('content')
)
```

<http://plnkr.co/edit/S2gjlc?p=preview>

---

# Component Methods

---


### Calling Methods

It's possible to invoke components methods from the `{}` interpolation:

```js
class Content extends React.Component {
  getA() {
    return 10
  }
  render() {
    return (
      <div>
        <p>This value is return by the method: {this.getA()} </p>
      </div>
    )
  }
}
```

---

# Component Events

---

### Events

Components have normalized (cross-browser) events such as

```
onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp
```

---

### Declaring Events

React.js is declarative, not imperative. So we won't attach event like we would do with jQuery, instead we declare them in the JSX and classes:

```js
class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0}
    this.click = this.click.bind(this)
  }
  click(event) {
    this.setState({counter: ++this.state.counter})
  }
  render() {
    // ...
  }
}
```

---

### Button onClick Event

The button has the `onClick={this.click}`.


---

The name must match the method of the `Content` component class:

```js
...
  render() {
    return (
      <div>
        <button onClick={this.click}>Don't click me {this.state.counter} times!</button>
      </div>
    )
  }
})
```


<http://plnkr.co/edit/0wbmK9?p=preview>


---

# Props

Props or properties are immutable meaning they don't change. They are passed by parent components to their children.

---

### Using Props

```js
class ClickCounterButton extends React.Component {
  render() {
    return <button onClick={this.props.handler}>Don't click me {this.props.counter} times! </button>
  }
}
```

---

### Supplying Props

Provide props to the ClickCounterButton component:

```js
class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0}
    this.click = this.click.bind(this)
  }
  click(event) {
    this.setState({counter: ++this.state.counter})
  }
  render() {
    return (
      <div>
        <ClickCounterButton counter={this.state.counter} handler={this.click}/>
      </div>
    )
  }
}
```

<http://plnkr.co/edit/3HqvdG?p=preview>


---

### Where to Put logic

In this example, click event handler was in the parent element. You can put the event handler on the child itself, but using parent allows you to exchange info between children components.

Let's have a button:

```js
class ClickCounterButton extends React.Component {
  render() {
    return <button onClick={this.props.handler}>Don't click me! </button>
  }
}
```

---

### Exchanging Props Between Children

This is a new component which displays value prop:

```js
class Counter extends React.Component {
  render() {
    return <span>Clicked {this.props.value} times.</span>
  }
}
```


---

### Parent Component

The parent component provides props one of which is a handler:

```js
class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0}
    this.click = this.click.bind(this)
  }
  click(event) {
    this.setState({counter: ++this.state.counter})
  }
  render() {
    return (
      <div>
        <ClickCounterButton handler={this.click}/>
        <br/>
        <Counter value={this.state.counter}/>
      </div>
    )
  }
}
```

---

# Summary

---

### Summary

* You don't need JSX to work with React.js, but its the recommended syntax for React.js components. JSXTransformer for run-time JSX (development only).
* React.js can be installed via multiple sources: npm, website, and CDN

---

### Summary (Cont.)

* You create React.js elements with `<...>` or `React.createElement()` and render them with `ReactDOM.render()`
* States are mutable, and props are immutable
* Using Babel can watch for file changes with `-w` flag
* Regular vs. custom components: lower-case first letter

---

### Summary (Cont.)

* `class NAME extends React.Component` allows to create custom components
* `class NAME extends React.Component` needs `render` method that return other React.js component (always one).

---

### Summary (Cont.)

* for and class are forHtml and className attributes in React.js components
* `{}` is a way to render variables and JS in the JSX code
* `this.state.NAME` and `this.props.NAME` are ways to access state and props variables respectively

---

## Questions and Exercises

😕❓➡️😸

---

### Demo: Timer

![inline](images/timer.png)

`code/react/timer`

---

# Workshop: Timer

* 3+ buttons
* 3+ components: 2 presentational and one smart
* Webpack, JSX, Babel, modules, npm
* Static (`node-static`) is not included

`code/react/timer`

---

# Workshop: Timer

1. Move `Timer` and `Button` to separate files
1. Create a pause and resume buttons (could be one button as a toggle)
1. Create a reset button (separate component)
1. Create a custom timer with an input field (separate component)
1. Change to minutes, not seconds