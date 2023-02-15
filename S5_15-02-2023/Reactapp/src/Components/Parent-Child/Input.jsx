import { useState } from "react";
import Result from "./Result";
function Input(props) {
  const [state, setState] = useState();
  const [childdata, setChildData] = useState("Parent Data");
  const sendDataToChild = () => {
    setChildData(state);
  };
  return (
    <div
      style={{
        width: "500px",
        margin: "50px auto",
        boxShadow: "0 0 10px green",
        padding: "30px",
      }}
    >
      <h2>Parent Component</h2>
      <input
        type="text"
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <button onClick={sendDataToChild}>Send to Child</button>
      <Result data={childdata} />
    </div>
  );
}

export default Input;
