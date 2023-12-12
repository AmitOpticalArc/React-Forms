import React from "react";
import { Field, ErrorMessage } from "formik";
import FromTextError from "./FromTextError";

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label className="text-3xl flex mb-2 mt-2">{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label className="text-xl text-orange-600 px-4 font-bold" htmlFor={option.value}>
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

export default CheckboxGroup;
