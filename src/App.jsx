import { useState } from "react";
import BaseCanvas from "./components/canvas/BaseCanvas";
import "./App.css";
import BaseDom from "./components/dom/BaseDom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="appContainer">
        <BaseCanvas />
        <BaseDom />
      </div>
    </>
  );
}

export default App;
