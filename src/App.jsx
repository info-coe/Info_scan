import "./App.css";
import InfoScan from "./InfoScan";
import Register from "./Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="Info_scan">
        <Routes>
          <Route path="/" element={<Register />}/>
          <Route path="main" element={<InfoScan/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
