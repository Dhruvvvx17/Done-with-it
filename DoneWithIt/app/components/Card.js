import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={props.image} />
      <AppText style={styles.title}> {props.title} </AppText>
      <AppText style={styles.subTitle}> {props.subTitle} </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 200,
  },

  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },

  title: {
    marginBottom: 7,
  },
});

export default Card;
