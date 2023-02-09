import logo from "./logo.svg";
import "./App.css";
import Image from "./Components/Image";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import List from "./Components/List";
import Counter from "./Components/Counter";

import A from "./Components/CSS/A";
import B from "./Components/CSS/B";

function App() {
  var data = [{ title: "React" }, { title: "Angular" }, { title: "Vue" }];
  return (
    <div>
      <A />
      <B />
      {/* <Counter /> */}
    </div>
    // <div className="App">
    //   <Image
    //     img="https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png"
    //     title={data[0]}
    //   />
    //   <Image
    //     img="https://cdn.windowsreport.com/wp-content/uploads/2020/06/angular-logo-2.png"
    //     title={data[1]}
    //   />
    //   <Image
    //     img="https://th.bing.com/th/id/OIP.b8HASxFPkrLqZ0fJoLV_YQHaGZ?pid=ImgDet&rs=1"
    //     title={data[2]}
    //   />
    // </div>
  );

  // var showHeader = true;
  // // return <div className="App">{showHeader ? <Header /> : <Footer />}</div>;
  // if (showHeader) {
  //   return <Header />;
  // } else {
  //   return <Footer />;
  // }
}

export default App;
