import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    var res = await fetch("https://randomuser.me/api/?results=20");
    var data = await res.json();
    console.log(data.results);
    setUsers(data.results);
  };
  return (
    <div>
      {users.length > 0 ? (
        <div style={{ margin: "30px 100px" }}>
          <table
            style={{ width: "100%" }}
            frame="box"
            rules="all"
            cellPadding={10}
          >
            <thead style={{ background: "coral", color: "white" }}>
              <tr>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>GENDER</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody align="center">
              {users.map((ele, index) => {
                return (
                  <tr>
                    <td>
                      <img src={ele.picture.medium} width={70} height={70} />
                    </td>
                    <td>{ele.name.first}</td>
                    <td>{ele.email}</td>
                    <td>{ele.gender}</td>
                    <td>
                      <Link to="/userdetails" style={{ color: "blue" }}>
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
          {" "}
          <h2 style={{ color: "red", textAlign: "center", marginTop: "100px" }}>
            Users Data is Not Available
          </h2>{" "}
        </div>
      )}
    </div>
  );
}

export default Users;
