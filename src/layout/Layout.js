import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const Layout = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      resizeMode="cover"
      style={styles.image}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
});

export default Layout;
