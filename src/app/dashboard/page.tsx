import React from "react";
import styles from "./page.module.css";
import Card from "@/components/Card";
import Image from "next/image";

function page() {
  return (
    <div>
      <div className={styles["banner-wrapper"]}>
        <div className={styles["banner-image-wrapper"]}>
          <Image alt="医院logo图片" src={"/images/pumc_logo.jpg"} fill={true} />
        </div>
      </div>

      <div>
        <div className={styles["grid"]}>
          <Card title="前科问卷" link="/pre-questionnaire" />
          <Card title="后科问卷" link="/post-questionnaire" />
        </div>
        <Card title="不知道是啥问卷" link="/" />
      </div>
    </div>
  );
}

export default page;
