import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import AppText from "./AppText";
import { useNetInfo } from "@react-native-community/netinfo";

import colors from "../config/colors";
import Constants from "expo-constants";

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  console.log("NETINFO Is internet reachable?:", netInfo.isInternetReachable);
  console.log("NETINFO details:", netInfo.details);

  if (netInfo.type !== "Unknow" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
    elevation: Platform.OS === "android" ? 50 : 0,
  },

  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
