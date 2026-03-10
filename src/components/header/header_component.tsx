import goethe_logo from "./goethe_logo.jpg";
import home_icon from "./home_icon.svg";
import up_icon from "./up.svg";
import styles from "./header_styles.module.css";
import { Link } from "react-router-dom";

function UpButton() {
  return (
    <div className={`${styles.upButton}`} onClick={() => window.scrollTo(0, 0)}>
      <img src={up_icon} alt="Up Icon" className={styles.logo} />
    </div>
  );
}

function HeaderComponent() {
  return (
    <header className={styles.header}>
      <div className={styles.flexContainer}>
        <Link to="/" className={styles.item}>
          <img src={home_icon} alt="Home Icon" className={styles.logo} />
        </Link>
        <a
          href="https://www.goethegymnasiumdortmund.de"
          className={styles.item}
          target="_blank"
        >
          <img src={goethe_logo} alt="Goethe Logo" className={styles.logo} />
        </a>
      </div>
      <UpButton />
    </header>
  );
}

export default HeaderComponent;
