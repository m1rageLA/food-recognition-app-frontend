import React from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

interface DailyMacrosStatsProps {
  proteins: number;
  carbs: number;
  fat: number;
}

const DailyMacrosStats: React.FC<DailyMacrosStatsProps> = ({
  proteins,
  carbs,
  fat,
}) => {
  return (
    <View>
      <View style={styles.statistics}>
        <View style={styles.childStatistics}>
          <View
            style={{
              height: `${carbs}%`,
              backgroundColor: "#89d381",
              ...styles.childStatistics__text,
            }}
          >
            <Text>Carbs</Text>
          </View>
        </View>
        <View style={styles.childStatistics}>
          <View
            style={{
              height: `${proteins}%`,
              backgroundColor: "#F7A2BD",
              ...styles.childStatistics__text,
            }}
          >
            <Text>Proteins</Text>
          </View>
        </View>
        <View style={styles.childStatistics}>
          <View
            style={{
              height: `${fat}%`,
              backgroundColor: "#FFD978",
              ...styles.childStatistics__text,
            }}
          >
            <Text>Fat</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DailyMacrosStats;

const styles = StyleSheet.create({
  childStatistics__text: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 18,
  },
  value: {
    width: "100%",
    backgroundColor: "red",
  },

  statistics: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 180,

  },
  childStatistics: {
    overflow: "hidden",
    width: "30%",
    height: "100%", // Additional styling for the child
    backgroundColor: "#e8e8e8",
    borderRadius: 30,
    display: "flex",
    justifyContent: "flex-end",
  },
});
