import Nav from "./Components/Nav.jsx";
import All from "./Components/All.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import FullstackDevelopemnet from "./Components/FullstackDevelopemnet.jsx";
import DataScience from "./Components/DataScience.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/fullstack" element={<FullstackDevelopemnet />} />
        <Route path="/datascience" element={<DataScience />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
