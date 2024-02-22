import { useState } from "react";
import "./App.css";
import SliderInput from "./components/slider/slider";

function App() {
  const [value, setValue] = useState("0000000000");

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue.padStart(10, "0"));
  };
  return (
    <div className="app-main">
      <h1>Coloque seu número de telefone</h1>
      <div className="app-form">
        <div className="app-tooltip">
          <span>{value}</span>
        </div>
        <SliderInput value={value} setValue={handleSliderChange} />
      </div>
    </div>
  );
}

export default App;
