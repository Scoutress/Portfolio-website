import HeaderButtons from "./header-buttons/HeaderButtons";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <HeaderButtons />
      </div>
    </div>
  );
}

export default Header;
