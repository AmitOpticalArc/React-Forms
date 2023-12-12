import React from "react";
import { Field, ErrorMessage } from "formik";
import FromTextError from "./FromTextError";

function RadioButton(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label className="text-3xl flex mt-4">{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label className="text-xl text-orange-500 font-bold px-4" htmlFor={option.value}>
                  {option.key}
                </label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={FromTextError} />
    </div>
  );
}

export default RadioButton;
