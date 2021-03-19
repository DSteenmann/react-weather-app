import Header from './components/Header';
import Days from './components/Days';
import Day from './components/Day';
import './App.css';
import { useState } from "react";

function App() {
  const [days, setDay] = useState([]);

  return (
    <div>
      <Header />
      <Days />
    </div>
  );
}

export default App;
