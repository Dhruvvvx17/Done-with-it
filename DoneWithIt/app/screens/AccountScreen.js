import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import routes from "../navigation/routes";

const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      {/* First container - Name, email and profile pic */}
      <View style={styles.conatiner}>
        <ListItem
          title="Dhruv Vohra"
          subTitle="dhruv.v405@gmail.com"
          image={require("../assets/User.jpg")}
        />
      </View>

      {/* Second container - menu Items from the array declared above */}
      <View style={styles.conatiner}>
        <FlatList
          // The array including all the menuItems
          data={menuItems}
          // The unique key of every menuItem, title in this case
          keyExtractor={(menuItem) => menuItem.title}
          // The component to render the menu Items, ListItem component in this case
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          // The seperator between the items of a flatlist
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>

      {/* Third container - logout button, does not have to be in a container as single list item only.*/}
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    marginVertical: 20,
  },

  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
