import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 15,
    left: 30,
  },

  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 15,
    right: 30,
  },

  container: {
    backgroundColor: colors.black,
    flex: 1,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
