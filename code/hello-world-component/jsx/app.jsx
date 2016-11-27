const ReactDOM = require('react-dom')
const React = require('react')

const HelloWorld = require('./hello-world.jsx')

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('content')
)