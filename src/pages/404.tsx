import Link from "next/link";
import styles from "../styles/404.module.css";

export default function Custom404() {
  return (
    <div className={styles.message_container}>
      <h1 className="">Page not found</h1>
      <h2>
        <Link href={"/"}>Back to homepage</Link>
      </h2>
    </div>
  );
}
