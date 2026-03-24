import styles from "./credits.module.css";

function Credits() {
  return (
    <div className={styles.creditsBody}>
      <h1 className={styles.creditsHeader}>Credits</h1>
      <ul>
        <li>
          Website developed by Roman Fedorov and contributors as a school
          project.
        </li>
        <li>
          This website is for educational purposes only and does not represent
          the official views of Goethe Gymnasium Dortmund. All content is
          provided "as is" without any warranties.
        </li>
      </ul>
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
        <li>
          Kitchen pages were made by my contributors and incerted via iframe.
        </li>
      </ul>
      <h1>Contact</h1>
      <ul>
        <li>
          My GitHub repo:{" "}
          <a
            className="link"
            target="_blank"
            href="https://github.com/SchlauesKind/goethe-kocht.de"
          >
            https://github.com/SchlauesKind/goethe-kocht.de
          </a>
        </li>
        <li>
          My last hosting:{" "}
          <a
            className="link"
            target="_blank"
            href="https://goethe-kocht-de.vercel.app/#/"
          >
            https://goethe-kocht-de.vercel.app
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Credits;
