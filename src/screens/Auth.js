import React from "react";
import { StyleSheet, View } from "react-native";
import Layout from "../layout/Layout";
import CustomButton from "../UI/CustomButton";

const Auth = ({ navigation }) => {
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 3,
          gap: 17,
        }}
      >
        <CustomButton
          label="Вход"
          color="rgba(23, 19, 7, 1)"
          otherStyle={{ marginTop: "13%" }}
          onClick={() => navigation.navigate("AuthAuth")}
        />
        <CustomButton
          label="Регистрация"
          onClick={() => navigation.navigate("AuthRegister")}
        />
      </View>
    </Layout>
  );
};

export default Auth;
