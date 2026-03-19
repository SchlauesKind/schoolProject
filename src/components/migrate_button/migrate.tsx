import styles from "./migrate.module.css"

function MigratePlate () {

    return (
        <div className={styles.plateContainer}>
            <h1>Diese seite ist nicht der neusten Version!</h1>
            <p>
                Sie verwenden gerade die Webseite, die ihrer Entwicklung und Aktualisierung eingefroren. <br />
                Wechseln Sie zu der aktuellsten Seite um Kochbuch 2.0 zu erleben!
            </p>
            <div className={styles.buttonContainer}>
                <a className={`${styles.migrateButton} ${styles.button}`} href="https://schlaueskind.github.io/goethe-kocht.de/">Akzeptieren</a>
                <div className={`${styles.stayButton} ${styles.button}`}>Ablehnen</div>
            </div>
        </div>
    );
}
export default MigratePlate;

