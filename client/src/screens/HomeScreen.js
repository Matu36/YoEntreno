import React from "react";
import { View, StyleSheet } from "react-native";
import LoginScreen from "./LoginScreen";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
