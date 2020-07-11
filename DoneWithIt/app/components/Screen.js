import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, View } from "react-native";
import Constants from "expo-constants";

function Screen(props) {
  return (
    <SafeAreaView style={[styles.screen, props.style]}>
      <View style={(styles.view, props.screen)}>{props.children}</View>
      <StatusBar hidden />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
