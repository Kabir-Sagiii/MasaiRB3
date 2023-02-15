import { useState } from "react";
var styles = {
  width: "500px",
  boxShadow: "0 0 10px black",
  padding: "50px",
  margin: "100px auto",
  textAlign: "center",
};
function Counter(props) {
  console.log("Counter re-rendered");
  let [count, setCount] = useState(0); //2

  const increaseCount = () => {
    setCount((prevState) => {
      return prevState + 5;
    });
    setCount((prevState) => {
      return prevState + 5;
    });
    setCount((prevState) => {
      return prevState + 100;
    });
  };

  // const increaseCount = () => {
  //   // setCount(count + 1);
  //   // setCount(count + 1);

  //   setCount(count + 3);
  //   setCount(count + 1);
  //   setCount(count + 10); // state // 14
  // };

  // const increaseCount = () => {
  //   console.log(count); //0  1
  //   setCount(count + 1); // asynchronous by nature
  //   console.log(count); //  0 1
  //   console.log("Hello");
  // };

  return (
    <div style={styles}>
      <h3>Count Value is {count}</h3>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}

export default Counter;
