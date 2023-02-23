import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    var res = await fetch("https://fakestoreapi.com/products");
    var data = await res.json();
    console.log(data);
    setProducts(data);
  };
  return (
    <div style={{ padding: "30px" }}>
      <div>
        <h2>Product Details</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          nulla adipisci numquam voluptate, blanditiis quaerat eveniet ullam
          laborum id nesciunt, ab voluptatibus corporis ducimus expedita quae
          voluptatem, natus incidunt saepe! Praesentium cum quaerat aspernatur,
          minima nostrum quisquam suscipit excepturi tenetur adipisci sit
          explicabo quae impedit, atque cumque at nobis illum temporibus.
          Recusandae tenetur est minima id facilis porro temporibus distinctio
          quia, totam numquam possimus, perspiciatis inventore maiores officia
          hic nemo illo ducimus veniam quidem reprehenderit, architecto enim!
          Repudiandae culpa odit, eveniet sint molestiae sapiente, distinctio
          neque accusamus exercitationem provident, illum beatae. Laborum porro
          voluptate numquam quidem itaque maiores fugit atque!
        </p>
      </div>
      {products.length > 0 ? (
        <div>
          <table
            style={{ width: "100%" }}
            frame="box"
            rules="all"
            cellPadding={10}
          >
            <thead style={{ background: "coral", color: "white" }}>
              <tr>
                <th>ID</th>
                <th>IMAGE</th>
                <th>Product NAME</th>
                <th>PRICE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody align="center">
              {products.map((ele, i) => {
                return (
                  <tr key={i + 1}>
                    <td>{ele.id}</td>
                    <td>
                      <img src={ele.image} width={70} height={70} />
                    </td>
                    <td>{ele.title}</td>
                    <td>{ele.price}</td>
                    <td>
                      <Link
                        to={`/productdetails/${ele.id}`}
                        style={{ color: "blue" }}
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h2>No Prodicts Information</h2>{" "}
        </div>
      )}
    </div>
  );
}

export default Products;
