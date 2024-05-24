import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import TabsIcon from "../UI/icons/TabsIcon";
import { bird } from "../client_data/birds";
import PlayIcon from "../UI/icons/PlayIcon";
import LikeIcon from "../UI/icons/LikeIcon";
import BookIcon from "../UI/icons/BookIcon";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../store/favoriteSlice";
import { Audio } from "expo-av";

const ItemScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  const item = bird.find((i) => i.id === id);
  const [birdsFav] = useSelector(
    (state) => [state.favorite.birdsFav],
    shallowEqual
  );

  const [play, setplay] = useState(false);
  const [handleSound, sethandleSound] = useState(false);

  // useEffect(() => {
  //   const handleSound = async () => {
  //     const { sound } = await Audio.Sound.createAsync(
  //       require("../../assets/test.mp3")
  //     );
  //     if (play === true) {
  //       console.log("play");
  //       await sound.playAsync();
  //     } else {
  //       console.log("stop");
  //       return;
  //     }
  //   };
  //   handleSound();
  // }, [play]);
  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);
  async function loadSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(item.sound);
    setSound(sound);
  }
  async function playSound() {
    if (!sound) {
      await loadSound();
    }
    console.log(await sound.getStatusAsync());
    if (!isPlaying) {
      console.log("Playing Sound");
      await sound.playAsync();
    } else {
      await sound.stopAsync();
    }
    setIsPlaying((prev) => !prev);
  }
  React.useEffect(() => {
    loadSound();
  }, []);
  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

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
      <Image source={item.img} style={{ width: width, height: 250 }} />

      {/* header */}
      <View
        style={{
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
          {item.name}
        </Text>

        <Pressable
          style={{
            height: 44,
            width: 36,
            backgroundColor: "rgba(50, 65, 36, 1)",
            paddingHorizontal: 2,
            paddingVertical: 6,
          }}
        >
          <TabsIcon />
        </Pressable>
      </View>
      {/* header */}

      {/* body */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ScrollView
          style={{
            paddingTop: 5,
            paddingHorizontal: 5,
            width: width - 36,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontFamily: "Inter-Light",
              color: "rgba(209, 195, 146, 1)",
            }}
          >
            {"\t\t\t " + item.desc2}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter-Medium",
              color: "#D1C392",
              marginTop: 12,
              marginBottom: 4,
            }}
          >
            {"\tОписание"}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "Inter-Light",
              color: "rgba(209, 195, 146, 1)",
            }}
          >
            {"\t\t\t " + item.desc3}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter-Medium",
              color: "#D1C392",
              marginTop: 12,
              marginBottom: 4,
            }}
          >
            {"\tМеста обитания"}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "Inter-Light",
              color: "rgba(209, 195, 146, 1)",
            }}
          >
            {"\t\t\t " + item.desc4}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter-Medium",
              color: "#D1C392",
              marginTop: 12,
              marginBottom: 4,
            }}
          >
            {"\tРазмножение"}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "Inter-Light",
              color: "rgba(209, 195, 146, 1)",
            }}
          >
            {"\t\t\t " + item.desc5}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter-Medium",
              color: "#D1C392",
              marginTop: 12,
              marginBottom: 4,
            }}
          >
            {"\tПитание"}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "Inter-Light",
              color: "rgba(209, 195, 146, 1)",
              marginBottom: 20,
            }}
          >
            {"\t\t\t " + item.desc6}
          </Text>
        </ScrollView>

        <View
          style={{
            height: "100%",
            width: 36,
            backgroundColor: "rgba(50, 65, 36, 1)",
            paddingHorizontal: 2,
            paddingVertical: 6,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            gap: 14,
          }}
        >
          <PlayIcon
            onClick={() => {
              setplay(!play);
              playSound();
            }}
            state={play}
          />

          <Pressable
            onPress={() => dispatch(favoriteSlice.actions.addCartItem(item))}
          >
            <LikeIcon fill={birdsFav.find((i) => item.id === i.id)} />
          </Pressable>

          <BookIcon />
        </View>
      </View>
      {/* body */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ItemScreen;
