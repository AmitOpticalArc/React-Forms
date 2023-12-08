import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FromikControl from "./FromikControl";

function FormikContainer() {
  const initialValues = {
    email: "",
    description: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
  });
  const onSubmit = (values) => console.log("Form data", values);
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-500">
        <div className="bg-white flex justify-center px-6 py-2 h-screen w-3/4">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <FromikControl
                  className="border-2 border-black px-10 py-2 text-gray-400 flex"
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                />
                <FromikControl
                  control="textarea"
                  label="Description"
                  name="description"
                  className="border-2 border-black px-10 py-2 text-gray-400 flex"
                />
                <button
                  className="mt-4 text-2xl px-3 py-2 bg-blue-400 text-white rounded-2xl"
                  type="submit"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default FormikContainer;
