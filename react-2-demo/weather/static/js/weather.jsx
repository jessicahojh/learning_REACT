/* start jQuery component */
class JQueryWeatherAlert extends React.Component {
  // Callback function
  alertWeather = () => {
    $.get('/weather.json', data => {
      alert("The weather will be " + data.forecast);
    });
  }

  render() {
    return (
      <button onClick={this.alertWeather}>
        Get Weather with JQuery
      </button>
    );
  }
}
/* end jQuery component */


/* start component */
class FetchWeatherButton extends React.Component {
  getWeather = () => {
    fetch('/random/weather.json')
      .then(response => response.json())
      .then(data => alert(`The weather will be ${data.forecast}`));
  }

  render() {
    return (
      <button onClick={this.getWeather}>
        Get Weather with Fetch
      </button>
    );
  }
}
/* end component */

ReactDOM.render(
  (
    <div>
      <JQueryWeatherAlert />
      <FetchWeatherButton/>
    </div>
  ),
  document.getElementById('root'),
);
