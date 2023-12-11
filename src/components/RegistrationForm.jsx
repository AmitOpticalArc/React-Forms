import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FromikControl from "./FromikControl";

function RegistrationForm() {
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telephonemoc" },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.string().required("Required"),
    }),
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
              <FromikControl
                className="border-2 border-black px-10 py-2 text-black flex"
                control="input"
                type="password"
                label="Confirm Password"
                name="confirmpassword"
              />
              <FromikControl
                className="border-2 border-black px-10 py-2 text-black flex"
                control="radio"
                label="Mode of Contact"
                name="modeOfContact"
                options={options}
              />
              <FromikControl
                className="border-2 border-black px-10 py-2 text-black flex"
                control="input"
                type="text"
                label="Phone Number"
                name="phone"
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

export default RegistrationForm;
