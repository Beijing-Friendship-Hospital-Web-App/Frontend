"use client";

import QuestionnaireWrapper from "@/components/QuestionnaireWrapper";
import styles from "./page.module.css";
import QuestionnaireInput from "@/components/QuestionnaireInput";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { networkInterfaces } from "os";

function page() {
  const formRef: any = useRef();

  const [formValues, setFormValues] = useState<any>({});
  const [formErrors, setFormErrors] = useState<any>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    setFormErrors((prevFormErrors: any) => {
      let newFormErrors: any = { ...prevFormErrors };

      for (let questionKey in formValues) {
        // Access the question object
        let question = formValues[questionKey];
        if (question.type == "tf") {
          if (!newFormErrors?.[questionKey]) newFormErrors[questionKey] = {};
          newFormErrors[questionKey]["has"] = question.data["has"] !== "";
          newFormErrors[questionKey]["description"] =
            question.data["description"] !== "" || question.data["has"] == "no";
        }
      }

      return newFormErrors;
    });
  }, [formValues]);

  const validateForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setFormErrors((prevFormErrors: any) => {
      let newFormErrors: any = { ...prevFormErrors };

      for (let questionKey in formValues) {
        // Access the question object
        let question = formValues[questionKey];
        if (question.type == "tf") {
          if (!newFormErrors?.[questionKey]) newFormErrors[questionKey] = {};
          newFormErrors[questionKey]["has"] = question.data["has"] !== "";
          newFormErrors[questionKey]["description"] =
            question.data["description"] !== "" || question.data["has"] == "no";
        }
      }

      return newFormErrors;
    });

    setHasSubmitted(true);
  };

  console.log(formErrors);

  return (
    <form className={styles.wrapper} ref={formRef} onSubmit={validateForm}>
      <h1>前科问卷</h1>
      <QuestionnaireWrapper>
        <div className="form-group">
          <label htmlFor="q1">年龄</label>
          <input
            type="number"
            className={`${"form-control"}`}
            id="q1"
            placeholder=""
          />
        </div>

        <QuestionnaireInput
          type="tf"
          label="是否有高血压/家族史"
          id="q2"
          formErrors={formErrors}
          setFormValues={setFormValues}
          showErrors={hasSubmitted}
        />
        <QuestionnaireInput
          type="tf"
          label="是否有糖尿病/家族史"
          id="q3"
          formErrors={formErrors}
          setFormValues={setFormValues}
          showErrors={hasSubmitted}
        />
        <QuestionnaireInput
          type="tf"
          label="是否有过肺结核"
          id="q4"
          formErrors={formErrors}
          setFormValues={setFormValues}
          showErrors={hasSubmitted}
        />
        <QuestionnaireInput
          type="tf"
          label="是否有过肝功能疾病"
          id="q5"
          formErrors={formErrors}
          setFormValues={setFormValues}
          showErrors={hasSubmitted}
        />
        <QuestionnaireInput
          type="tf"
          label="是否有心脏病"
          id="q6"
          formErrors={formErrors}
          setFormValues={setFormValues}
          showErrors={hasSubmitted}
        />
        <QuestionnaireInput
          type="tf"
          label="是否服用抗酸剂/铁剂"
          id="q7"
          formErrors={formErrors}
          setFormValues={setFormValues}
          showErrors={hasSubmitted}
        />
        <QuestionnaireInput
          type="tf"
          label="是否服用抗心律失常的药物 (Ia/III)"
          id="q8"
          formErrors={formErrors}
          setFormValues={setFormValues}
          showErrors={hasSubmitted}
        />
        <QuestionnaireInput
          type="tf"
          label="是否有精神病史"
          id="q9"
          formErrors={formErrors}
          setFormValues={setFormValues}
          showErrors={hasSubmitted}
        />
        <QuestionnaireInput
          type="tf"
          label="是否服用抗精神病药/三环抗抑郁药物"
          id="q10"
          formErrors={formErrors}
          setFormValues={setFormValues}
          showErrors={hasSubmitted}
        />
        <QuestionnaireInput
          type="tf"
          label="是否有肌腱疾病"
          id="q11"
          formErrors={formErrors}
          setFormValues={setFormValues}
          showErrors={hasSubmitted}
        />
        <QuestionnaireInput
          type="tf"
          label="是否有过移植手术"
          id="q12"
          formErrors={formErrors}
          setFormValues={setFormValues}
          showErrors={hasSubmitted}
        />
        <QuestionnaireInput
          type="tf"
          label="是否有过敏史"
          id="q13"
          formErrors={formErrors}
          setFormValues={setFormValues}
          showErrors={hasSubmitted}
        />
        <QuestionnaireInput
          type="tf"
          label="是否近期输血，献血"
          id="q14"
          formErrors={formErrors}
          setFormValues={setFormValues}
          showErrors={hasSubmitted}
        />
        <QuestionnaireInput
          type="tf"
          label="是否有其他长期服用的药物"
          id="q15"
          formErrors={formErrors}
          setFormValues={setFormValues}
          showErrors={hasSubmitted}
        />
        <QuestionnaireInput
          type="tf"
          label="是否有其他基础以及慢性疾病"
          id="q16"
          formErrors={formErrors}
          setFormValues={setFormValues}
          showErrors={hasSubmitted}
        />
        <QuestionnaireInput type="text" label="其他重大病史" id="q17" />
        <QuestionnaireInput
          type="checkbox"
          label="是否服用一下高血压药物："
          data={[
            "卡托普利",
            "贝那普利",
            "依那普利",
            "雷米普利",
            "赖诺普利",
            "氯沙坦",
            "缬沙坦",
            "厄贝沙坦",
            "替米沙坦",
            "奥美沙坦",
            "坎地沙坦",
            "美托洛尔",
            "比索洛尔",
            "卡维地洛",
            "氨氯地平",
            "硝苯地平",
            "非洛地平",
            "氢氯噻嗪",
            "吲达帕胺",
            "呋赛米",
            // "不服用",
          ]}
          id="q18"
        />
        <QuestionnaireInput
          type="checkbox"
          label="是否服用一下药物："
          data={["螯合剂", "硫糖铝", "去羟肌苷"]}
          id="q19"
        />
        <QuestionnaireInput type="tf" label="是否服用华法林" id="q20" />
        <QuestionnaireInput
          type="checkbox"
          label="是否服用以下抗心律失常药物："
          data={["奎尼丁", "普鲁卡因胺", "胺碘酮", "索他洛尔"]}
          id="q21"
        />
        <QuestionnaireInput
          type="checkbox"
          label="是否服服用以下糖尿病药物："
          data={[
            "优降糖",
            "胰岛素",
            "格列本脲",
            "甲苯黄丁脲",
            "格列呲嗪",
            "瑞格列奈",
            "那格列奈",
            "二双甲胍",
            "阿卡波糖",
            "呲格列酮",
            "罗格列酮",
            "艾塞那肽",
            "利拉鲁肽",
            "阿必鲁肽",
            "度拉糖肽",
            "阿格列汀",
            "西他列汀",
            "沙格列汀",
            "利拉利汀",
            "坎格列嗪",
            "达格列净",
            "恩格列净",
          ]}
          id="q22"
        />
        <QuestionnaireInput
          type="tf"
          label="是否服用其他治疗基础病的药物"
          id="q23"
        />

        <button
          type="submit"
          className={`btn btn-primary ${styles["submit-btn"]}`}
        >
          提交问卷
        </button>
      </QuestionnaireWrapper>
    </form>
  );
}

export default page;
