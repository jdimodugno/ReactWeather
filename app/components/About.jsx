var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'> About </h1>
      <p> This is a weather application build on React. It is an approach to a real web development app. A proof of concept, the things you can do using React and a third party api.</p>
      <p> I was able to build it following "The Complete React Web App Developmer Course" made by Andrew Mead.</p>
      <p> To access the github repo I used this
        <a href='https://github.com/jdimodugno/ReactWeather' target='_blank'> link </a>
      </p>
      <p>
        For fetching the weather data I use:
        <a href='https://openweathermap.org' target='_blank'> OpenWeatherMap </a>
      </p>
      <div>
        I used tools such as:
        <div>
          <a href='https://facebook.github.io/react' target='_blank'> React </a>
          <span> - This is the Javascript Framework I've chosen for making this app. </span>
        </div>
        <div>
          <a href='http://foundation.zurb.com' target='_blank'> Foundation </a>
          <span> - This is the css framework for styling the app. </span>
        </div>
      </div>
    </div>
  );
}

module.exports = About;
