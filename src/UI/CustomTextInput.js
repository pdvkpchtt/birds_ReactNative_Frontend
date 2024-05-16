import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import EyeIcon from "./icons/EyeIcon";

const CustomTextInput = ({
  value = "",
  onChange = () => {},
  placeholder = "placeholder",
  label = "label",
  passwordtype = false,
}) => {
  const [showpass, setshowpass] = useState(false);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 6,
      }}
    >
      <Text
        style={{
          color: "rgba(209, 195, 146, 1)",
          fontSize: 14,
          lineHeight: 17.5,
          fontFamily: "Inter-Regular",
        }}
      >
        {label}
      </Text>

      <View
        style={{
          backgroundColor: "red",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgba(250, 233, 187, 1)",
          borderRadius: 10,
          height: 56,
        }}
      >
        <TextInput
          secureTextEntry={!showpass && passwordtype}
          placeholder={placeholder}
          placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
          style={{
            fontSize: 16,
            fontFamily: "Inter-Regular",
            flex: 1,
            paddingVertical: 18,
            paddingHorizontal: 16,
          }}
          value={value}
          onChange={onChange}
        />
        {passwordtype && (
          <Pressable
            onPress={() => setshowpass(!showpass)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 16,
            }}
          >
            <EyeIcon crossed={showpass} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomTextInput;
