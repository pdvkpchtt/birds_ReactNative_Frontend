import React, { useState } from "react";
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
// import { test } from "../client_data/test";
import CustomButton from "../UI/CustomButton";
import CrossIcon from "../UI/icons/CrossIcon";

const Test = ({ navigation }) => {
  const { width } = useWindowDimensions();

  const [test, setTest] = useState([
    {
      id: 0,
      img: require("../../assets/testbird1.png"),
      question: "К какому виду принадлежит птица на изображении?",
      answers: [
        { id: 0, text: "Большая синица", right: true },
        { id: 1, text: "Домовый воробей", right: false },
        { id: 2, text: "Московка", right: false },
      ],
      answered: null,
    },
    {
      id: 1,
      img: require("../../assets/testbird2.png"),
      question: "Где, как правило, строит свое гнездо пеночка?",
      answers: [
        { id: 0, text: "На дереве", right: false },
        { id: 1, text: "На земле", right: true },
        { id: 2, text: "На воде", right: false },
      ],
      answered: null,
    },
    {
      id: 2,
      img: require("../../assets/testbird3.png"),
      question: "К какому виду принадлежит птица на изображении?",
      answers: [
        { id: 0, text: "Домовый воробей", right: false },
        { id: 1, text: "Зарянка", right: false },
        { id: 2, text: "Зяблик", right: true },
      ],
      answered: null,
    },
    {
      id: 3,
      img: require("../../assets/testbird4.png"),
      question: "К какому семейству принадлежит птица на изображении?",
      answers: [
        { id: 0, text: "Мухоловковые", right: true },
        { id: 1, text: "Вьюрковые", right: false },
        { id: 2, text: "Пеночковые", right: false },
      ],
      answered: null,
    },
    {
      id: 4,
      img: require("../../assets/testbird5.png"),
      question: "К какому виду принадлежит птица на изображении?",
      answers: [
        { id: 0, text: "Ястреб-перепелятник", right: false },
        { id: 1, text: "Обыкновенная кукушка", right: true },
        { id: 2, text: "Козодой", right: false },
      ],
      answered: null,
    },
    {
      id: 5,
      img: require("../../assets/testbird6.png"),
      question: "К какому отряду принадлежит птица на изображении?",
      answers: [
        { id: 0, text: "Воробьинообразные", right: true },
        { id: 1, text: "Попугаеобразные", right: false },
        { id: 2, text: "Синицеобразные", right: false },
      ],
      answered: null,
    },
    {
      id: 6,
      img: require("../../assets/testbird7.png"),
      question: "К какому семейству принадлежит птица на изображении?",
      answers: [
        { id: 0, text: "Снегиревые", right: true },
        { id: 1, text: "Вьюрковые", right: true },
        { id: 2, text: "Воробьиные", right: false },
      ],
      answered: null,
    },
    {
      id: 7,
      img: require("../../assets/testbird8.png"),
      question: "К какому виду принадлежит птица на изображении?",
      answers: [
        { id: 0, text: "Странствующий дрозд", right: false },
        { id: 1, text: "Белоголовый дятел", right: false },
        { id: 2, text: "Большой пёстрый дятел", right: true },
      ],
      answered: null,
    },
  ]);
  const [count, setCount] = useState(0);

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
          Вопрос №{count + 1}
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
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Inter-Regular",
            color: "#D1C392",
            paddingHorizontal: 5,
            marginTop: 17,
            marginBottom: 17,
          }}
        >
          {"\t\t\t " + test[count].question}
        </Text>

        <Image source={test[count].img} style={{ height: "40%", width: 376 }} />
        <View
          style={{
            width: width,
            borderTopWidth: 1,
            borderColor: "#9F8546",
            marginTop: 8,
            marginBottom: 15,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Inter-SemiBold",
            color: "#D1C392",
            textAlign: "center",
            width: width,
            marginBottom: 14,
          }}
        >
          {test[count].answered === null
            ? ""
            : test[count].answered.right === true
            ? "Правильно!"
            : "Неверно!"}
        </Text>

        {test[count].answers.map((i, key) => (
          <CustomButton
            key={key}
            label={i.text}
            otherStyle={{
              paddingHorizontal: 5,
              marginBottom: 20,
            }}
            color="rgba(50, 65, 36, 1)"
            onClick={() => {
              if (test[count].answered !== null) return;

              let newarr = test.map((j, index) =>
                index === count ? { ...j, answered: i } : { ...j }
              );
              setTest(newarr);
              console.log(newarr);
              setTimeout(() => {
                if (count < 7) setCount(count + 1);
                else {
                  let resArr = newarr.map((j, index) => j.answered.right);
                  navigation.navigate("Result", { results: resArr });
                }
              }, 2000);
            }}
            textColor={
              test[count].answered?.text !== i.text ? "#9F8546" : "#D1C392"
            }
            border={test[count].answered?.text !== i.text ? 0 : 2}
          />
        ))}

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

export default Test;
