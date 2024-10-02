import { useNavigate } from "react-router-dom";
import Button from "../../button/Button";
import styles from "./HeaderButtons.module.scss";

const HeaderButtons = () => {
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId) => {
    navigate("/", { replace: true });
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <div className={styles.allButtons}>
      <Button onClick={() => handleScrollToSection("about")}>About</Button>
      <Button onClick={() => handleScrollToSection("skills")}>Skills</Button>
      <Button onClick={() => handleScrollToSection("education")}>Education</Button>
      <Button onClick={() => handleScrollToSection("projects")}>Projects</Button>
      <Button onClick={() => handleScrollToSection("work-experience")}>Experience</Button>
      <Button onClick={() => handleScrollToSection("languages")}>Languages</Button>
      <Button onClick={() => handleScrollToSection("contact")}>Contact</Button>
    </div>
  );
};

export default HeaderButtons;
