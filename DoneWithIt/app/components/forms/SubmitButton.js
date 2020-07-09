import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({ title }) {
  // get handleSubmit function from formikContext()
  // the context will refer to the formik context of the consumer component
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
