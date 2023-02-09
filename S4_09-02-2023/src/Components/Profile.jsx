import { useState } from "react";
var style = {
  width: "800px",
  margin: "50px auto",
  padding: "10px",
  boxShadow: "0 0 10px black",
  display: "flex",
  height: "400px",
};
function Profile() {
  let [state, setState] = useState({
    image:
      "https://thumbs.dreamstime.com/b/young-business-woman-using-computer-office-portrait-young-business-woman-using-computer-office-117010939.jpg",
    name: "Sneha Reddy",
    email: "Sneha@gmail.com",
    gender: "female",
  });

  const getNewUser = async () => {
    var res = await fetch("https://randomuser.me/api/?results=1");
    var data = await res.json();

    console.log(data);
    setState({
      image: data.results[0].picture.medium,
      name: data.results[0].name.first + data.results[0].name.last,
      email: data.results[0].email,
      gender: data.results[0].gender,
    });
  };

  return (
    <div style={style}>
      <div style={{ width: "40%" }}>
        <img src={state.image} width="100%" height="100%" />
      </div>

      <div style={{ width: "60%", padding: "30px" }}>
        <dl>
          <dt>
            <b>User Name</b>
          </dt>
          <dd>{state.name}</dd>
          <dt>
            <b>Email Id</b>
          </dt>
          <dd>{state.email}</dd>
          <dt>
            <b>Gender</b>
          </dt>
          <dd>{state.gender}</dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sequi
            alias illo voluptates impedit beatae consectetur officia qui
            reprehenderit. Numquam at neque necessitatibus magnam aut rerum
            veniam tenetur animi, dolorem reprehenderit eius alias
            exercitationem harum, facere eveniet inventore aspernatur possimus.
          </dd>
        </dl>
        <button onClick={getNewUser}>Change User</button>
        <br />
        <br />
        <input type="checkbox" />
        <label>Switch to Dark Mode</label>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Profile;
