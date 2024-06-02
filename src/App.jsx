import "./App.module.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import { Canvas } from "@react-three/fiber";
import { css } from "./utils";
import Styles from "./App.module.scss";
import {
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";
import environmentImage from "./assets/environment.jpg";
import { BackSide } from "three";

function Scene() {
  const backgroundTexture = useTexture(environmentImage);
  return (
    <group>
      <mesh>
        <sphereGeometry args={[32, 32, 32]} />
        <meshBasicMaterial map={backgroundTexture} side={BackSide} />
      </mesh>
    </group>
  );
}
function App() {
  return (
    <Router>
      <div className={css(Styles.canvasContainer)}>
        <Canvas
          onPointerOver={() => (document.body.style.cursor = "grab")}
          onPointerOut={() => (document.body.style.cursor = "auto")}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.1}
            rotateSpeed={0.25}
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={(3 * Math.PI) / 4}
          />
          <Scene />
        </Canvas>
      </div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
