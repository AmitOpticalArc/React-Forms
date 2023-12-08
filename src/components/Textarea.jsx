import React from 'react'
import {Field, ErrorMessage} from 'formik'
import FromTextError from './FromTextError';

function Textarea(props) {
    const {label, name, ...rest } = props
  return (
    <div>
      <label className="text-3xl flex mb-2 mt-2" htmlFor="{name}">
        {label}
      </label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={FromTextError} />
    </div>
  );
}

export default Textarea