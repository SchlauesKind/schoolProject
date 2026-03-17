import goethe_logo from "./goethe_logo.jpg";
import home_icon from "./home_icon.svg";
import styles from "./header_styles.module.css";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <header className={`${styles.header} ${styles.flexContainer}`}>
      <Link to="/" className={styles.item}>
        <img src={home_icon} alt="Home Icon" className={styles.logo} />
      </Link>
      <h1 className={styles.wellcome}>Goethe-Kocht.de</h1>
      <a
        href="https://www.goethegymnasiumdortmund.de"
        className={styles.item}
        target="_blank"
      >
        <img src={goethe_logo} alt="Goethe Logo" className={styles.logo} />
      </a>
    </header>
  );
}

export default HeaderComponent;
