import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      {/* Product Image */}
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />

      {/* Product Info - title & subtitle */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>

        {/* User who posted the product, a generic ListItem View */}
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/User.jpg")}
            title="Dhruv Vohra"
            subTitle="5 Listings"
          />
        </View>
      </View>
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },

  image: {
    width: "100%",
    height: 250,
  },

  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
  },

  userContainer: {
    marginVertical: 10,
  },
});

export default ListingDetailsScreen;
