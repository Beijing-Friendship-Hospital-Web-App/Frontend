import React from "react";
import styles from "./QuestionnaireWrapper.module.css";
import "bootstrap/dist/css/bootstrap.css";

function QuestionnaireWrapper({ children }: any) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default QuestionnaireWrapper;
