import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#D16BA5", "#86A8E7", "#5FFBF1"]}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("./assets/phone_blue.png")}
        />
        <Text style={styles.LoginHeading}>Login</Text>
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            value={email}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            value={password}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Go</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Haven't registered yet ?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },

  image: { width: "50px", height: "50px", marginBottom: "1em" },

  inputView: {
    backgroundColor: "#FFC0CB",
    backgroundColor: "transparent",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    placeholderTextColor: "#CD7F32",
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: "grey",
    marginTop: "1em",
  },

  loginBtn: {
    width: "25%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#727472",
  },
  LoginHeading: {
    color: "white",
    fontSize: "2em",
    marginBottom: "1em",
  },
  loginText: {
    color: "white",
    fontSize: "1.3em",
  },
});
