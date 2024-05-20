import React from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import SearchIcon from "../UI/icons/SearchIcon";

import BirdItem from "../UI/BirdItem";
import { shallowEqual, useSelector } from "react-redux";

const Favorites = ({ navigation }) => {
  const { width } = useWindowDimensions();

  const [birdsFav] = useSelector(
    (state) => [state.favorite.birdsFav],
    shallowEqual
  );

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
          alignItems: "flex-end",
          borderColor: "rgba(159, 133, 70, 1)",
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
          Избранное
        </Text>

        <Pressable
          style={{
            height: 44,
            width: 36,
            backgroundColor: "rgba(50, 65, 36, 1)",
            paddingHorizontal: 2,
            paddingVertical: 6,
          }}
          onPress={() => navigation.navigate("FavSearch")}
        >
          <SearchIcon />
        </Pressable>
      </View>

      <View
        style={{
          width: width,
          flex: 1,
        }}
      >
        <FlatList
          data={birdsFav}
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
              Пусто...
            </Text>
          )}
          overScrollMode="never"
        />
      </View>
    </View>
  );
};

export default Favorites;
