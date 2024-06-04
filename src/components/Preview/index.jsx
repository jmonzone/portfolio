import Styles from "./index.module.scss";
import { css } from "../../utils";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { BackSide } from "three";

function Scene({ path }) {
  const backgroundTexture = useTexture(path);

  return (
    <mesh>
      <sphereGeometry args={[32, 32, 32]} />
      <meshBasicMaterial map={backgroundTexture} side={BackSide} />
    </mesh>
  );
}

function Model({ path, ...options }) {
  const { scene } = useGLTF(path); // Path to the GLTF file
  return <primitive object={scene} {...options} />;
}

export function Preview({ type, path, options, children }) {
  return (
    <div className={css(Styles.preview)}>
      <div className={css(Styles.canvasContainer)}>
        <Canvas
          onPointerOver={() => (document.body.style.cursor = "grab")}
          onPointerOut={() => (document.body.style.cursor = "auto")}
          color="black"
        >
          <PerspectiveCamera
            position={[0, type == "background" ? 0 : 2, 10]}
            makeDefault
          />{" "}
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.2}
            rotateSpeed={0.25}
            enablePan={false}
            enableZoom={false}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            target={[0, 0, 0]}
            minPolarAngle={((type == "background" ? 1 : 1.5) * Math.PI) / 4}
            maxPolarAngle={((type == "background" ? 3 : 2) * Math.PI) / 4}
          />
          {type == "background" && <Scene path={path} />}
          {type == "model" && <Model path={path} {...options} />}
        </Canvas>
      </div>
      <div className={css(Styles.gradient)} />
      {children}
    </div>
  );
}
