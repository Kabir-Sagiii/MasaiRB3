import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
  const [state, setState] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    category: "",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
      });
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        boxShadow: "0 0 10px black",
        margin: "50px auto",
        width: "300px",
        padding: "50px",
      }}
    >
      <h1>{state.category}</h1>
      <img src={state.image} width="300" height="300" />
      <p>{state.title}</p>
      <p>{state.description}</p>
    </div>
  );
}

export default ProductDetails;
