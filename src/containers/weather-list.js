import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Chart } from '../components/weather-data';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {

  renderWeather(cityData) {
    const city = cityData.city.name;

    const temps = cityData.list.map(value => value.main.temp);
    const pressure = cityData.list.map(value => value.main.pressure);
    const humidity = cityData.list.map(value => value.main.humidity);

    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={city}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={temps} color="orange" units="℉"/></td>
        <td><Chart data={pressure} color="blue" units="mB"/></td>
        <td><Chart data={humidity} color="black" units="%"/></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
