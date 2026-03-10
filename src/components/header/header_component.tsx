import goethe_logo from "./goethe_logo.jpg";
import cook_icon from "./start_to_cook.png";
import home_icon from "./home_icon.svg";
import styles from "./header_styles.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function HeaderComponent() {
  /* Consts for the falling menu */
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.flexContainer}>
        <Link to="/" className={styles.item}>
          <img src={home_icon} alt="Home Icon" className={styles.logo} />
        </Link>
        <div className={`${styles.menuButton} ${styles.item} `}>
          <img
            src={cook_icon}
            alt="Cook Icon"
            className={styles.logo}
            onClick={toggleMenu}
          ></img>
          {/* Kitchen menu itself */}
          {isOpen && (
            <div className={styles.menuContainer}>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
              </ul>
            </div>
          )}
        </div>
        <a
          href="https://www.goethegymnasiumdortmund.de"
          className={styles.item}
          target="_blank"
        >
          <img src={goethe_logo} alt="Goethe Logo" className={styles.logo} />
        </a>
      </div>
    </header>
  );
}

export default HeaderComponent;
