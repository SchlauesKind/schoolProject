import up_icon from "./up.svg";
import styles from "./up_button.module.css";
import { useHeaderVisibility } from "../../context/HeaderContext";

function UpButton() {
  const { isHeaderVisible } = useHeaderVisibility();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isHeaderVisible) return null;
  else
    return (
      <div className={`${styles.upButton}`} onClick={scrollToTop}>
        <img src={up_icon} alt="Up Icon" className={styles.logo} />
      </div>
    );
}
export default UpButton;
