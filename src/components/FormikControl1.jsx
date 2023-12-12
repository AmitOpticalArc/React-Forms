// FormikControl.js
import React from "react";
import { useField } from "formik";

const FormikControl1 = ({ control, label, ...rest }) => {
  const [field, meta] = useField(rest);

  switch (control) {
    case "checkbox":
      return (
        <div className="text-3xl flex mb-2 mt-2">
          <label>
            <input type="checkbox" {...field} {...rest} />
            {label}
          </label>
          {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </div>
      );

    case "radio":
      return (
        <div className="text-3xl flex mb-2 mt-2">
          {label}
          <input type="radio" {...field} {...rest} />
          {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </div>
      );

    // Add more cases for other form controls as needed

    default:
      return null;
  }
};

export default FormikControl1;
