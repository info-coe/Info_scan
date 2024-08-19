import RegisterModal from "./Register";
import InfoScan from "./InfoScan";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <InfoScan/>
      <Footer/>
      <RegisterModal/>
    </div>
  );
};

export default App;