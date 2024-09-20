import Button from "../../button/Button";
import styles from "./HeaderButtons.module.scss";

function HeaderButtons() {
  return (
    <div className={styles.allButtons}>
      <Button>
        <a href="#about">About</a>
      </Button>
      <Button>
        <a href="#skills">Skills</a>
      </Button>
      <Button>
        <a href="#education">Education</a>
      </Button>
      <Button>
        <a href="#projects">Projects</a>
      </Button>
      <Button>
        <a href="#work-experience">Experience</a>
      </Button>
      <Button>
        <a href="#languages">Languages</a>
      </Button>
      <Button>
        <a href="#contact">Contact</a>
      </Button>
    </div>
  );
}

export default HeaderButtons;
