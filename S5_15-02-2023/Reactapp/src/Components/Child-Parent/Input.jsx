import { useState } from "react";

function Input(props) {
  const [childData, setChildData] = useState("");
  const sendDataToParent = () => {
    props.setState(childData);
  };
  return (
    <div>
      <hr />
      <h2>Child Component</h2>
      <input
        type="text"
        onChange={(e) => {
          setChildData(e.target.value);
        }}
      />
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
}

export default Input;
