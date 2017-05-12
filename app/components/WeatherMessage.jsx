var React = require('react');

var WeatherMessage = (props) => {
  var {temp, location} = props;
  return (
    <div>
      <h6> It's it {temp} in {location} </h6>
    </div>
  );
}

module.exports = WeatherMessage;
