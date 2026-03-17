import { Link } from "react-router-dom";
import styles from "./home.module.css";
import flag_data from "../kitchen/kitchen_data.json";
import UpButton from "../../components/up_button/up_button";

function HomePage() {
  return (
    <div className={styles.homePageBody}>
      <h2 style={{ margin: "auto",padding: "10px 0", width: "fit-content" }}>
        Entdecken Sie unsere verschiedenen Küchen:
      </h2>
      <div className={styles.gridContainer}>
        {flag_data.map((kitchen) => (
          <div className={styles.gridCard}>
            <img
              src={`${import.meta.env.BASE_URL}flags/${kitchen["flag-file-name"]}`}
              alt={kitchen.title}
              className={styles.flagImg}
            />
            <Link key={kitchen.id} to={`/kitchen/${kitchen.path}/index.html`} className={styles.link}>{kitchen.title}</Link>
            <p>{kitchen.description}</p>
          </div>
        ))}
      </div>
      <UpButton />
    </div>
  );
}

export default HomePage;
