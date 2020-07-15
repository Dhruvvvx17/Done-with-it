import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  Button,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { AppLoading } from "expo";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreens from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import Screen from "./app/components/Screen";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/authStorage";
import { navigationRef } from "./app/navigation/rootNavigation";

export default function App() {
  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  // return <ListingDetailsScreen />;
  // return <MessagesScreen />;
  // return <AccountScreen />;
  // return <ListingScreens />;
  // return <LoginScreen />;
  // return <RegisterScreen />;
  // return <ListingEditScreen />;

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  // function to get the userAuth token from secure store
  // (for the case where user has logged in and the app restarts, preserving user login details)
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      // using the app loading module of expo to extend the splash screen time,
      // until the appropriate UI view is ready
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme} ref={navigationRef}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
