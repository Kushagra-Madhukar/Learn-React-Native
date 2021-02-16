import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

const Stack = createStackNavigator();

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Hello Surld!</Text>
    <Text>Awesome!</Text>
    <Button
      onPress={() => navigation.navigate("About")} //or use push(push keeps on pushing in the stack without checking it that page is already in stack, navigate go back if that page is present in stack)
      title="Go to about Page"
    />
  </View>
);

const About = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Hello Surld!</Text>
    <Text>Awesome!</Text>
    <Button
      onPress={() => navigation.navigate("Home")} //or use push (same)
      title="Go to Home Page"
    />
    <Button title="Go back" onPress={() => navigation.goBack()} />
    <Button
      title="Feedback page"
      onPress={() =>
        navigation.navigate("Feedback", {
          itemId: 86,
          otherParam:
            "This feedback is coming from about page, passed down as param", //Passing down the params
        })
      }
    />
  </View>
);

const Feedback = ({ navigation, route }) => {
  //We will access params by route.params

  const { itemId, otherParam } = route.params;
  return (
    <View style={styles.container}>
      <Text>Hello Feedback!</Text>
      <Text>Awesome!</Text>
      <Button
        onPress={() => navigation.popToTop()} //Goes to the the first page on stack
        title="Go to Home Page"
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text>{JSON.stringify(otherParam)}</Text>
      <Text>{JSON.stringify(itemId)}</Text>
    </View>
  );
};

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [fontloaded, setFontloaded] = useState(false);

  if (fontloaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Overview" }}
          />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Feedback" component={Feedback} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontloaded(true)}
        // onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
