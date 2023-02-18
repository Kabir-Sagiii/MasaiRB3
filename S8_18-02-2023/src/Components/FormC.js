import { useState } from "react";
var style = {
  width: "300px",
  padding: "30px",
  textAlign: "center",
  margin: "50px auto",
  boxShadow: "0 0 10px black",
};
var initialData = {
  name: "",
  password: "",
  email: "",
  city: "",
};
function FormC(props) {
  const [data, setData] = useState(initialData);

  const handleData = (event) => {
    const { value, name } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  //   const handlePassword = (event) => {
  //     const { value } = event.target;
  //     setData({
  //       ...data,
  //       password: value,
  //     });
  //   };
  const getData = (event) => {
    event.preventDefault();

    console.log(data);
  };
  return (
    <div style={style}>
      <form onSubmit={getData}>
        <h2>User Form</h2>
        <div>
          <input
            type="text"
            placeholder="User Name"
            onChange={handleData}
            name="name"
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={handleData}
            name="password"
          />
        </div>
        <br />
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleData}
          />
        </div>
        <br />
        <select name="city" onChange={handleData}>
          <option>Select City</option>
          <option>Hyderabad</option>
          <option>Pune</option>
          <option>Banglore</option>
          <option>Delhi</option>
        </select>
        <br />
        <br />
        <div>
          <button>Register User</button>
        </div>
      </form>
      <div></div>
    </div>
  );
}

export default FormC;
