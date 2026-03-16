import goethe_logo from "./goethe_logo.jpg";
import home_icon from "./home_icon.svg";
import styles from "./header_styles.module.css";
import { Link } from "react-router-dom";

import { useEffect, useRef } from "react";
import { useHeaderVisibility } from "../../context/HeaderContext";

function HeaderComponent() {
  const headerRef = useRef(null);
  const { setIsHeaderVisible } = useHeaderVisibility();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeaderVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, [setIsHeaderVisible]);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.flexContainer}>
        <Link to="/" className={styles.item}>
          <img src={home_icon} alt="Home Icon" className={styles.logo} />
        </Link>
        <h1 className={styles.wellcome}>Willkommen auf unserer Seite</h1>
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
