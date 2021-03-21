import "../css/header.css";
import { useState } from "react";

const Header = ({ searchCity }) => {
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchCity(input);
    setInput("");
  };
  return (
    <nav>
      <h1>WeatherApp</h1>
      <form onSubmit={onSubmit}>
        <span className="material-icons">search</span>
        <input
          type="text"
          placeholder="Search for city"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <a
        href="https://en.wikipedia.org/wiki/Climate_change"
        target="_blank"
        rel="noreferrer"
      >
        news
      </a>
    </nav>
  );
};

export default Header;
