import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { Appbar, Avatar, Button } from "react-native-paper";
import DailyMacrosStats from "@/components/DailyMacrosStats";
import UploadPhoto from "@/components/UploadPhoto";
import TextInput from "@/components/Login/TextInput";
import { loginRequest } from "./services/auth";

export default function LoginPage() {
  const [email, setEmail] = React.useState({ value: "" });
  const [password, setPassword] = React.useState({ value: "" });
  const [calories, setCalories] = React.useState(2700);
  const [caloriesGoal, setCaloriesGoal] = React.useState(4500);
  const [adviceAI, setAdviceAI] = React.useState(
    `Eat a balanced diet: include more vegetables, fruits, proteins, and whole grains, avoid overeating, and minimize sugar and processed food intake. Drink enough water, follow a regular eating schedule, and avoid late-night snacks.`
  );

  const handleSignIn = async () => {
    try {
      await loginRequest(email.value, password.value);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <View style={styles.index}>
      <ImageBackground
        source={require("../assets/texture.png")}
        style={[styles.header, { opacity: 1 }]}
        resizeMode="cover"
      >
        <Text style={styles.title}>AnyMeal</Text>
      </ImageBackground>
      <View style={styles.main}>
        <View style={styles.form}>
          <Text style={styles.titleBlack}>Sign in</Text>
          <TextInput
            label="Email"
            returnKeyType="next"
            onChangeText={(text) => setEmail({ value: text })}
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <TextInput
            label="Password"
            returnKeyType="next"
            onChangeText={(text) => setPassword({ value: text })}
            autoCapitalize="none"
            textContentType="password"
            secureTextEntry={true}
            keyboardType="default"
          />

          <Button
            buttonColor="#89BD71"
            style={styles.button}
            icon=""
            mode="contained"
            onPress={handleSignIn}
          >
            Sign in
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  index: {
    flex: 1,
    backgroundColor: "#89BD71",
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

  titleBlack: {
    fontSize: 35,
    color: "#4a4a4a",
    fontWeight: "400",
  },
  title: {
    fontSize: 35,
    color: "white",
    fontWeight: "400",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    width: "100%",
    backgroundColor: "#89BD71", // Fallback color in case texture image isn't loaded
  },
  main: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  form: {
    top: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 50,
  },
  button: {
    marginTop: 30,
    width: "95%",
    height: 40,
  },
});
