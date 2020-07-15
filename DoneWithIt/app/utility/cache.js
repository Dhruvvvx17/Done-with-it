import { AsyncStorage } from "react-native";
import dayjs from "dayjs";

const prefix = "cache";
const expiryInMinutes = 5;

// Function to store a key-value pair in the asyncStorage.
// Function automatically inserts a timestamp along with the data being set as the value.
const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

// Function comparing the timestamp of the item with the current time and declaring is valid or invalid.
const isExpired = (item) => {
  const now = dayjs();
  const storedTime = dayjs(item.timestamp);
  const isExpired = now.diff(storedTime, "minute") > expiryInMinutes;
  return isExpired;
};

// Function to fetch the value corresponding to the given key.
// Handles 3 scenarios -
// If the item is not present, if the item has expired, if the item is present and not expired
const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    // case-1: Item not present
    if (!item) {
      console.log("Requested item does not exist in cache", item);
      return null;
    }

    // case-2: Item present but expired
    if (isExpired(item)) {
      console.log("Requested item exists but is expired", item);
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    // case-3: Valid item
    console.log("Requested item exists in cache", item);
    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default { store, get };
