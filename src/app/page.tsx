"use client";

import "bootstrap/dist/css/bootstrap.css";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [gettingCode, setGettingCode] = useState(false);

  const router = useRouter();

  return (
    <main className={styles.main}>
      <h1>请登录</h1>
      <div className={`form-group ${styles["form-group"]}`}>
        <label htmlFor="exampleFormControlInput1">姓名</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="姓名"
        />
      </div>

      <div className={`form-group ${styles["form-group"]}`}>
        <label htmlFor="exampleFormControlInput1">手机号码</label>
        <div className={styles["code-input"]}>
          <input
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="手机号码"
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
          />
          <button
            type="button"
            className={`btn btn-secondary btn-sm ${styles["code-btn"]}`}
            onClick={() => {
              setGettingCode(true);
            }}
          >
            {!gettingCode ? "获取验证码" : "已发送"}
          </button>
        </div>
      </div>

      {gettingCode && (
        <div className={`form-group ${styles["form-group"]}`}>
          <input type="text" className="form-control" placeholder="验证码" />
        </div>
      )}

      <button
        type="button"
        className={`btn ${gettingCode ? "btn-primary" : "btn-secondary"} ${
          styles["submit-btn"]
        }`}
        disabled={!gettingCode}
        onClick={() => {
          router.push("/dashboard");
        }}
      >
        登陆
      </button>
    </main>
  );
}
