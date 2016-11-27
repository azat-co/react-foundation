

### Running the Code

Open `content.html` and check if you see title and text!

![inline](images/content.png)

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