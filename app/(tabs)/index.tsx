import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, Avatar } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View style={styles.index}>
      <Appbar.Header>
        <Appbar.Content title="Title" />
        <Avatar.Image
          size={24}
          source={require("../../assets/images/favicon.png")}
        />
      </Appbar.Header>
      <View style={styles.statistics}>
        <View style={styles.childStatistics}></View>
        <View style={styles.childStatistics}></View>
        <View style={styles.childStatistics}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  index: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 25,
  },
  statistics: {
    display: "flex", 
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 180,
    marginTop: 30
  },
  childStatistics: {
    width: "30%",
    height: "100%", // Additional styling for the child
    backgroundColor: "gray",
    borderRadius: 30
  },
});
