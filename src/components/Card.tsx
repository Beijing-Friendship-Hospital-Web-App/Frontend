import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";

function Card({ title, link }: any) {
  return (
    <Link className={styles["wrapper"]} href={link}>
      <h1 className={styles["title"]}>{title}</h1>
    </Link>
  );
}

export default Card;
