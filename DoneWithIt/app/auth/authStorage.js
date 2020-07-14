import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    const authToken = await SecureStore.getItemAsync(key);
    return authToken;
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  if (token) return jwtDecode(token);
  return null;
};

export default { getUser, getToken, removeToken, storeToken };
