import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return <WelcomeScreen />;

  // return <ViewImageScreen />;

  // return (
  //   <View style={styles.container}>
  //     <AppButton title="Login" onPress={() => console.log("Tapped!")} />
  //   </View>
  // );

  // return (
  //   <View
  //     style={{
  //       backgroundColor: "#f8f4f4",
  //       padding: 20,
  //       paddingTop: 50,
  //     }}
  //   >
  //     <Card
  //       title="Red jacked for sale"
  //       subtitle="$100"
  //       image={require("./app/assets/jacket.jpg")}
  //     />
  //   </View>
  // );

  // return <ListingDetailsScreen />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
