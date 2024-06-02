import {
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BackSide } from "three";
import Styles from "./index.module.scss";
import { css } from "../../utils";
import Section from "../../components/Section";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={css(Styles.intro)}>
        <div className={css(Styles.gradient)}>
          <div className={css(Styles.name)}>Jonan</div>
          <div className={css(Styles.title)}>Game Design & Development</div>
        </div>
      </div>
      <Section header={"Project Spotlight"}>
        <div className={css(Styles.title)}>Mycelium</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur
          adipiscing elit
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
        </p>
        <button onClick={() => navigate(`about`)}>More Information</button>
      </Section>
      <Section header={"All Projects"} background={false} />
      <Section header={"About"} />
    </div>
  );
}
