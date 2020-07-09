import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "../AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../../config/colors";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {/* Icon or Image */}
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}

          {/* title and subTitle */}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },

  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
  },

  subTitle: {
    color: colors.medium,
  },

  title: {
    fontWeight: "bold",
  },
});

export default ListItem;
