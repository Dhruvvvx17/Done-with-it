import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

// Custom components and files
import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

// Api files
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

// Functional Component
function listingScreens({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );

  // calling the loadListings() function once, to get data from backend
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText style={{ alignSelf: "center" }}>
              Couldn't retrive the listings.
            </AppText>
            <AppButton title="Retry" onPress={loadListings}></AppButton>
          </>
        )}
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
});

export default listingScreens;
