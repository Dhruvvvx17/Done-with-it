import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Switch } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/lists/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreens from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  // return <ListingDetailsScreen />;
  // return <MessagesScreen />;
  // return <AccountScreen />;
  // return <ListingScreens />;
  // return <LoginScreen />;
  // return <RegisterScreen />;
  return <ListingEditScreen />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
