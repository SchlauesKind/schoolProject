import styles from "./footer.module.css";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Goethe Gymnasium Dortmund. Website
        developed by Roma Fyodorov and{" "}
        <Link className="link" to="/credits">
          contributors
        </Link>{" "}
        as a school project.
      </p>
      <p>
        This website is for educational purposes only and does not represent the
        official views of Goethe Gymnasium Dortmund. All content is provided "as
        is" without any warranties.
      </p>
    </footer>
  );
}

export default FooterComponent;
