const Weather = (() => {
  // cache DOM
  // functions
  async function getCoordinatesData(location) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=b16174330827eb42bc4960c184f75ca5`,
        { mode: "cors" }
      );
      const data = await response.json();
      const { lat } = data[0];
      const { lon } = data[0];
      console.log(lat);
      console.log(lon);
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
