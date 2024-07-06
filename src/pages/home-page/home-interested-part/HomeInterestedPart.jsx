import styles from "../HomePage.module.scss";

function HomeInterestedPart() {
  return (
    <>
      <div className={styles.frame}>
        <h1>Looking for a job</h1>
        <h2>I am interested in those positions:</h2>
        <ul>
          <li>Front-End Web developer (Junior/Intern)</li>
          <li>Java Back-End Web developer (Junior/Intern)</li>
          <li>Full-Stack Web developer (Junior/Intern)</li>
        </ul>
        <button>Contact me</button>
      </div>
    </>
  );
}

export default HomeInterestedPart;
