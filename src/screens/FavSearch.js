import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import SearchIcon from "../UI/icons/SearchIcon";
import BirdItem from "../UI/BirdItem";
import { shallowEqual, useSelector } from "react-redux";

const regs = [
  "Синицевые",
  "Воробьиные",
  "Голубиные",
  "Пеночковые",
  "Вьюрковые",
  "Мухоловковые",
  "Кукушковые",
];

const FavSearch = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const [birdsFav] = useSelector(
    (state) => [state.favorite.birdsFav],
    shallowEqual
  );
  const [state, setstate] = useState(birdsFav);
  const [input, setinput] = useState("");
  const [filt, setfilt] = useState("");

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
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder={"Поиск"}
          placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
          style={{
            fontSize: 16,
            fontFamily: "Inter-Regular",
            flex: 1,
            borderRadius: 10,
            paddingVertical: 7,
            paddingHorizontal: 16,
            height: 34,
            backgroundColor: "rgba(250, 233, 187, 1)",
            marginLeft: 6,
            marginRight: 6,
          }}
          value={input}
          onChange={(val) => {
            setinput(val.nativeEvent.text);
            setstate(
              birdsFav.filter(
                (i) =>
                  i.name
                    .toLowerCase()
                    .includes(val.nativeEvent.text.toLowerCase()) &&
                  i.type.includes(filt)
              )
            );
          }}
        />

        <Pressable
          style={{
            height: 44,
            width: 36,
            backgroundColor: "rgba(50, 65, 36, 1)",
            paddingHorizontal: 2,
            paddingVertical: 6,
          }}
        >
          <SearchIcon />
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
          gap: 17,
        }}
      >
        {/* top */}
        <Text
          style={{
            fontSize: 22,
            fontFamily: "Inter-Medium",
            color: "rgba(209, 195, 146, 1)",
            textAlign: "center",
            marginTop: 8,
            marginLeft: 6,
          }}
        >
          Поиск по категории:
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            backgroundColor: "rgba(36, 30, 13, 1)",
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Inter-Medium",
              color: "rgba(209, 195, 146, 1)",
              textAlign: "center",
              marginTop: 8,
              marginLeft: 6,
            }}
          >
            Семейство:
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              paddingBottom: 10,
              paddingHorizontal: 6,
            }}
          >
            {regs.map((item, key) => (
              <Pressable
                key={key}
                onPress={() => {
                  if (filt === item) {
                    setfilt("");
                    setinput("");
                    setstate(birdsFav);
                  } else {
                    setfilt(item);
                    setinput("");
                    setstate(
                      birdsFav.filter(
                        (i) =>
                          i.name.toLowerCase().includes("") &&
                          i.type.includes(item)
                      )
                    );
                  }
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Inter-Regular",
                    color: "rgba(209, 195, 146, 1)",
                    lineHeight: 12.5,
                    backgroundColor: "rgba(50, 65, 36, 1)",
                    paddingTop: 4,
                    paddingBottom: 2,
                    paddingHorizontal: 9,
                    borderRadius: 10,
                    alignSelf: "flex-start",
                    marginRight: 4,
                    marginBottom: 4,
                    borderWidth: 1,
                    borderColor:
                      filt === item
                        ? "rgba(209, 195, 146, 1)"
                        : "rgba(50, 65, 36, 1)",
                  }}
                >
                  {item}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
        {/* top */}

        <View
          style={{
            width: width,
            flex: 1,
          }}
        >
          <FlatList
            data={state}
            renderItem={({ item, index }) => (
              <BirdItem
                item={item}
                width={width}
                onClick={() => navigation.navigate("Item1", { id: item.id })}
              />
            )}
            contentContainerStyle={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            ListEmptyComponent={() => (
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Inter-Medium",
                  color: "rgba(209, 195, 146, 1)",
                  textAlign: "center",
                  marginTop: 24,
                }}
              >
                Ничего не найдено...
              </Text>
            )}
            overScrollMode="never"
          />
        </View>
      </View>
    </View>
  );
};

export default FavSearch;
