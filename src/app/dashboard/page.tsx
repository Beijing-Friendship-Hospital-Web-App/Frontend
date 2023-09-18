import React from "react";
import styles from "./page.module.css";
import Card from "@/components/Card";

function page() {
  return (
    <div>
      <div className={styles["banner-wrapper"]}>
        <h1>图片</h1>
      </div>

      <div>
        <div className={styles["grid"]}>
          <Card title="第一个" link="/pre-questionnaire" />
          <Card title="第二个" link="/post-questionnaire" />
        </div>
        <Card title="第三个" link="/" />
      </div>
    </div>
  );
}

export default page;
