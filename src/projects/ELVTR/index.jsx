import Styles from "./index.module.scss";

import journeyIcon from "./icons/journey.png";
import prototypeIcon from "./icons/prototype.png";
import flowchartIcon from "./icons/flowchart.png";
import wireframe from "./icons/wireframe.png";
import usability from "./icons/usability.png";
import moodboard from "./icons/moodboard.png";
import mockup from "./icons/mockup.png";
import accessibility from "./icons/accessibility.png";
import arrow from "./icons/arrow.png";

import journeyFile from "./documents/journey.png";
import flowchartFile from "./documents/flowchart.png";
import wireframeFile from "./documents/wireframe.png";
import mockupFile from "./documents/mockup.png";

import { Preview } from "../../components/Preview";
import Section from "../../components/Section";
import { css } from "../../utils";

export default function ELVTR() {
  const sectionList = [
    {
      label: "Player Journey",
      file: journeyFile,
    },
    {
      label: "Paper Prototype & Flowchart",
      file: flowchartFile,
    },
    {
      label: "Wireframe & Iterations",
      file: wireframeFile,
    },
    {
      label: "UI Mockups & Colorblindness Checks",
      file: mockupFile,
    },
  ];

  const iconList = [
    {
      label: "Player Journey",
      icon: journeyIcon,
      file: sectionList[0].file,
    },
    {
      label: "Paper Prototype",
      icon: prototypeIcon,
      link: sectionList[1].file,
    },
    {
      label: "Flow Chart",
      icon: flowchartIcon,
      link: sectionList[1].file,
    },
    {
      label: "Wireframe",
      icon: wireframe,
      link: sectionList[2].file,
    },
    {
      label: "Usability Test",
      icon: usability,
      link: sectionList[2].file,
    },
    {
      label: "UI Mockups",
      icon: mockup,
      link: sectionList[3].file,
    },
    {
      label: "Accessibility Test",
      icon: accessibility,
      link: sectionList[3].file,
    },
  ];

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
      <Section>
        <h1>Overview</h1>
        <p>
          Bridging the gap between my technical background and Game UX/UI - in
          order to enhance communications between the two disciplines by
          breaking down UI screens and features into user flow charts and
          mockups.
        </p>
        <br />

        <h1>Length of this Project</h1>
        <p>8 Weeks</p>
        <br />
        <h1>Challenges</h1>
        <ul>
          <li>
            Understanding design principles, the AAA gaming industry, and the
            relevant skills and software.
          </li>
          <li>
            Creating UX deliverables to communicate ideas and prioritize time
            efficiency and iteration.
          </li>
          <li>
            Balancing coursework with a full-time job and maintaining a healthy
            personal life.
          </li>
        </ul>
      </Section>
      <Section>
        <h1>Work Process</h1>
        <div className={css(Styles.processContainer)}>
          {iconList.map((icon, index) => (
            <>
              {index > 0 && <img className={css(Styles.arrow)} src={arrow} />}
              <div
                className={css(Styles.process)}
                onClick={() => window.open(icon.file)}
              >
                <img src={icon.icon} />
                <div>{icon.label}</div>
              </div>
            </>
          ))}
        </div>
      </Section>
      {sectionList.map((section) => (
        <Section>
          <h1>{section.label}</h1>
          <img
            className={css(Styles.document)}
            src={section.file}
            onClick={() => window.open(section.file)}
          />
        </Section>
      ))}

      <Section>
        <h1>Outcomes</h1>
        <ul>
          <li>
            Understanding design principles, the AAA gaming industry, and the
            relevant skills and software.
          </li>
          <li>
            Creating UX deliverables to communicate ideas and prioritize time
            efficiency and iteration.
          </li>
          <li>
            Balancing coursework with a full-time job and maintaining a healthy
            personal life.
          </li>
        </ul>
      </Section>
    </div>
  );
}