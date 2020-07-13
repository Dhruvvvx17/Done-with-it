import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";

// using the {route} prop as this screen is registered with a navigator
function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      {/* Product Image */}
      <Image
        style={styles.image}
        uri={listing.images[0].url}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
      />

      {/* Product Info - title & subtitle */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>

        {/* User who posted the product, a generic ListItem View */}
        <View style={styles.userContainer}>
          <ListItem
            title="Dhruv Vohra"
            subTitle="5 Listings"
            image={require("../assets/User.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 10,
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
    marginVertical: 5,
  },
});

export default ListingDetailsScreen;
