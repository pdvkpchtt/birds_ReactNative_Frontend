import React from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Layout from "../layout/Layout";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import CustomButton from "../UI/CustomButton";
import CrossIcon from "../UI/icons/CrossIcon";

const Result = ({ route, navigation }) => {
  const { width } = useWindowDimensions();
  const { results } = route.params;
  console.log(results);
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
          Результат квиза
        </Text>

        <Pressable
          style={{
            height: 44,
            width: 36,
            backgroundColor: "rgba(50, 65, 36, 1)",
            paddingHorizontal: 6,
            paddingVertical: 9,
          }}
          onPress={() => navigation.navigate("Quiz")}
        >
          <CrossIcon />
        </Pressable>
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
          backgroundColor: "#241E0D",
          paddingHorizontal: 3,
        }}
      >
        <Image
          source={require("../../assets/bg2.png")}
          style={{
            position: "absolute",
            top: 24,
            width: width,
            height: "70%",
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Inter-SemiBold",
            color: "rgba(209, 195, 146, 1)",
            textAlign: "center",
            position: "absolute",
            bottom: 48,
          }}
        >
          {"Правильных ответов " +
            results.reduce((total, x) => (x === true ? total + 1 : total), 0) +
            "/" +
            results.length}
        </Text>

        <View
          style={{
            position: "absolute",
            width: "100%",
            bottom: 0,
            borderBottomWidth: 1,
            borderColor: "#9F8546",
          }}
        />
      </View>
    </View>
  );
};

export default Result;
