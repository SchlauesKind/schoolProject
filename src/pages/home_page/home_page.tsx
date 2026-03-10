import { Link } from "react-router-dom";
import styles from "./home.module.css";
import flag_data from "../kitchen/kitchen_data.json";

function HomePage() {
  return (
    <div className={styles.homePageBody}>
      <h1 className={styles.homePageHeader}>Willkommen auf unserer Seite</h1>
      <h2>Entdecken Sie unsere verschiedenen Küchen</h2>
      <div className={styles.gridContainer}>
        {flag_data.map((kitchen) => (
          <Link
            key={kitchen.id}
            to={`/kitchen/${kitchen.path}`}
            className={styles.gridItem}
          >
            <img
              src={`${import.meta.env.BASE_URL}flags/${kitchen["flag-file-name"]}`}
              alt={kitchen.title}
            />
            <h3>{kitchen.title}</h3>
            <p>{kitchen.description}</p>
          </Link>
        ))}
      </div>
      <ul>
        <li>
          <Link className="link" to="/russian_kitchen">
            Russische Küche
          </Link>
        </li>
        <li>
          <Link className="link" to="/german_kitchen">
            Deutsche Küche
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
