import React from "react";
import { StyleSheet } from "react-native";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.conatiner}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {/* Custom field for name input*/}
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
          textContentType="name"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyBoardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />

        {/* Custom field for password input*/}
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        />

        {/*Custom submit button */}
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    padding: 10,
  },
});

export default RegisterScreen;
