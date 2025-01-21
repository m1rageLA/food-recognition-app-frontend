import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  Appbar,
  Avatar,
  Button,
  Divider,
  IconButton,
  Menu,
  PaperProvider,
} from "react-native-paper";
import DailyMacrosStats from "@/components/DailyMacrosStats";
import UploadPhoto from "@/components/UploadPhoto";
import { getFoodList } from "../services/api";

export default function HomeScreen() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [calories, setCalories] = React.useState(2700);
  const [caloriesGoal, setCaloriesGoal] = React.useState(4500);
  const [adviceAI, setAdviceAI] = React.useState(
    `Eat a balanced diet: include more vegetables, fruits, proteins, and whole grains, avoid overeating, and minimize sugar and processed food intake. Drink enough water, follow a regular eating schedule, and avoid late-night snacks.`
  );
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFoodList();
        setData(response[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const refreshData = async () => {
    try {
      setLoading(true);
      console.log("Данные обновляются...");
      const response = await getFoodList();
      setData(response[0]);
    } catch (err) {
      setError(err.message);
      console.error("Ошибка при обновлении данных:", err);
    } finally {
      setLoading(false);
    }
  };
  const { nutrition, foodConsumed, goal } = data || {};
  const totalCalories = nutrition?.calories || 0;
  const fats = nutrition?.fats || 0;
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <View style={styles.index}>
        <Appbar.Header style={styles.appbarHeader}>
          <Appbar.Content title="AnyMeal" titleStyle={{ color: "white" }} />

          <View
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: 50,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Menu
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <IconButton
                  icon="dots-vertical"  // Иконка для кнопки меню
                  iconColor="white"
                  size={30}
                  style={{marginTop: "-35px"}}
                  onPress={openMenu}
                />
              }
            >
              <Menu.Item onPress={() => {}} title="Set goal" />
              <Divider />
              <Menu.Item onPress={() => {}} title="Log out" />
            </Menu>
          </View>

          <UploadPhoto />
        </Appbar.Header>
        <View style={styles.header}>
          <Text style={styles.title}>Today</Text>
          <Text style={styles.calories}>{totalCalories} cal</Text>
          <Text style={styles.caloriesGoal}>/ {caloriesGoal} goal</Text>
        </View>
        <ScrollView style={styles.container}>
          <Text style={styles.textOfSection}>Stats</Text>
          <DailyMacrosStats
            proteins={nutrition?.proteins || 0}
            carbs={nutrition?.carbohydrates || 0}
            fat={nutrition?.fats || 0}
          />
          <Text style={styles.textOfSection}>AI advice</Text>

          <ScrollView
            contentContainerStyle={styles.scrollContent}
            style={styles.infoBox}
          >
            <Text style={styles.textAdvice}>{adviceAI}</Text>
          </ScrollView>
          <Button
            icon="refresh"
            mode="contained"
            buttonColor="#89BD71"
            style={{ marginTop: 50 }}
            onPress={refreshData}
          >
            Refresh
          </Button>
        </ScrollView>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  index: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    paddingHorizontal: 30,
  },
  appbarHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "#89BD71",
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: "100%",
    backgroundColor: "#89BD71",
  },
  infoBox: {
    width: "100%",
    height: 150,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  textAdvice: {
    fontSize: 15,
  },
  calories: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
  },
  caloriesGoal: {
    fontSize: 18,
    color: "#ededed",
    fontWeight: "400",
  },
  textOfSection: {
    marginTop: 30,
    fontSize: 20,
    color: "#2e2e2e",
    fontWeight: "500",
    marginLeft: 10,
    marginBottom: 20,
  },
});
