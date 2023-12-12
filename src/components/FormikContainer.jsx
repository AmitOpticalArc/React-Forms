import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FromikControl from "./FromikControl";

function FormikContainer() {
  const dropdownOptions = [
    { key: "Select an Option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  const radioOptions = [
    { key: "Option 1", value: "rOption1" },
    { key: "Option 2", value: "rOption2" },
    { key: "Option 3", value: "rOption3" },
  ];
  const checkboxOptions = [
    { key: "Option 1", value: "cOption1" },
    { key: "Option 2", value: "cOption2" },
    { key: "Option 3", value: "cOption3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOptions: "",
    checkboxOptions: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOptions: Yup.string().required("Required"),
    checkboxOptions: Yup.array().min(1, "Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-500">
        <div className="bg-yellow-200 flex justify-center items-center px-6 py-2 h-screen w-1/3">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <FromikControl
                  className="border-2 border-black px-2 py-2 text-black flex w-full"
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                />
                <FromikControl
                  control="textarea"
                  label="Description"
                  name="description"
                  className="border-2 border-black px-2 py-2 text-black flex w-full"
                />
                <FromikControl
                  control="select"
                  label="Select a Topic"
                  name="selectOption"
                  className="border-2 border-black px-2 py-2 text-black flex w-full"
                  options={dropdownOptions}
                />
                <FromikControl
                  control="radio"
                  label="Radio Topic"
                  name="radioOptions"
                  options={radioOptions}
                />
                <FromikControl
                  control="checkbox"
                  label="Checkbox Topics"
                  name="checkboxOptions"
                  options={checkboxOptions}
                />
                <FromikControl
                  control="date"
                  label="Pick a Date"
                  name="birthDates"
                  className="border-2 border-black px-2 py-2 text-black flex w-full"
                />
                <div className="flex justify-center p-1">
                  <button
                    className="mt-4 text-2xl px-3 py-2 bg-blue-400 text-white rounded-2xl"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default FormikContainer;
