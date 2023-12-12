// MyForm.js
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl1 from "./FormikControl1";

const MyForm = () => {
  const initialValues = {
    checkbox: false,
    radio: "",
  };

  const validationSchema = Yup.object({
    checkbox: Yup.boolean().oneOf([true], "Checkbox must be checked"),
    radio: Yup.string().required("Please select a radio option"),
  });

  const onSubmit = (values) => {
    // Handle form submission here
    console.log("Form submitted with values:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="flex justify-center align-middle items-center w-screen h-screen">
        <Form>
          <FormikControl1
            className="border-2 border-black px-10 py-2 text-black flex"
            control="checkbox"
            label="Checkbox"
            name="checkbox"
          />

          <FormikControl1
            className="border-2 border-black px-10 py-2 text-black flex"
            control="radio"
            label="Option 1"
            name="radio"
            value="option1"
          />

          <FormikControl1
            className="border-2 border-black px-10 py-2 text-black flex"
            control="radio"
            label="Option 2"
            name="radio"
            value="option2"
          />

          <button
            className="mt-4 text-2xl px-3 py-2 bg-blue-400 text-white rounded-2xl"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default MyForm;
