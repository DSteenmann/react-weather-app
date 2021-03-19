import Day from './Day';
import "../css/days.css";

const Days = () => {
    const names = ['James', 'Paul', 'John', 'George', 'Ringo', "a", "c"];

    return (
        <div className="daysContainer">
            <div className="cityContainer">
                <p>Nettetal, Germany</p>
            </div>
            <div className="btnContainer">
                <button className="btnWeek">This Week</button>
                <button className="btnDay">This Day</button>
            </div>
            <div className="weekContainer">
                {names.map(name => (
                    <Day />
                ))}
            </div>
        </div>
    )
}

export default Days
