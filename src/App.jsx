import RegisterModal from "./Register";
import InfoScan from "./InfoScan";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* <h1>Welcome to Our Website</h1> */}
      {/* <RegisterModal /> */}
      <InfoScan/>
      <RegisterModal/>
      {/* Rest of your website content */}
    </div>
  );
};

export default App;

// import "./App.css";
// import InfoScan from "./InfoScan";
// import Register from "./Register";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <BrowserRouter basename="Info_scan">
//         <Routes>
//           <Route path="/" element={<Register />}/>
//           <Route path="main" element={<InfoScan/>}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
