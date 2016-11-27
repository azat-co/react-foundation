const ReactDOM = require('react-dom')
const React = require('react')

console.log('start: if you see this after build, then everything is ok')

ReactDOM.render(
  <h1 htmlFor="yes">Hello world!</h1>,
  document.getElementById('content')
)