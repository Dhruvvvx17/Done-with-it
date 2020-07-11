import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage }) {
  // GET PERMISSIONS
  useEffect(() => {
    requestPermission;
  }, []);

  // Requesting Camera roll permissions
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted)
      alert("You need to enable permission to access the library");
  };

  // Function to handle image press
  const handlePress = () => {
    // If no image is selected open library on press
    if (!imageUri) selectImage();
    // Else allow user to delete the pressed image
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(imageUri) },
        { text: "No" },
      ]);
  };

  //  Async function to launch image picker and select an image
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
