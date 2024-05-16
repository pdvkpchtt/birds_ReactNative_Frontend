import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../layout/Layout";

const Profile = ({ navigation }) => {
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
          Профиль
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
        <Text
          style={{
            fontSize: 30,
            fontFamily: "Inter-Medium",
            color: "rgba(209, 195, 146, 1)",
            textAlign: "center",
          }}
        >
          Профиля на дизайне нет
        </Text>
      </View>
    </View>
  );
};

export default Profile;
