import "../css/day.css";

const Day = ({ day, index, date, month, year }) => {
  date = date + index;
  let newDate = new Date();
  let todaysDate = "sunday";
  let dayNum = parseInt(newDate.getDay().toString()) + index;
  if (dayNum ===  1) {
    todaysDate = "monday";
  }
  if (dayNum === 2) {
    todaysDate = "tuesday";
  }
  if (dayNum === 3) {
    todaysDate = "wednesday";
  }
  if (dayNum === 4) {
    todaysDate = "thursday";
  }
  if (dayNum === 5) {
    todaysDate = "friday";
  }
  if (dayNum === 6) {
    todaysDate = "saturday";
  }

  return (
    <div className="dayContainer">
      <img className="dayIcon" src={day[index].weather[0].icon + ".png"} alt="icon showing the weather" />
      <p className="dayTemprature">{Math.round(day[index].temp.day - 273)}°C</p>
      <p className="dayDate">{todaysDate + ", " + date + "." + month + "." + year}</p>
    </div>
  );
};

export default Day;
