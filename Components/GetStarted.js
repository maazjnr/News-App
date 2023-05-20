import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, SHADOWS, SIZES } from "../Constants/theme";
import { useNavigation } from "expo-router";

const GetStarted = () => {

  const navigation = useNavigation();

  return (
    <ImageBackground
      style={{
        width: "100%",
        height: "100%",

        alignItems: "center",
      }}
      source={require("../asset/images/bg.jpg")}
      resizeMode="cover"
    >
      <View
        style={{
          position: "absolute",
          bottom: SIZES.xLarge,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.lightWhite,
          }}
        >
          Stay Informed from Day One
        </Text>
        
        <TouchableOpacity onPress={() => navigation.navigate("tabNav")} style={styles.getStartedBtn}>
          <Text
            style={{
              color: COLORS.lightWhite,
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            Getting Started
          </Text>
        </TouchableOpacity>
        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  getStartedBtn: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    backgroundColor: COLORS.primary,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.large * 2,
    marginTop: SIZES.small,
    width: SIZES.xxLarge * 10,
  },
});

export default GetStarted;
