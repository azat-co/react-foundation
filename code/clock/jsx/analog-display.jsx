const React = require('react')

const AnalogDisplay = function(props) {
  let date = new Date(props.time)
  let dialStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 20000,
    borderStyle: 'solid',
    borderColor: 'black'
  }
  let secondHandStyle = {
    position: 'absolute',
    top: 100,
    left: 100,
    border: '1px solid red',
    width: '40%',
    height: 1,
    transform: 'rotate(' + ((date.getSeconds()/60)*360 - 90 ).toString() + 'deg)',
    transformOrigin: 'left center 0px',
    backgroundColor: 'red'
  }
  let minuteHandStyle = {
    position: 'absolute',
    top: 100,
    left: 100,
    border: '1px solid grey',
    width: '40%',
    height: 3,
    transform: 'rotate(' + ((date.getMinutes()/60)*360 - 90 ).toString() + 'deg)',
    transformOrigin: 'left center 0px',
    backgroundColor: 'grey'
  }
  let hourHandStyle = {
    position: 'absolute',
    top: 100,
    left: 100,
    border: '1px solid grey',
    width: '20%',
    height: 7,
    transform: 'rotate(' + ((date.getHours()/12)*360 - 90 ).toString() + 'deg)',
    transformOrigin: 'left center 0px',
    backgroundColor: 'grey'
  }
  return <div>
    <div style={dialStyle}>
      <div style={secondHandStyle}/>
      <div style={minuteHandStyle}/>
      <div style={hourHandStyle}/>
    </div>
  </div>
}

module.exports = AnalogDisplay