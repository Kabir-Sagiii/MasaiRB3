import { useState, useEffect } from "react";
var styles = {
  width: "500px",
  boxShadow: "0 0 10px black",
  padding: "50px",
  margin: "100px auto",
  textAlign: "center",
};
function Counter(props) {
  var data = "Sagar";
  let [count, setCount] = useState(0); //2
  let [name, setName] = useState("Sagar");

  useEffect(() => {
    console.log("Callback fn is Called");
    document.title = `Count Value is ${count}`; // DOM Methods

    return () => {
      console.log("Returned Fn Called");
    };
  });

  // useEffect(() => {
  //   console.log("New Callback fn is Called");
  // }, [name]);

  const increaseCount = () => {
    setCount(count + 1);
    data = "Kabir";
  };

  return (
    <div style={styles}>
      <h3>
        {name} Changed Count Value to {count}
      </h3>
      <button onClick={increaseCount}>Increase Count</button> &nbsp;
      <button
        onClick={() => {
          setName("Kabir");
        }}
      >
        Change User
      </button>
    </div>
  );
}

export default Counter;
