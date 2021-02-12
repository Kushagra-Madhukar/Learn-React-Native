import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  // const [state, setstate] = useState(initialState);
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoals = () => {
    setEnteredGoal((enteredgol) => [
      ...enteredgol,
      {
        id: Math.random().toString(),
        value: enteredGoal,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text>Hello Surld!</Text>
      <Text>Awesome!</Text>
      {/* <View
        style={{
          padding: 30,
        }}
      >
        <TextInput
          placeholder="Goal"
          style={{
            borderColor: "black",
            borderWdidth: 1,
          }}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />{" "}
        <Button title="ADD" onPress={addGoals} />{" "}
        <FlatList keyExtractor={(item, index) => item.id} data={} />{" "}
      </View>{" "} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
