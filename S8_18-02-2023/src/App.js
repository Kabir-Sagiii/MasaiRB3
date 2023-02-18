import "./App.css";
import { useState } from "react";
import Card from "./Components/Card";
import Counter from "./Components/Counter";
import Timer from "./Components/Timer";
import DOM from "./Components/DOM";
import FormC from "./Components/FormC";

function App() {
  return (
    <div className="App">
      <FormC />
      <DOM />
      <Timer />
    </div>
  );
}

export default App;
