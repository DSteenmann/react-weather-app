import Header from "./components/Header";
import Days from "./components/Days";
import ActiveDay from "./components/ActiveDay";
import Background from "./img/bg.png";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCityVar] = useState("Munich");
  const [country, setCountry] = useState("DE");
  const [temprature, setTemprature] = useState("16");
  const [todaysDate, setTD] = useState("19.03.2021");
  const [weatherDesc, setWeatherDesc] = useState("Sunny");
  const [minTemp, setMinTemp] = useState("10");
  const [maxTemp, setMaxTemp] = useState("20");
  const [iconPath, setIconPath] = useState("02d.png");
  const [days, setDays] = useState("");
  const [display, setBoolean] = useState(false);
  const [humidity,setHumidity] = useState("");
  const [pressure, setPressure] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  const getWeatherData = (city) => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=49c88831568a95cba138c9889b1eb7f2"
      )
      .then((result) => {
        setCityVar(city);
        setTemprature(Math.round(result.data.main.temp - 273));
        axios
          .get(
            "https://api.openweathermap.org/data/2.5/onecall?lat=" +
              result.data.coord.lat +
              "&lon=" +
              result.data.coord.lon +
              "&exclude=alerts&appid=49c88831568a95cba138c9889b1eb7f2"
          )
          .then((res) => {
            setDays(res.data.daily);
            let newDate = new Date();
            let date = newDate.getDate();
            let month = newDate.getMonth();
            let year = newDate.getFullYear();
            let day = "sunday";
            if (newDate.getDay().toString() === 1) {
              day = "monday";
            }
            if (newDate.getDay().toString() === 2) {
              day = "tuesday";
            }
            if (newDate.getDay().toString() === 3) {
              day = "wednesday";
            }
            if (newDate.getDay().toString() === 4) {
              day = "thursday";
            }
            if (newDate.getDay().toString() === 5) {
              day = "friday";
            }
            if (newDate.getDay().toString() === 6) {
              day = "saturday";
            }
            setTD(day + ", " + date + "." + month + "." + year);
            console.log(todaysDate, newDate.getDate().toString());
            setMinTemp(Math.round(result.data.main.temp_min - 273));
            setMaxTemp(Math.round(result.data.main.temp_max - 273));
            setCountry(result.data.sys.country);
            setWeatherDesc(result.data.weather[0].description);
            setIconPath(result.data.weather[0].icon + ".png");
            setHumidity(result.data.main.humidity);
            setPressure(result.data.main.pressure);
            setSunrise(new Date(result.data.sys.sunrise * 1000).toISOString().substr(11,8));
            setSunset(new Date(result.data.sys.sunset * 1000).toISOString().substr(11,8));
            setBoolean(true);
            console.log(result);
          });
      });
  };

  return (
    <div className="appContainer">
      <Header searchCity={getWeatherData} />
      <div className="contentBackground">
        {display === true ? (
          <div className="contentContainer">
            <ActiveDay
              city={city}
              country={country}
              temprature={temprature}
              weatherDesc={weatherDesc}
              minTemp={minTemp}
              maxTemp={maxTemp}
              todaysDate={todaysDate}
              iconPath={iconPath}
              days={days}
              humidity={humidity}
              pressure={pressure}
              sunrise={sunrise}
              sunset={sunset}
            />
            <Days days={days} />
          </div>
        ) : (
          <div>
            <h1>
              Search a city to get the current weather and the weather history
              <br />
              for the following week
            </h1>
            <img className="placeholder" src={Background} alt="background image for the main container" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
