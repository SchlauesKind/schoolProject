import { Link } from "react-router-dom";
import styles from "./home.module.css";
import flag_data from "../kitchen/kitchen_data.json";

function HomePage() {
  return (
    <div className={styles.homePageBody}>
      <h2 style={{ margin: "10px auto", width: "fit-content"}}>Entdecken Sie unsere verschiedenen Küchen:</h2>
      <div className={styles.gridContainer}>
        {flag_data.map((kitchen) => (
          <Link
            key={kitchen.id}
            to={`/kitchen/${kitchen.path}/index.html`}
            className={styles.gridCard}
          >
            <img
              src={`${import.meta.env.BASE_URL}flags/${kitchen["flag-file-name"]}`}
              alt={kitchen.title}
              className={styles.flagImg}
            />
            <h3>{kitchen.title}</h3>
            <p>{kitchen.description}</p>
          </Link>
        ))}
      </div>
      
    </div>
  );
}

export default HomePage;
