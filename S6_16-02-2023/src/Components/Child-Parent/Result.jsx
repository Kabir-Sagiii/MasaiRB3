import { useState } from "react";
import Input from "./Input";
var styles = {
  width: "500px",
  boxShadow: "0 0 10px red",
  padding: "30px",
  margin: "50px auto",
};
function Result(props) {
  const [state, setState] = useState("Child Data");
  return (
    <div style={styles}>
      <h2>Parent Component</h2>
      <p>{state}</p>
      <Input setState={setState} />
    </div>
  );
}

export default Result;
