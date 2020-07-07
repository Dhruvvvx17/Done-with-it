import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";

import colors from "../config/colors";

function ListItem(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.image} />
      <View>
        <AppText style={styles.title}>{props.title}</AppText>
        <AppText style={styles.subTitle}>{props.subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
    marginRight: 10,
  },

  subTitle: {
    color: colors.medium,
  },

  title: {
    fontWeight: "bold",
  },
});

export default ListItem;
