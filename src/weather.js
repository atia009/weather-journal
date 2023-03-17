const Weather = (() => {
  // cache DOM
  // functions
  async function getWeatherData(lat, lon) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b16174330827eb42bc4960c184f75ca5`,
        { mode: "cors" }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCoordinatesData(location) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=b16174330827eb42bc4960c184f75ca5`,
        { mode: "cors" }
      );
      const data = await response.json();
      const { lat } = data[0];
      const { lon } = data[0];
      getWeatherData(lat, lon);
    } catch (error) {
      console.log(error);
    }
  }

  // function calls
  getCoordinatesData("los angeles");
  // bind events
  // public methods
})();

export default Weather;
