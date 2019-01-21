import React from 'react'

class Weather extends React.Component {
  constructor(props) {
    super(props)
    // Don't call this.setState() here!
    this.state = { forecasts: [], city: 'San Francisco' }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.getForecast()
  }
  handleChange(event) {
    const city = event.target.value
    this.setState((state, props) => {
      console.log(event)
      return {city: city}
    })
  }
  handleClick(event) {
    this.getForecast()
  }
  getForecast() {
    const city = encodeURIComponent(this.state.city)
    fetch(`//api.openweathermap.org/data/2.5/forecast/?q=${city}&APPID=${this.props.apiKey}&units=imperial`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data)
        this.setState(state=>{
          return {error: null, forecasts: data.list}});
      })
      .catch((error)=> {
        this.setState({forecasts: [], error: error})
      })
  }
  render() {

    if (!this.state.city) return <div>Please provide city</div>
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.city} type="text"/>
        <br/>
        <input type="button" onClick={this.handleClick} value="Search"/>
        <br/>
        {(this.state.error) ? this.state.error.message: null}
        {this.state.forecasts.map((forecast, index) => {
          return <div key={index}>{forecast.dt_txt}, {forecast.main.temp}F</div>
        })}
      </div>
    )
  }
}


export default Weather