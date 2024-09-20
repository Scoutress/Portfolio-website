import PropTypes from "prop-types";
import styles from "./Sidebar.module.scss";
import btnStyles from "../../components/button/Button.module.scss";
import Button from "../button/Button";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.menu}>
        <Button className={btnStyles.button} onClick={toggleSidebar}>
          <a href="#about">About</a>
        </Button>
        <Button className={btnStyles.button} onClick={toggleSidebar}>
          <a href="#skills">Skills</a>
        </Button>
        <Button className={btnStyles.button} onClick={toggleSidebar}>
          <a href="#education">Education</a>
        </Button>
        <Button className={btnStyles.button} onClick={toggleSidebar}>
          <a href="#work-experience">Experience</a>
        </Button>
        <Button className={btnStyles.button} onClick={toggleSidebar}>
          <a href="#languages">Languages</a>
        </Button>
        <Button className={btnStyles.button} onClick={toggleSidebar}>
          <a href="#contact">Contact</a>
        </Button>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
