var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getDefaultProps: () => {
    return ({
      location: '',
      temp: 0
    });
  },
  getInitialState: () => {
    return ({
      isLoading: false
    });
  },
  handleSearch: function (location) {
    var that = this;
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location)
      .then(function (temp) {
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      }, function (errorMessage) {
        alert(errorMessage);
        that.setState({isLoading: false});
      });
  },
  render: function () {
    var {isLoading, temp, location} = this.state;

  function renderMessage() {
    if (isLoading) {
      return (
        <h5> Fetching weather... </h5>
      );
    } else if (temp, location) {
      return (
        <WeatherMessage location={location} temp={temp}/>
      );
    }
  }

    return (
      <div>
        <h4> Weather component </h4>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;