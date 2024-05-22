import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CustomButton = ({
  color = "rgba(50, 65, 36, 1)",
  border = 2,
  borderColor = "rgba(159, 133, 70, 1)",
  textColor = "rgba(209, 195, 146, 1)",
  radius = 10,
  onClick = () => {},
  label = "button",
  otherStyle = {},
}) => {
  return (
    <Pressable
      onPress={onClick}
      style={[
        {
          borderWidth: border,
          borderColor: borderColor,
          borderRadius: radius,
          backgroundColor: color,
          height: 56,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        },
        otherStyle,
      ]}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Inter-Medium",
          color: textColor,
          textAlign: "center",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
