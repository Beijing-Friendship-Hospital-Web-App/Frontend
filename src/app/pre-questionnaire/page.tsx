import QuestionnaireWrapper from "@/components/QuestionnaireWrapper";
import styles from "./page.module.css";

function page() {
  return (
    <div className={styles.wrapper}>
      <h1>前科问卷</h1>
      <QuestionnaireWrapper>
        <div className="form-group">
          <label htmlFor="q1">年龄</label>
          <input
            type="number"
            className="form-control"
            id="q1"
            placeholder=""
          />
        </div>

        <div className="form-group">
          <label htmlFor="q2">是否有高血压/家族史</label>
          <select className="form-control" id="q2">
            <option disabled selected>
              请选择
            </option>
            <option>是</option>
            <option>否</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="q3">是否有糖尿病/家族史</label>
          <select className="form-control" id="q3">
            <option disabled selected>
              请选择
            </option>
            <option>是</option>
            <option>否</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="q3">是否有过肺结核</label>
          <select className="form-control" id="q3">
            <option disabled selected>
              请选择
            </option>
            <option>是</option>
            <option>否</option>
          </select>
        </div>

        <button
          type="submit"
          className={`btn btn-primary ${styles["submit-btn"]}`}
        >
          提交问卷
        </button>
      </QuestionnaireWrapper>
    </div>
  );
}

export default page;
