import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";

import{
useDeviceOrientation,
useDimensions
}from "@react-native-community/hooks"

export default function App() {
  console.log("App executed");
  console.log(Dimensions.get("screen"))

  console.log(useDimensions())
  console.log(useDeviceOrientation())

  const handlePress = () => console.log("Text clicked");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor:"dodgerblue",width:"100%",height:"50%"}}>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingHorizontal: 10,
    // backgroundColor: "green",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Expo.Constants.statusBarHeight
  },
  image: {
    width: 200,
    height: 300,
  },
});
