// src/components/SetLanguage.js
import React, { useState } from "react";
import { Button, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from "expo-updates";
import i18n from "../localization/i18nConfig";
import Loader from "./Loader";

const SetLanguage = ({ onLanguageChange }) => {
  const [loading, setLoading] = useState(false);

  const changeLanguage = async (lng) => {
    setLoading(true);
    await i18n.changeLanguage(lng);
    await AsyncStorage.setItem("appLanguage", lng);
    await Updates.reloadAsync();
    if (onLanguageChange) {
      onLanguageChange(); // Call the parent function if provided
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader /> // Show loader if loading is true
      ) : (
        <>
          <Button
            title="Switch to English"
            onPress={() => changeLanguage("en")}
          />
          <Button
            title="Switch to Hindi"
            onPress={() => changeLanguage("hi")}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 20,
  },
});

export default SetLanguage;
