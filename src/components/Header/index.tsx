import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <NavLink to="/">
          <h2>📖 Books app</h2>
        </NavLink>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="favorites"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
