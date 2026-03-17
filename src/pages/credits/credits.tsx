import styles from "./credits.module.css";

function Credits() {
  return (
    <div className={styles.creditsBody}>
      <h1 className={styles.creditsHeader}>Credits</h1>
      <p>
        Website developed by Roman Fedorov and contributors as a school project.
      </p>
      <p>
        This website is for educational purposes only and does not represent the
        official views of Goethe Gymnasium Dortmund. All content is provided "as
        is" without any warranties.
      </p>
      <h1>Sources</h1>
      <ul>
        <li>
          Country Flags:{" "}
          <a
            className="link"
            target="_blank"
            href="https://commons.wikimedia.org/wiki/Main_Page"
          >
            https://commons.wikimedia.org/wiki/Main_Page
          </a>
        </li>
        <li>
          SVG Icons:{" "}
          <a className="link" target="_blank" href="https://www.svgrepo.com">
            https://www.svgrepo.com
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Credits;
