import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import useDeviceType from "../../hooks/UseDeviceType";
import styles from "./Root.module.scss";
import HeaderBtn from "../../components/header-btn/HeaderBtn";

const Root = () => {
  const isMobile = useDeviceType();

  return (
    <div className={styles.root}>
      {!isMobile && <Header />}
      {isMobile && <HeaderBtn />}
      <Outlet />
    </div>
  );
};

export default Root;
