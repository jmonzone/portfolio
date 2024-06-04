import "./App.module.scss";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import ELVTR from "./projects/ELVTR";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/elvtr" element={<ELVTR />} />
      </Routes>
    </Router>
  );
}

export default App;
