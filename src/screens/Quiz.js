import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../layout/Layout";
import CustomButton from "../UI/CustomButton";

const Quiz = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(23, 19, 7, 1)",
      }}
    >
      <View
        style={{
          paddingTop: 40,
          borderBottomWidth: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderColor: "rgba(159, 133, 70, 1)",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Inter-Medium",
            color: "rgba(209, 195, 146, 1)",
            textAlign: "center",
            lineHeight: 31.2,
            marginBottom: 7,
            marginLeft: 5,
          }}
        >
          Квиз
        </Text>

        <View
          style={{
            height: 44,
            width: 36,
            backgroundColor: "rgba(50, 65, 36, 1)",
          }}
        />
      </View>

      <View
        style={{
          width: "100%",
          flex: 1,
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
          label="Начать квиз"
          color="rgba(50, 65, 36, 1)"
          // onClick={() => navigation.navigate("AuthAuth")}
          border={0}
        />
        <CustomButton
          border={0}
          color="rgba(50, 65, 36, 1)"
          label="Просмотреть результаты"
        />
      </View>
    </View>
  );
};

export default Quiz;
