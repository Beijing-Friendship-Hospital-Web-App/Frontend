"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./QuestionnaireInput.module.css";

// type has values {"text" (default), "tf", 'checkbox', "number", "multichoice"}
function QuestionnaireInput({
  id,
  label,
  placeholder,
  type,
  data,
  formErrors,
  setFormValues,
  showErrors,
}: any) {
  const [selectedTf, setSelectedTf]: [string, any] = useState("");

  if (type === "checkbox") {
    return (
      <div>
        <label>{label}</label>
        {data.map((item: string) => (
          <div className="form-check" key={item}>
            <input
              className={`form-check-input`}
              type="checkbox"
              value={item}
              id={item}
            />
            <label className="form-check-label" htmlFor={item}>
              {item}
            </label>
          </div>
        ))}
      </div>
    );
  }

  if (type === "tf") {
    const formTfHasError = showErrors && !formErrors?.[id]?.has;
    const formTfTextHasError = showErrors && !formErrors?.[id]?.description;
    console.log(formTfHasError, formTfTextHasError);
    return (
      <>
        <div className="form-group">
          <label htmlFor={id}>{label}</label>
          <select
            className={`form-control ${formTfHasError && styles["form-error"]}`}
            id={id}
            value={selectedTf}
            onChange={(event) => {
              setSelectedTf(event.target.value);
              setFormValues((prev: any) => {
                let newValue = { ...prev };
                newValue[id] = {
                  type: "tf",
                  data: {
                    has: event.target.value,
                    description: "",
                  },
                };
                return newValue;
              });
            }}
          >
            <option disabled value="">
              请选择
            </option>
            <option value="yes">是</option>
            <option value="no">否</option>
          </select>
        </div>
        {selectedTf == "yes" && (
          <div className="form-group">
            <textarea
              className={`form-control ${formTfTextHasError && "form-error"}`}
              id={id + "_remark"}
              rows={5}
              placeholder="请解释"
              onChange={(event) => {
                setFormValues((prev: any) => {
                  let newValue = { ...prev };
                  newValue[id].data.description = event.target.value;
                  return newValue;
                });
              }}
            ></textarea>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        className="form-control"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

export default QuestionnaireInput;
