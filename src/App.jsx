import "./App.module.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import { Canvas } from "@react-three/fiber";
import { css } from "./utils";
import {
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";

import ELVTR from "./projects/ELVTR";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="elvtr" element={<ELVTR />} />
      </Routes>
    </Router>
  );
}

export default App;
