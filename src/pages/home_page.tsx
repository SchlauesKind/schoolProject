import { Link } from "react-router-dom";
import styles from "./main_styles.module.css";

function HomePage() {
  return (
    <div className={styles.homePageBody}>
      <h1 className={styles.homePageHeader}>Willkommen auf unserer Seite</h1>
      <h2>Entdecken Sie unsere verschiedenen Küchen</h2>
      <div className={styles.gridContainer}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul>
        <li>
          <Link className={styles.link} to="/russian_kitchen">
            Russische Küche
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/german_kitchen">
            Deutsche Küche
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
