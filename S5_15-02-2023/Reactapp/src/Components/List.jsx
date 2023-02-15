function List(props) {
  var content = "React is JS Library and used to Create UI";
  var data = ["HTML", "CSS", "JS", "REACT", "JAVA", "Node Js", "DSA"];
  var user = {
    name: "Kabir",
    email: "Kabir@gmail.com",
  };
  return (
    <div>
      <p> {content}</p>
      <ol>
        {data.map((ele, index) => {
          return <li>{ele}</li>;
        })}
      </ol>

      <dl>
        <dt>NAME</dt>
        <dd>{user.name}</dd>
        <dt>EMAIL</dt>
        <dd>{user.email}</dd>
      </dl>
    </div>
  );
}

export default List;
