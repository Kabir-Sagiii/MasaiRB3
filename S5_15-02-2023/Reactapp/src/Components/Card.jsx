import React from "react";

var cardStyle = {
  width: "300px",
  boxShadow: "0 0 10px black",
  padding: "10px",
  margin: "50px auto",
};

function Card({ img, name, gender }) {
  return (
    <div style={cardStyle}>
      <img src={img} width="100%" height="250px" />
      <h3>{name}</h3>
      <p>{gender}</p>
    </div>
  );
}

export default Card;
