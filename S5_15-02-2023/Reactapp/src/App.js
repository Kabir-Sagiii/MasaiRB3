import "./App.css";
import Card from "./Components/Card";
import Counter from "./Components/Counter";
import Input from "./Components/Parent-Child/Input";
import Results from "./Components/Child-Parent/Result";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Input />
        <Results />
      </div>

      {/* <Counter />
      <Card
        img="https://th.bing.com/th/id/OIP.UGlKxiZQylR3CnJIXSbFIAHaLL?pid=ImgDet&rs=1"
        name="Raj Verma"
        gender="Male"
      /> */}

      {/* <div style={{ display: "flex" }}>
        <Card
          img="https://th.bing.com/th/id/OIP.UGlKxiZQylR3CnJIXSbFIAHaLL?pid=ImgDet&rs=1"
          name="Raj Verma"
          gender="Male"
        />
        <Card
          img="https://www.gleneagles.com.sg/images/default-source/coe-women-health/professional-woman.jpg"
          name="Sneha Reddy"
          gender="Female"
        />
        <Card
          img="https://www.epmsonline.com/wp-content/uploads/2018/09/AdobeStock_86346713.jpeg"
          name="Ayushi Sinha"
          gender="Female"
        />
      </div> */}
    </div>
  );
}

export default App;
