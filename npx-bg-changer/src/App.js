
import { useState } from "react";
import { ColourSelector } from "./Components/ColourSelector.jsx";

function App() {
  const [colour, setColour] = useState('black')
  function changeColour(colour) {
    window.localStorage.setItem('Background', (colour));
    setColour(colour)
  }
  return (
    <>
      <div className="w-100 h-screen relative" style={{backgroundColor: window.localStorage.getItem('Background') || colour}}></div>
      <ColourSelector changeColour={changeColour}/>
    </>
  );
}

export default App;