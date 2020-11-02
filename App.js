import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
} from "react-native";

export default function App() {
  console.log("App executed");

  const handlePress = () => console.log("Text clicked");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} selectable={true} onPress={handlePress}>
        Hello Sushmitha :) Hello Sushmitha :) Hello Sushmitha :) Hello Sushmitha
        :) Hello Sushmitha :) Hello Sushmitha :)
      </Text>
      <TouchableHighlight onPress={() => console.log("Pic on press")}>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={styles.image}
        />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 300,
  },
});
