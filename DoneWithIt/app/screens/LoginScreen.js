import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.conatiner}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      {/* App form is a custom component and uses formik
        The actual form is a child of this AppForm component
        which is accessed though props in the implementation of AppForm component
        */}
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {/* Custom field for email input*/}
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
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    padding: 10,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;

{
  /* The form is passed as a JSX object to this function. 
The function takes formik objects as arguments. 
To pass arguments down to child component, 
simply call the useFormikContext and destructre the required components from it. */
}
