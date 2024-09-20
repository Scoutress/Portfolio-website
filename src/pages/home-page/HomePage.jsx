import HomeAboutPart from "./home-about-part/HomeAboutPart";
import HomeContactPart from "./home-contact-part/HomeContactPart";
import HomeEducationPart from "./home-education-part/HomeEducationPart";
import HomeInterestedPart from "./home-interested-part/HomeInterestedPart";
import HomeLanguagesPart from "./home-languages-part/HomeLanguagesPart";
import HomeProjectsPart from "./home-projects-part/HomeProjectsPart";
import HomeSkillsPart from "./home-skills-part/HomeSkillsPart";
import HomeWorkExpPart from "./home-work-exp-part/HomeWorkExpPart";
import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div id="about" className={styles.section}>
          <HomeAboutPart />
        </div>
        <div id="interested" className={styles.section}>
          <HomeInterestedPart />
        </div>
        <div id="skills" className={styles.section}>
          <HomeSkillsPart />
        </div>
        <div id="education" className={styles.section}>
          <HomeEducationPart />
        </div>
        <div id="projects" className={styles.section}>
          <HomeProjectsPart />
        </div>
        <div id="work-experience" className={styles.section}>
          <HomeWorkExpPart />
        </div>
        <div id="languages" className={styles.section}>
          <HomeLanguagesPart />
        </div>
        <div id="contact" className={styles.section}>
          <HomeContactPart />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
