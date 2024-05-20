import { Pressable, Text, useWindowDimensions, View } from "react-native";
import QuizIcon from "../UI/icons/QuizIcon";
import DataIcon from "../UI/icons/DataIcon";
import ProfileIcon from "../UI/icons/ProfileIcon";

const CustomTabBar = ({
  state: { index: activeIndex, routes },
  navigation,
}) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: 70,
        paddingBottom: 6,
        backgroundColor: "rgba(23, 19, 7, 1)",
        elevation: 0,
      }}
    >
      {routes.map((route, key) => (
        <Pressable
          key={key}
          onPress={() => navigation.navigate(route.name)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginHorizontal: 20,
          }}
        >
          {route.name === "Quiz" && (
            <>
              <QuizIcon
                stroke={
                  activeIndex === key
                    ? "rgba(209, 195, 146, 1)"
                    : "rgba(159, 133, 70, 1)"
                }
              />
              <Text
                style={{
                  color:
                    activeIndex === key
                      ? "rgba(209, 195, 146, 1)"
                      : "rgba(159, 133, 70, 1)",
                  fontFamily: "Inter-Regular",
                  fontSize: 14,
                  lineHeight: 17.5,
                }}
              >
                Квиз
              </Text>
            </>
          )}
          {route.name === "DataStack" && (
            <>
              <DataIcon
                stroke={
                  activeIndex === key
                    ? "rgba(209, 195, 146, 1)"
                    : "rgba(159, 133, 70, 1)"
                }
              />
              <Text
                style={{
                  color:
                    activeIndex === key
                      ? "rgba(209, 195, 146, 1)"
                      : "rgba(159, 133, 70, 1)",
                  fontFamily: "Inter-Regular",
                  fontSize: 14,
                  lineHeight: 17.5,
                }}
              >
                Справочник
              </Text>
            </>
          )}
          {route.name === "ProfileStack" && (
            <>
              <ProfileIcon
                stroke={
                  activeIndex === key
                    ? "rgba(209, 195, 146, 1)"
                    : "rgba(159, 133, 70, 1)"
                }
              />
              <Text
                style={{
                  color:
                    activeIndex === key
                      ? "rgba(209, 195, 146, 1)"
                      : "rgba(159, 133, 70, 1)",
                  fontFamily: "Inter-Regular",
                  fontSize: 14,
                  lineHeight: 17.5,
                }}
              >
                Профиль
              </Text>
            </>
          )}
        </Pressable>
      ))}
    </View>
  );
};

export default CustomTabBar;
