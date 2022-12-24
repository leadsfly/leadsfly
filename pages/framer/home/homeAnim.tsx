import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import styles from "./homeAnim.module.scss";

const homeAnim: NextPage = (): JSX.Element => {
  return (
    <div className={`${styles.home} ${styles.container}`}>
      <h2>Welcome to Pizza Joint</h2>
      <Link href="/framer/base">
        <button>Create Your Pizza</button>
      </Link>
    </div>
  );
};

export default homeAnim;
