import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, ...otherProps }) {
  // get setFieldTOuched, handleChange, errors and touched objects/functions from formikContext()
  // the context will refer to the formik context of the consumer component
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      {/* error message */}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});

export default AppFormField;
