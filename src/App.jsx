import InfoScan from "./InfoScan";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contactus from "./Contactus";

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <InfoScan/>
      <Contactus/>
      <Footer/>
    </div>
  );
};

export default App;