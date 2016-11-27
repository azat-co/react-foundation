const ReactDOM = require('react-dom')
const React = require('react')
const AnalogDisplay = require('./analog-display.jsx')
const DigitalDisplay = require('./digital-display.jsx')

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.launchClock()
    this.state = {
      currentTime: (new Date()).toLocaleString()
    }
  }
  launchClock() {
    setInterval(()=> {
      console.log('Updating...')
      this.setState({currentTime: (new Date()).toLocaleString()})
    }, 1000)
  }
  render() {
    console.log('Rendering...')
    return <div>
      <AnalogDisplay time={this.state.currentTime}/>
      <DigitalDisplay time={this.state.currentTime}/>
    </div>
  }
}

module.exports = Clock