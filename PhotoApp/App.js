import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/HomeScreen";
import SearchScreen from "./Screens/SearchScreen";
import AddScreen from "./Screens/AddScreen";
import AuthScreen from "./Screens/AuthScreens/AuthScreen";
import LoginScreen from "./Screens/AuthScreens/LoginScreen";
import SignUpScreen from "./Screens/AuthScreens/SignUpScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Add" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
