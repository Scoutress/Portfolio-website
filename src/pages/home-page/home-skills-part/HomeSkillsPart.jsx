import styles from "../HomePage.module.scss";

function HomeSkillsPart() {
  return (
    <>
      <div className={styles.frame}>
        <h1>Skills & Technologies</h1>
        <ul>
          <h2>Front-End technologies & frameworks</h2>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Vite</li>
        </ul>
        <ul>
          <h2>Back-End technologies</h2>
          <li>Java</li>
        </ul>
        <ul>
          <h2>Database technologies</h2>
          <li>MySQL</li>
          <li>SQLite</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </>
  );
}

export default HomeSkillsPart;
