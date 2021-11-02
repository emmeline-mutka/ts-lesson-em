import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Pressable, Button } from 'react-native';

export default function App() {

  const [isPressed, setIsPressed] = useState(false) 
  const [passwordHidden, setPasswordHidden] = useState(true)

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
      <View style={styles.usernamePasswordContainer}>
      <TextInput placeholder={"USERNAME"} style={styles.username}>
      </TextInput>
      <TextInput placeholder={"PASSWORD"} style={styles.password} secureTextEntry={passwordHidden}>
      </TextInput>
      </View>
      <View style={styles.loginContainer}>
        <Pressable onPressIn={() => {setIsPressed(true)}} onPressOut={() => {setIsPressed(false)}}>
        <View style={Object.assign(
          {},
          styles.loginButton, 
          isPressed ? styles.onPressIn : styles.onPressOut)}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </View>
        </Pressable>
        <Button color={"#7209b7"} title="Show password" onPress={()=>setPasswordHidden(!passwordHidden)}></Button>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#45ada8",
  },
  contentContainer: {
    height: "70%",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  usernamePasswordContainer: {
    padding: 15,
    justifyContent: "center",
  },
  username: {
    margin: 15,
    height: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
  },

  password: {
    margin: 15,
    height: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
  },
  loginContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  loginButton: {
    height: 50,
    width: 150,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 20,
  },
  onPressIn: {
    backgroundColor: "#b5179e",
  },
  onPressOut: {
    backgroundColor: "#560bad",
  },
});
