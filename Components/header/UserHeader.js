import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import UserProfilePicture from "../../asset/images/summer.jpg";
import { Ionicons } from "@expo/vector-icons";

const UserHeader = () => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
      }}
    >
      <TouchableOpacity>
        <Image
          source={UserProfilePicture}
          resizeMode="cover"
          style={{
            width: 50,
            height: 50,
            borderRadius: 10,
          }}
        />
      </TouchableOpacity>
      <Ionicons name="ios-notifications-outline" size={24} color="red" />
    </View>
  );
};

export default UserHeader;
