import styles from "./header_styles.module.css";
import { Link } from "react-router-dom"


function HeaderComponent() {
  return (
    <header className={`${styles.header} ${styles.flexContainer}`}>
      <Link to="/" className={styles.item}>Zu Homepage</Link>
      <Link to="/" className={styles.item}>Zu Homepage</Link>
    </header>
  );
}

export default HeaderComponent;