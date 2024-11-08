import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar, Button } from "react-native-paper";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.index}>
        <View style={styles.input}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={"daw"}
          />
        </View>

        <View style={styles.toplevelUnits}>
          <View style={styles.unit}>
            <Text>Meat</Text>
          </View>
          <View style={styles.unit}>
            <Text>Fish and Seafood</Text>
          </View>
          <View style={styles.unit}>
            <Text>Vegetables and Side Dishes</Text>
          </View>
          <View style={styles.unit}>
            <Text>Desserts</Text>
          </View>
          <View style={styles.unit}>
            <Text>Bakery</Text>
          </View>
          <View style={styles.unit}>
            <Text>Beverages</Text>
          </View>
          <View style={styles.unit}>
            <Text>Vegetables and Side Dishes</Text>
          </View>
          <View style={styles.unit}>
            <Text>Desserts</Text>
          </View>
          <View style={styles.unit}>
            <Text>Bakery</Text>
          </View>
        </View>
        <View style={styles.openCamera}>
          <Button
            icon="camera"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Press me
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  index: {
    flex: 1,
    paddingHorizontal: 20,
  },
  openCamera: {
    flex: 0.1,
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "red",
    marginBottom: 40,
  },
  input: {
    flex: 0.2,
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "green",
    marginTop: 40,
  },
  toplevelUnits: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
    width: "100%",
    // backgroundColor: "yellow",
  },
  unit: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: "30%",
    backgroundColor: "#e8e8e8",
    borderRadius: 10,
    minWidth: 0,
  },
});