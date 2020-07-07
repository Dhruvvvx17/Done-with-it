import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    //   Screen parent container
    <View style={styles.container}>
      {/* Close Icon */}
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>

      {/* Delete Icon */}
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>

      {/* Image */}
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
    position: "absolute",
    top: 15,
    left: 30,
  },

  deleteIcon: {
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
