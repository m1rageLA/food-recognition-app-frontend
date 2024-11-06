import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, Avatar } from "react-native-paper";
import DailyMacrosStats from "@/components/DailyMacrosStats";

export default function HomeScreen() {
  return (
    <View style={styles.index}>
      <Appbar.Header>
        <Appbar.Content title="Hello Tymur" />
        <Avatar.Image
          size={24}
          source={require("../../assets/images/favicon.png")}
        />
      </Appbar.Header>
      <DailyMacrosStats />
    </View>
  );
}

const styles = StyleSheet.create({
  index: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 25,
  },
});
