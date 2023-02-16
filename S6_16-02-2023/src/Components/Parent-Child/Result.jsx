import React from "react";

function Result(props) {
  return (
    <div>
      <hr />

      <h2>Child Component</h2>
      <p>{props.data}</p>
    </div>
  );
}

export default Result;
