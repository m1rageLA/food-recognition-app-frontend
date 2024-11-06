import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";

export default function DailyMacrosStats() {
  return (
    <View>
      <View style={styles.statistics}>
        <View style={styles.childStatistics}></View>
        <View style={styles.childStatistics}></View>
        <View style={styles.childStatistics}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statistics: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 180,
    marginTop: 30,
  },
  childStatistics: {
    width: "30%",
    height: "100%", // Additional styling for the child
    backgroundColor: "#e8e8e8",
    borderRadius: 30,
  },
});
