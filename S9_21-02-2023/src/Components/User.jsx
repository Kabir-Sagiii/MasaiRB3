function User({ name, children }) {
  return (
    <div>
      <h1>User Name is {name}</h1>
      <h3>{children}</h3>
    </div>
  );
}

export default User;
