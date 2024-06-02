import { css } from "../../utils";
import Styles from "./index.module.scss";

export default function Section({ header, background = true, children }) {
  return (
    <div className={css(Styles.section, background && Styles.background)}>
      <div className={css(Styles.header)}>{header}</div>
      {children}
    </div>
  );
}
