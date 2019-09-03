import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState(true);
  console.log(outputText);
  return (
    <View style={styles.container}>
      <Text>{outputText === true ? "Hello" : "Goodbye"}</Text>
      <Button
        title="Change Text"
        onPress={() => {
          setOutputText(!outputText);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
