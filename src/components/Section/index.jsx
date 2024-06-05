import { css } from "../../utils";
import Styles from "./index.module.scss";

export default function Section({ background = true, children }) {
  return (
    <div className={css(Styles.section, background && Styles.background)}>
      {children}
    </div>
  );
}
