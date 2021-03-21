import Day from "./Day";
import { useState } from "react";
import "../css/days.css";

const Days = ({ days }) => {
  const [index] = useState([1, 2, 3, 4, 5, 6]);
  let newDate = new Date();
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();

  return (
    <div className="weekContainer">
      {index.map((res) =>(
          <Day day={days} index={res} date={date} month={month} year={year}/>
      ))}
    </div>
  );
};

export default Days;
