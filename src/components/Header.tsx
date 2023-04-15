import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"} legacyBehavior>
        <a className={styles.title}>
          <h1>Country Leagues</h1>
        </a>
      </Link>
    </header>
  );
}
