import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FromikControl from "./FromikControl";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <div className="flex justify-center align-middle items-center w-screen h-screen">
            <Form>
              <FromikControl
                className="border-2 border-black px-10 py-2 text-black flex"
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FromikControl
                className="border-2 border-black px-10 py-2 text-black flex"
                control="input"
                type="password"
                label="Password"
                name="password"
              />
              <button
                type="submit"
                disabled={!formik.isValid}
                className="mt-4 text-2xl px-3 py-2 bg-blue-400 text-white rounded-2xl"
              >
                Submit
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
