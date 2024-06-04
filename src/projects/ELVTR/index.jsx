import Styles from "./index.module.scss";
import previewImage from "../../assets/biodome.png";
import { Preview } from "../../components/Preview";
import Section from "../../components/Section";

export default function ELVTR() {
  return (
    <div>
      <Preview
        type="model"
        path={"/elvtr/scene.gltf"}
        options={{
          position: [0, -2, 0],
          rotation: [0, Math.PI, 0],
          scale: 2,
        }}
        clampXRotation
      >
        <div className={Styles.header}>
          <div className={Styles.subtitle}>ELVTR Coursework - Game UI/UX</div>
          <div className={Styles.title}>Case Study: Animal Crossing</div>
        </div>
      </Preview>
      <Section header={"About this Project"}>
        {/* <div className={css(Styles.spotlight)}>Mycelium</div> */}
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
        <button>More Information</button>
      </Section>
    </div>
  );
}
