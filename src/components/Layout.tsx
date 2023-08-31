import { ReactNode } from "react";
import Header from "./Header";
import styles from "../styles/Layout.module.css";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>{children}</div>
      <Footer />
    </>
  );
}
