import { useEffect } from "react";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

import expoPushTokensApi from "../api/expoPushTokens";
import navigation from "../navigation/rootNavigation";

export default useNotifications = () => {
  useEffect(() => {
    registerForPushNotifications();

    Notifications.addListener((notification) => {
      console.log(notification);
      navigation.navigate("Account");
    });
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      // once permission received
      const token = await Notifications.getExpoPushTokenAsync();
      console.log("PUSH NOTIFICATION TOKEN: ", token);
      // Send the token to server to associate it with the logged in users account
      // using the api created in api folder, expoPushTokens file
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};
