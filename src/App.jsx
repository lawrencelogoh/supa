import BaseCanvas from "./components/canvas/BaseCanvas";
import "./App.css";
import BaseDom from "./components/dom/BaseDom";

function App() {
  return (
    <div className="appContainer">
      <BaseCanvas />
      <BaseDom />
    </div>
  );
}

export default App;
