import "../css/activeDay.css";
import humidityIcon from "../img/icons/humidity.png";
import pressureIcon from "../img/icons/pressure.png";
import sunriseIcon from "../img/icons/sunrise.png";
import sunsetIcon from "../img/icons/sunset.png";

const ActiveDay = ({
  city,
  country,
  temprature,
  weatherDesc,
  minTemp,
  maxTemp,
  todaysDate,
  iconPath,
  humidity,
  pressure,
  sunrise,
  sunset,
}) => {
  return (
    <div className="activeDayContainer">
      <p className="placeholder">
        Weather in {city}, {country}
      </p>
      <div className="activeDayFlex">
        <img className="activeDayIcon" src={iconPath} alt="todays weather icon"></img>
        <div className="activeDayPContainer">
          <p className="activeDayTemprature">{temprature}°C</p>
          <p className="activeDayDate">{todaysDate}</p>
          <p>{weatherDesc}</p>
          <h5>lowest temprature: {minTemp}°C</h5>
          <h5>highest temprature: {maxTemp}°C</h5>
        </div>
      </div>
      <div className="iconDescContainer">
        <div className="iconContainer">
          <div>
            <img className="humidity" src={humidityIcon}  alt="showing a specifiy weather data for humidity"/>
            <p>Humidity: </p>
            <p>{humidity}</p>
          </div>
          <div>
            <img className="pressureIcon" src={pressureIcon}  alt="showing a specifiy weather data for pressure"/>
            <p>Pressure: </p>
            <p>{pressure}</p>
          </div>
          <div>
            <img className="sunriseIcon" src={sunriseIcon}  alt="showing a specifiy weather data for sunrise"/>
            <p>Sunrise: </p>
            <p>{sunrise}</p>
          </div>
          <div>
            <img className="sunsetIcon" src={sunsetIcon}  alt="showing a specifiy weather data for sunset"/>
            <p>Sunset: </p>
            <p>{sunset}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveDay;
