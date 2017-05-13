var React = require('react');

var WeatherMessage = (props) => {
  var {temp, location} = props;
  return (
    <div>
      <h5 className='text-center'> It's it {temp} in {location} </h5>
    </div>
  );
}

module.exports = WeatherMessage;
