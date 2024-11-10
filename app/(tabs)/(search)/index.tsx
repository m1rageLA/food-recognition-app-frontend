import { Href, Link, router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Searchbar, Button } from "react-native-paper";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handlePress = (value: string) => {
    router.push(`./(unit)/${value}2`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.index}>
        <View style={styles.input}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>

        <View style={styles.toplevelUnits}>
          <TouchableOpacity
            style={styles.unit}
            onPress={() => {
              handlePress("meat");
            }}
          >
            <Text>Meat</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.unit}
            onPress={() => {
              handlePress("fish");
            }}
          >
            <Text>Seafood</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.unit}
            onPress={() => {
              handlePress("vegetables");
            }}
          >
            <Text>Vegetables</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.unit}
            onPress={() => {
              handlePress("fruits");
            }}
          >
            <Text>Fruits</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.unit}
            onPress={() => {
              handlePress("grains");
            }}
          >
            <Text>Grains</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.unit}
            onPress={() => {
              handlePress("dairy");
            }}
          >
            <Text>Dairy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.unit}
            onPress={() => {
              handlePress("bakery");
            }}
          >
            <Text>Bakery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.unit}
            onPress={() => {
              handlePress("snacks");
            }}
          >
            <Text>Snacks</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.unit}
            onPress={() => {
              handlePress("beverages");
            }}
          >
            <Text>Beverages</Text>
          </TouchableOpacity>
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
  unitLink: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
});
