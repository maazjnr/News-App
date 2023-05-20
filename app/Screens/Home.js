import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link, useRouter } from "expo-router";
import { COLORS, SIZES } from "../../Constants/theme";
import BreakingNews from "../../Components/BreakingNews/BreakingNews";

const Home = () => {
  const router = useRouter();
  return (
    <View
      style={{ backgroundColor: "#ffffff", flex: 1, padding: SIZES.xSmall }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: SIZES.xSmall * 2, fontWeight: "600" }}>
          Breaking news
        </Text>
        <Link
          style={{ color: COLORS.gray, fontSize: SIZES.small * 1.3 }}
          href="../SeeMore/SeeMore"
        >
          See more
        </Link>
      </View>

      <BreakingNews />
    </View>
  );
};

export default Home;
