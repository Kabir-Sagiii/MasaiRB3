import "./App.css";
import MyBox from "./Components/Box";
import StackComp from "./Components/Stack";
import FlexComp from "./Components/FlexComp";
import Alert from "./Components/Alert";



function App() {
  return (
    <div className="App">
      {/* <Alert /> */}
     <MyBox />
     <StackComp/>
     {/* <FlexComp /> */}
    </div>
  );
}

export default App;
