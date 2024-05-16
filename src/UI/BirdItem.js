import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const BirdItem = ({
  item = {},
  width,
  onClick = () => console.log("click"),
}) => {
  return (
    <Pressable
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 11,
        width: "100%",
        flex: 1,
        backgroundColor: "rgba(36, 30, 13, 1)",
        paddingHorizontal: 5,
        paddingVertical: 16,
      }}
      onPress={onClick}
    >
      <Image
        source={item.img}
        width={140}
        height={100}
        style={{ width: 140, height: 100 }}
      />

      <View style={{ display: "flex", flexDirection: "column" }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Inter-Medium",
            color: "rgba(209, 195, 146, 1)",
            lineHeight: 20,
            marginLeft: 11,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontFamily: "Inter-Regular",
            color: "rgba(209, 195, 146, 1)",
            lineHeight: 12.5,
            marginLeft: 11,
            backgroundColor: "rgba(50, 65, 36, 1)",
            paddingVertical: 1,
            paddingHorizontal: 7,
            borderRadius: 10,
            alignSelf: "flex-start",
            marginTop: 2,
            marginBottom: 4,
          }}
        >
          {item.type}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Inter-Medium",
            color: "rgba(209, 195, 146, 1)",
            lineHeight: 15.6,
            flexWrap: "wrap",
            width: width - 42 - 16 - 107 - 8,
          }}
        >
          {item.desc}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default BirdItem;
