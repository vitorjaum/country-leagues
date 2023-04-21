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
      {children}
      <footer></footer>
    </>
  );
}
