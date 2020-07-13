import React from "react";

import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <LottieView
      source={require("../assets/animations/loader.json")}
      loop
      autoPlay
      style={{
        width: 300,
        height: 300,
        alignSelf: "center",
      }}
    />
  );
}

export default ActivityIndicator;
