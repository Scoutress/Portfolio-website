import HomeAboutPart from "./home-about-part/HomeAboutPart";
import HomeContactPart from "./home-contact-part/HomeContactPart";
import HomeEducationPart from "./home-education-part/HomeEducationPart";
import HomeInterestedPart from "./home-interested-part/HomeInterestedPart";
import HomeLanguagesPart from "./home-languages-part/HomeLanguagesPart";
import HomeSkillsPart from "./home-skills-part/HomeSkillsPart";
import HomeWorkExpPart from "./home-work-exp-part/HomeWorkExpPart";
import Header from "../../components/header/Header";
import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <>
      <div className={styles.page}>
        <Header />
        <div className={styles.content}>
          <div id="about">
            <HomeAboutPart />
          </div>
          <div id="interested">
            <HomeInterestedPart />
          </div>
          <div id="skills">
            <HomeSkillsPart />
          </div>
          {/* Add section for current/completed projects */}
          <div id="education">
            <HomeEducationPart />
          </div>
          <div id="work-experience">
            <HomeWorkExpPart />
          </div>
          <div id="languages">
            <HomeLanguagesPart />
          </div>
          <div id="contact">
            <HomeContactPart />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
