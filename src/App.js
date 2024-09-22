import { useState } from "react";
import "./App.css";

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-200">
      <h1 className="text-3xl font-bold mb-6">Toggle Switch</h1>

      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={toggleSwitch} />
        <span className="slider round"></span>
      </label>

      <h2 className="text-2xl mt-4">
        {isOn ? "ON" : "OFF"}
      </h2>
    </div>
  );
}

export default App;
