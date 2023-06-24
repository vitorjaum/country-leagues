import { ReactNode } from "react";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>{children}</div>
      <footer>
        <h1>Lorem ipsum dolor</h1>
      </footer>
    </>
  );
}
