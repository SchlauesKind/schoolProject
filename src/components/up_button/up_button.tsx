import up_icon from "./up.svg";
import styles from "./up_button.module.css";

function UpButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`${styles.upButton}`} onClick={scrollToTop}>
      <img src={up_icon} alt="Up Icon" className={styles.logo} />
    </div>
  );
}
export default UpButton;
