import React from "react";
import { Formik } from "formik";

// Simply formik conponent to create a form
// The actual form is passed as a childer prop along with the other required formik properties.
function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
