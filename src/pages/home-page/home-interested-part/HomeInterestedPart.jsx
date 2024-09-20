import Button from "../../../components/button/Button";
import styles from "../HomePage.module.scss";
import btnStyles from "../../../components/button/Button.module.scss";

function HomeInterestedPart() {
  return (
    <>
      <div className={styles.frame}>
        <h1>Looking for a job</h1>
        <h2>I am interested in these positions:</h2>
        <ul>
          <li>Front-End Web developer (Junior / Intern)</li>
          <li>Back-End Web developer (Junior / Intern)</li>
          <li>Full-Stack Web developer (Junior / Intern)</li>
          <li>QA tester (Junior / Intern)</li>
          <li>UI/UX designer (Junior / Intern)</li>
        </ul>
        <Button>
          <a href="#contact" className={btnStyles.button}>
            Contact me
          </a>
        </Button>
      </div>
    </>
  );
}

export default HomeInterestedPart;
