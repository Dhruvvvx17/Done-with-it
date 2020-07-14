import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  // using the authContext from app/auth/context
  const { logIn } = useAuth();
  // state variables to keep check of login state
  const [loginFailed, setloginFailed] = useState(false);

  // call to auth api
  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);

    // if auth failed, show error message
    if (!result.ok) return setloginFailed(true);

    // if auth successful, set user in the auth context
    setloginFailed(false);

    // setting the user details on persistent storage and react custom authcontext
    // code for which is in useAuth() hook in auth folder
    logIn(result.data);
  };

  return (
    <Screen style={styles.conatiner}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      {/* App form is a custom component and uses formik
        The actual form is a child of this AppForm component
        which is accessed though props in the implementation of AppForm component
        */}
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {/* Error on unsuccessful login */}
        <ErrorMessage
          error="Invalid email and/or password"
          visible={loginFailed}
        />
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
