import React from "react";
import { Field, ErrorMessage } from "formik";
import FromTextError from "./FromTextError";

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label className="text-3xl flex mb-2 mt-2" htmlFor={name}>
        {label}
      </label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={FromTextError} />
    </div>
  );
}

export default Select;
