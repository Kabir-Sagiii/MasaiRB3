import { useState } from "react";

function Counter(props) {
  //created state Variable
  let [count, setCount] = useState(0); //2
  let [name, setName] = useState("Kabir");

  //   var countValue = 0;
  var styles = {
    width: "300px",
    boxShadow: "0 0 10px black",
    padding: "30px",
    margin: "100px auto",
    textAlign: "center",
  };
  const increaseCount = () => {
    // countValue = countValue + 1;
    // console.log(countValue);
    setCount(count + 1); // 1 + 1 = 2
    setName("Sagar");
  };

  return (
    <div style={styles}>
      <h3>
        {name} Count Value is {count}
      </h3>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}

export default Counter;
