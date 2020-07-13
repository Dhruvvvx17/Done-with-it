import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (newUri) => {
    console.log(newUri);
    setFieldValue(name, [...imageUris, newUri]); //this is equivalent to appending the new image uri to the imageUris array.
  };

  const handleRemove = (delUri) => {
    console.log(delUri);
    setFieldValue(
      name,
      imageUris.filter((currentUri) => currentUri !== delUri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
