import { Outlet } from "react-router-dom";
import Header from "../Header";
import styles from "./styles.module.scss";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
