import { ReactNode } from "react";
import Header from "./Header";
import styles from "../styles/Layout.module.css";
import { Footer } from "./Footer";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Country Leagues</title>
        <link rel="shortcut icon" href="../futIcon.png" />
      </Head>
      <Header />
      <div className={styles.mainContainer}>{children}</div>
      <Footer />
    </>
  );
}
