import { useState } from "react";
import styles from "./HeaderBtn.module.scss";

function HeaderBtn() {
  const [show, setShow] = useState(true);

  return (
    <div className={styles.position}>
      <div className="item-container">
        <section className="container">
          <div
            onClick={() => setShow(!show)}
            className={`${styles.hamburger} ${show ? "" : styles.active}`}
          >
            <span className={`${styles.line} ${styles["line-1"]}`}></span>
            <span className={`${styles.line} ${styles["line-2"]}`}></span>
            <span className={`${styles.line} ${styles["line-3"]}`}></span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeaderBtn;
