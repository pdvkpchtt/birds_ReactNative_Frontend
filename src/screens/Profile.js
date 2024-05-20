import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import CustomButton from "../UI/CustomButton";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import AvaIcon from "../UI/icons/AvaIcon";

const Profile = ({ navigation }) => {
  const { width } = useWindowDimensions();

  const [name] = useSelector((state) => [state.profile.name], shallowEqual);

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
          Мой профиль
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
          gap: 17,
        }}
      >
        <View
          style={{
            borderTopWidth: 1,
            paddingHorizontal: 3,
            paddingVertical: 48,
            borderBottomWidth: 1,
            borderColor: "#9F8546",
            backgroundColor: "#241E0D",
            width: "100%",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <AvaIcon />
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Inter-Medium",
                color: "rgba(209, 195, 146, 1)",
                width: width - 3 - 157 - 3,
                marginTop: 30,
              }}
            >
              {name === "" ? "Имя не указано" : name}
            </Text>
          </View>

          <CustomButton
            label="Просмотреть избранное"
            color="rgba(50, 65, 36, 1)"
            otherStyle={{ marginTop: 67 }}
            onClick={() => navigation.navigate("Favorites")}
            border={0}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;
