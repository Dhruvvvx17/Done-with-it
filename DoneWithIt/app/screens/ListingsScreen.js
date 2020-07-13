import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
<<<<<<< HEAD

// Custom components and files
import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
=======
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
>>>>>>> parent of c1ee2a3... Add Image selection for post. Add stack and tab navigators.

// Api files
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

<<<<<<< HEAD
// Functional Component
function listingScreens({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );

  // calling the loadListings() function once, to get data from backend
  useEffect(() => {
    loadListings();
  }, []);

=======
function listingScreens() {
>>>>>>> parent of c1ee2a3... Add Image selection for post. Add stack and tab navigators.
  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrive the listings.</AppText>
          <AppButton title="Retry" onPress={loadListings}></AppButton>
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
<<<<<<< HEAD
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
=======
            image={item.image}
>>>>>>> parent of c1ee2a3... Add Image selection for post. Add stack and tab navigators.
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default listingScreens;
