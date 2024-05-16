import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Layout from "../layout/Layout";
import { profileSlice } from "../store/profileSlice";
import CustomButton from "../UI/CustomButton";
import CustomTextInput from "../UI/CustomTextInput";

const AuthAuth = ({ navigation }) => {
  const [name, email, password] = useSelector(
    (state) => [
      state.profile.name,
      state.profile.email,
      state.profile.password,
    ],
    shallowEqual
  );
  const dispatch = useDispatch();

  return (
    <Layout>
      <View
        style={{
          backgroundColor: "rgba(23, 19, 7, 1)",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          borderTopRightRadius: 50,
        }}
      >
        {/* header */}
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderTopWidth: 2,
            borderRightWidth: 2,
            borderColor: "rgba(159, 133, 70, 1)",
            height: 51,
            borderTopRightRadius: 50,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: "Inter-Medium",
              color: "rgba(209, 195, 146, 1)",
              textAlign: "center",
              marginTop: 13,
              marginLeft: 5,
            }}
          >
            Войти в аккаунт
          </Text>

          <View
            style={{
              backgroundColor: "rgba(50, 65, 36, 1)",
              width: 64,
              height: 51,
              borderTopRightRadius: 50,
            }}
          />
        </View>
        {/* header */}

        {/* body */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            width: "100%",
            borderTopWidth: 2,
            borderColor: "rgba(159, 133, 70, 1)",
            paddingTop: 30,
            paddingBottom: 18,
            paddingHorizontal: 5,
          }}
        >
          <CustomTextInput
            label="Email"
            placeholder="Ваш email"
            onChange={(val) =>
              dispatch(
                profileSlice.actions.editProfileInfo({
                  name: name,
                  password: password,
                  email: val.nativeEvent.text,
                })
              )
            }
            value={email}
          />
          <CustomTextInput
            label="Пароль"
            placeholder="Ваш пароль"
            passwordtype
            onChange={(val) =>
              dispatch(
                profileSlice.actions.editProfileInfo({
                  name: name,
                  password: val.nativeEvent.text,
                  email: email,
                })
              )
            }
            value={password}
          />

          <CustomButton
            label="Подтвердить"
            border={0}
            otherStyle={{ marginTop: 5, marginBottom: 12 }}
            onClick={() => {
              navigation.navigate("Tabs");
            }}
          />

          <Pressable
            onPress={() => {
              navigation.navigate("AuthRegister");
              dispatch(
                profileSlice.actions.editProfileInfo({
                  name: "",
                  password: "",
                  email: "",
                })
              );
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter-Regular",
                color: "rgba(209, 195, 146, 1)",
                textAlign: "center",
                textDecorationLine: "underline",
              }}
            >
              Регистрация
            </Text>
          </Pressable>
        </View>
        {/* body */}
      </View>
    </Layout>
  );
};

export default AuthAuth;
