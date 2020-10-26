import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import FeedScreen from "../screens/FeedScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Feed"} headerMode="none">
        <Stack.Screen name="Feed" component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
