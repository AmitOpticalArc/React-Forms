import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FromTextError from "./FromTextError";

const initialValues = {
  name: "",
  email: "",
  interest: "",
  password: "",
  comments: "",
  social: {
    facebook: "",
    twitter: "",
  },
};
const onSubmit = (values, onSubmitProps) => {
  console.log("Form data", values);
  console.log('Submit props',onSubmitProps)
  onSubmitProps.setSubmitting(false)
// this is used to reset the form after the subimition
  onSubmitProps.resetForm()
};
// const validate = (values) => {
//   let errors = {};

//   if (!values.name) {
//     errors.name = "Required";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email format";
//   }
//   if (!values.interest) {
//     errors.interest = "Required";
//   }
//   if (!values.password) {
//     errors.password = "Required";
//   }

//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required"),
  interest: Yup.string().required("Required!"),
  password: Yup.string().required("Required!"),
});

function Formss() {
  return (
    <>
      <div className="flex-col md:flex justify-center items-center h-screen bg-gray-500">
        <div className="bg-white flex justify-center px-6 py-2 w-full h-screen lg:w-3/12 lg:h-5/6 sm:w-screen">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              console.log("Formik props", formik);
              return (
                <Form>
                  <div className="flex-col">
                    <label className="text-3xl flex mb-2 mt-2" htmlFor="name">
                      Name:
                    </label>
                    <Field
                      className="border-2 border-black px-10 py-2 text-gray-400 flex"
                      type="text"
                      id="name"
                      name="name"
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}   getFieldProps behind the field provide these props for you.
                      // value={formik.values.name}  boiler plate code for these three fields. these behind the seans will add the props for you
                      // {...formik.getFieldProps("name")} // we pass the name of the form field as is name='name' for this.
                    />
                    {/* {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-800">{formik.errors.name}</div>
                ) : null} */}
                    <ErrorMessage name="name" component={FromTextError} />
                  </div>
                  <div>
                    <label className="text-3xl flex mb-2 mt-2" htmlFor="email">
                      Email:
                    </label>
                    <Field
                      className="border-2 border-black px-10 py-2  text-gray-400 flex"
                      type="email"
                      id="email"
                      name="email"
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      // value={formik.values.email}
                      // {...formik.getFieldProps("email")}
                    />
                    {/* {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-800">{formik.errors.email}</div>
                ) : null} */}
                    <ErrorMessage name="email" component={FromTextError} />
                  </div>
                  <div>
                    <label
                      className="text-3xl flex mb-2 mt-2"
                      htmlFor="password"
                    >
                      Password:
                    </label>
                    <Field
                      className="border-2 border-black px-10 py-2  text-gray-400 flex"
                      type="password"
                      id="password"
                      name="password"
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      // value={formik.values.email}
                      // {...formik.getFieldProps("password")}
                    />
                    {/* {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-800">{formik.errors.password}</div>
                ) : null} */}
                    <ErrorMessage name="password" component={FromTextError} />
                  </div>
                  <div>
                    <label
                      className="text-3xl flex mb-2 mt-2"
                      htmlFor="interest"
                    >
                      Interest:
                    </label>
                    <Field
                      className="border-2 border-black px-10 py-2  text-gray-400 flex"
                      type="text"
                      id="interest"
                      name="interest"
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      // value={formik.values.channel}
                      // {...formik.getFieldProps("interest")}
                    />
                    {/* {formik.touched.interest && formik.errors.interest ? (
                  <div className="text-red-800">{formik.errors.interest}</div>
                ) : null} */}
                    <ErrorMessage name="interest" component={FromTextError} />
                  </div>

                  <div>
                    <label
                      className="text-3xl flex mb-2 mt-2"
                      htmlFor="comments"
                    >
                      Comments
                    </label>
                    <Field
                      as="textarea"
                      id="comments"
                      name="comments"
                      className="border-2 border-black px-10 py-2  text-gray-400 flex"
                    />
                  </div>
                  {/* Nested Objects */}
                  <div>
                    <label
                      className="text-3xl flex mb-2 mt-2"
                      htmlFor="facebook"
                    >
                      FaceBook profile
                    </label>
                    <Field
                      type="text"
                      id="facebook"
                      name="social.facebook"
                      className="border-2 border-black px-10 py-2  text-gray-400 flex"
                    />
                  </div>
                  <div>
                    <label
                      className="text-3xl flex mb-2 mt-2"
                      htmlFor="twitter"
                    >
                      Twitter profile
                    </label>
                    <Field
                      type="text"
                      id="twitter"
                      name="social.twitter"
                      className="border-2 border-black px-10 py-2  text-gray-400 flex"
                    />
                  </div>
                  {/* Nested Objects */}
                  {/* <div className="flex gap-4 justify-center mt-4">
                    <div>
                      <button
                        type="button"
                        className="text-white text-3xl px-6 py-4 bg-blue-800 rounded-3xl mb-4"
                        onClick={() => formik.validateForm()}
                      >
                        Validate all
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="text-white text-3xl px-6 py-4 bg-blue-800 rounded-3xl"
                        onClick={() => formik.setTouched({
                          name:true,
                          email:true,
                          interest:true,
                          password:true,
                          comments:true
                        })}
                      >
                        Visit all
                      </button>
                    </div>
                  </div> */}

                  <div className="flex gap-4 justify-center mt-4">
                    <div>
                      <button
                        className="text-white text-3xl px-6 py-4 bg-blue-800 rounded-3xl"
                        type="submit"
                        // disabled={!(formik.isValid && formik.dirty)}
                        disabled={
                          (!formik.isValid && formik.dirty) ||
                          formik.isSubmitting
                        }
                      >
                        Submit
                      </button>
                    </div>
                    {/* <div>
                      <button
                        type="reset"
                        className="text-white text-3xl px-6 py-4 bg-blue-800 rounded-3xl"
                      >
                        Reset
                      </button>
                    </div> */}
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
        <img
          className="w-screen h-screen md lg:w-3/12 lg:h-5/6 sm:w-screen"
          src="./img/img.jpg"
          alt="image"
        />
      </div>
    </>
  );
}

export default Formss;
