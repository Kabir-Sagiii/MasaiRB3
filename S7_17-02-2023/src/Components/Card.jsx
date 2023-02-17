import { useEffect, useState } from "react";

var cardStyle = {
  width: "300px",
  boxShadow: "0 0 10px black",
  padding: "10px",
  margin: "50px auto",
};

function Card() {
  const [user, setUser] = useState({
    name: {
      first: "",
    },
    picture: {
      medium: "",
    },
    gender: "",
  });

  useEffect(() => {
    //sideEffect

    localStorage.setItem("name", "Kabir");
    localStorage.setItem("Trainer", "At MASAI");
    getData();

    return () => {
      // Releasing the Resource
      // Cleanup
      console.log("Returned Fn Called");
      // localStorage.removeItem("name");
      // localStorage.removeItem("Trainer");
      //cleanup logic
      // alert("Component Will Unmount");
    };
  }, []);

  const getData = async () => {
    var res = await fetch("https://randomuser.me/api/?results=1");
    var data = await res.json();
    console.log(data);
    setUser(data.results[0]); // Update Phase
  };

  const getNewData = () => {
    // can I Perform SideEffect
    getData();
  };

  return (
    <div style={cardStyle}>
      <img src={user.picture.medium} width="100%" height="250px" />
      <h3>{user.name.first}</h3>
      <p>{user.gender}</p>
      <button onClick={getNewData}>Get Data</button>
    </div>
  );
}

export default Card;
