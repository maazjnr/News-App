import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Navigator from "../Navigation/Navigator";

export default function Page() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
