import styles from "../HomePage.module.scss";

function HomeSkillsPart() {
  return (
    <>
      <div className={styles.frame}>
        <h1>Skills & Technologies</h1>
        <ul>
          <h2>Programming languages</h2>
          <li>Java</li>
          <li>JavaScript</li>
        </ul>
        <ul>
          <h2>Web development</h2>
          <li>HTML</li>
          <li>CSS</li>
          <li>Vite</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
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
