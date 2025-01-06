import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Appbar, Avatar } from "react-native-paper";

// Тестовые данные для страницы
const mealData = [
  { name: "Strawberries", cals: 42 },
  { name: "Milk: Low Fat", cals: 71 },
  { name: "Oatmeal", cals: 116 },
  { name: "Hot Tea", cals: 2 },
];

// БЖУ
const macrosData = {
  carbs: 251,
  protein: 74,
  fat: 30,
};

export default function Explore() {
  const totalCalories = mealData.reduce((sum, item) => sum + item.cals, 0); // Сумма калорий

  return (
    <View style={styles.index}>
      <Appbar.Header style={styles.appbarHeader}>
        <Appbar.Content title="Hello Lila" titleStyle={{ color: "white" }} />
        <Avatar.Image
          size={40}
          source={require("../../assets/images/woman.jpg")}
        />
      </Appbar.Header>

      <View style={styles.header}>
        <Text style={styles.title}>Today</Text>
        <Text style={styles.totalCalories}>{totalCalories} cal</Text>
        <Text style={styles.caloriesGoal}>/ 4500 goal</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.sectionTitle}>Breakfast</Text>
        {mealData.map((item, index) => (
          <View key={index} style={styles.foodItem}>
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.foodCals}>{item.cals} cal</Text>
          </View>
        ))}
        <Text style={styles.sectionTitle}>Lunch</Text>
        {mealData.map((item, index) => (
          <View key={index} style={styles.foodItem}>
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.foodCals}>{item.cals} cal</Text>
          </View>
        ))}
        <Text style={styles.sectionTitle}>Dinner</Text>
        {mealData.map((item, index) => (
          <View key={index} style={styles.foodItem}>
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.foodCals}>{item.cals} cal</Text>
          </View>
        ))}

        <View style={styles.macrosContainer}>
          <View style={styles.macroItem}>
            <Text style={styles.macroLabel}>Carbs</Text>
            <Text style={styles.macroValue}>{macrosData.carbs} g</Text>
          </View>
          <View style={styles.macroItem}>
            <Text style={styles.macroLabel}>Protein</Text>
            <Text style={styles.macroValue}>{macrosData.protein} g</Text>
          </View>
          <View style={styles.macroItem}>
            <Text style={styles.macroLabel}>Fat</Text>
            <Text style={styles.macroValue}>{macrosData.fat} g</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  index: {
    flex: 1,
    backgroundColor: "white",
  },
  appbarHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "#89BD71",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#89BD71",
    paddingVertical: 40,
  },
  caloriesGoal: {
    fontSize: 18,
    color: "#ededed",
    fontWeight: "400",
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  totalCalories: {
    fontSize: 48,
    color: "white",
    fontWeight: "bold",
  },
  container: {
    padding: 20,
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
  },
  foodItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  foodName: {
    fontSize: 18,
    color: "#333",
  },
  foodCals: {
    fontSize: 18,
    fontWeight: "bold",
  },
  macrosContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  macroItem: {
    alignItems: "center",
  },
  macroLabel: {
    fontSize: 16,
    color: "#555",
  },
  macroValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
