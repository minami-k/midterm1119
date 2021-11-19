import React, { Component } from "react";

class WeatherDetails extends Component {


  render() {
    const iconUrl = `http://openweathermap.org/img/w/${this.props.icon}.png`;

    return (
      <div>
        <h4 className="city-name">
          {this.props.cityName}, {this.props.country}
        </h4>
        <div className="flex-container">
          <div className="current">
            <p className="current-temp">current temperature:</p>
            <p className="temp">
              {" "}
              <span className="num">
                {this.props.temp}
                <span className="font-s">°C</span>
              </span>
            </p>
          </div>

          <div className="weather-data">
              <div className="current-weather">
            <p>
              <img className="icon-img" src={iconUrl} alt="" />
            </p>
            <p className="weather">{this.props.weather} </p>
            </div>
            <p>
            feels like:{" "}
            <span className="num">
              {this.props.feelsLike}
              <span className="font-ss">°C</span>
            </span>
          </p>
          <p>
            humidity:{" "}
            <span className="num">
              {this.props.humidity}
              <span className="font-ss">%</span>
            </span>
          </p>

          </div>

        </div>
      </div>
    );
  }
}

export default WeatherDetails;
