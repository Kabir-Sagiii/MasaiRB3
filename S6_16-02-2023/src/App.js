import "./App.css";
import { useState } from "react";
import Card from "./Components/Card";
import Counter from "./Components/Counter";

function App() {
  const [showcard, setShowCard] = useState(true);
  return (
    <div className="App">
      {showcard ? (
        <Card
          img="https://www.livecareer.com/wp-content/uploads/2017/12/successful-businessman-suit.jpg"
          name="Raj Sinha"
        />
      ) : (
        <Counter />
      )}
      <button
        onClick={() => {
          setShowCard(true);
        }}
      >
        Show Card
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          setShowCard(false);
        }}
      >
        Show Counter
      </button>
    </div>
  );
}

export default App;
