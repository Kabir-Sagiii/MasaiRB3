import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
function Users() {
  const [users, setUsers] = useState([]);

  const [searchparams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  var pageNo = searchparams.get("name");
  console.log(pageNo);

  useEffect(() => {
    setSearchParams({
      page: page,
      name: "Kabir",
      sort: "asc",
    });
    getUserData();
  }, [page]);

  const getUserData = async () => {
    var res = await fetch(`https://reqres.in/api/users?page=${page}`);
    var data = await res.json();

    setUsers(data.data);
  };

  const handlePage = (value) => {
    //-1

    var pagenumber = page + value; //2+-1  //2-1 //1
    if (pagenumber >= 1 && pagenumber <= 2) {
      setPage(pagenumber);
    }
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
                <th>ID</th>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>EMAIL</th>
              </tr>
            </thead>
            <tbody align="center">
              {users.map((ele, index) => {
                return (
                  <tr key={index + 1}>
                    <td>{ele.id}</td>
                    <td>
                      <img src={ele.avatar} width={70} height={70} />
                    </td>
                    <td>
                      {ele.first_name}
                      {ele.last_name}
                    </td>
                    <td>{ele.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <button
              onClick={() => {
                handlePage(-1);
              }}
            >
              Prev
            </button>
            &nbsp;
            <button>{page}</button>&nbsp;
            <button
              onClick={() => {
                handlePage(1);
              }}
            >
              Next
            </button>
          </div>
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
