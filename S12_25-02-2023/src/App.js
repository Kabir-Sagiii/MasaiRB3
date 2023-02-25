import "./App.css";
import Nav from "./Components/Nav";
import AllRoutes from "./Components/AllRoutes";
import AuthContextProvider from "./Context/AuthContext";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Nav />
        <AllRoutes />
      </AuthContextProvider>
    </div>
  );
}

export default App;
