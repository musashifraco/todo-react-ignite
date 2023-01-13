import styles from "./Header.module.css";
import toDoLogo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <p>
        <img src={toDoLogo} alt="" /> to<strong>do</strong>
      </p>
    </header>
  );
}
