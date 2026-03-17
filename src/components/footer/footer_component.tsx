import styles from "./footer.module.css";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Roman Fedorov and contributors as a
        school project for{" "}
        <a className="link" target="_blank" href="https://www.goethegymnasiumdortmund.de/">
          Goethe Gymnasium Dortmund
        </a>
        .
      </p>
      <p>
        This website is for educational purposes only. All content is provided
        "as is" without any warranties. For more information, please see the{" "}
        <Link className="link" to="/credits">
          Credits
        </Link>{" "}
        page.
      </p>
    </footer>
  );
}

export default FooterComponent;
