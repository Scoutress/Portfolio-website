import HeaderButtons from "./header-buttons/HeaderButtons";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <HeaderButtons />
    </div>
  );
}

export default Header;
