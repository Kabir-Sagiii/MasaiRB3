import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

function Login(props) {
  const { login } = useContext(AuthContext);
  const [state, setState] = useState({
    name: "",
    password: "",
  });

  const loginIn = () => {
    if (
      state.name === process.env.REACT_APP_USERNAME &&
      state.password === process.env.REACT_APP_PASSWORD
    ) {
      login();
    } else {
      alert("Check Your Credentials or Enter Proper Credentials");
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Login</h2>
      <input
        onChange={(e) => {
          setState({
            ...state,
            name: e.target.value,
          });
        }}
        type="text"
        placeholder="User Name"
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setState({
            ...state,
            password: e.target.value,
          });
        }}
      />
      <br />
      <button onClick={loginIn}>Login</button>
    </div>
  );
}

export default Login;
