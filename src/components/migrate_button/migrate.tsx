import { useEffect, useState } from "react";
import styles from "./migrate.module.css";
import me_icon from "./mini_icon.svg";

function MigratePlate() {
  const myHost = "goethe-kocht-de.vercel.app";
  const isMyhost = window.location.hostname === myHost;
  const myURL = `https://${myHost}/`;
  if (isMyhost) {
    return null;
  }

  const [viewMode, setViewMode] = useState<"full" | "mini">(() => {
    // This function acts only the first time
    const savedState = sessionStorage.getItem("viewMode");
    return savedState === "mini" ? "mini" : "full";
  });

  const handleMinimize = () => {
    setViewMode("mini");
    sessionStorage.setItem("viewMode", "mini");
  };

  useEffect(() => {
    const savedState = sessionStorage.getItem("viewMode");
    if (savedState === "mini") {
      setViewMode("mini");
    } else {
      setViewMode("full");
    }
  }, []);

  return (
    <div className={viewMode === "mini" ? "mini" : "full"}>
      {viewMode === "mini" ? (
        /* minimalized view */
        <a className={styles.redirectButton} href={myURL}>
          <img className={styles.redirectIcon} src={me_icon} alt="ME" />
        </a>
      ) : (
        /* expanded view */
        <div className={styles.banner}>
          <div className={styles.plateContainer}>
            <div>
              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "30px",
                  color: "#585858",
                }}
              >
                Diese Seite kann veraltet sein.
              </h1>
              <p style={{ fontSize: "18px", fontWeight: "650", color: "#777" }}>
                Diese Webseite ist statisch und in ihrer Entwicklung
                eingefroren. Wechseln Sie zu der aktuellsten Seite um den
                neusten Kochbuch zu erleben. Beim klicken auf "Akzeptieren"
                werden Sie automatisch zur neuen Seite weitergeleitet.
              </p>
            </div>
            <div className={styles.buttonContainer}>
              <a
                className={`${styles.migrateButton} ${styles.button}`}
                href={myURL}
              >
                Akzeptieren
              </a>
              <div
                onClick={handleMinimize}
                className={`${styles.stayButton} ${styles.button}`}
              >
                Ablehnen
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default MigratePlate;
