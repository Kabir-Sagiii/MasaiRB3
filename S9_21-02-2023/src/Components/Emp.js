import React from "react";

function Emp(props) {
  return (
    <div>
      <h2>Employee Component</h2>
      {props.children}
    </div>
  );
}

export default Emp;
