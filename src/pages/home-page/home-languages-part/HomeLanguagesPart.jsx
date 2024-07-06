import styles from "../HomePage.module.scss";

function HomeLanguagesPart() {
  return (
    <>
      <div className={styles.frame}>
        <h1>Languages</h1>
        <ul>
          <li>Lithuanian: Native</li>
          <li>
            English: Good understanding, intermediate speaking & writing skills
            (B1)
          </li>
        </ul>
      </div>
    </>
  );
}

export default HomeLanguagesPart;
