import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MapScreen from "../screens/MapScreen";
import DeckScreen from "../screens/DeckScreen";
import ReviewScreen from "../screens/ReviewScreen";
import SettingsScreen from "../screens/SettingsScreen";

const MaterialBottomTabs = createMaterialBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MaterialBottomTabs.Navigator initialRouteName="Map" activeColor="#f0edf6" inactiveColor="#D8D5DD" barStyle={{ backgroundColor: "#f55" }}>
        <MaterialBottomTabs.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: "Map",
            tabBarIcon: ({ color }) => <Ionicons name="ios-compass" color={color} size={26} />,
          }}
        />
        <MaterialBottomTabs.Screen
          name="Deck"
          component={DeckScreen}
          options={{
            tabBarLabel: "Restaurants",
            tabBarIcon: ({ color }) => <Ionicons name="ios-cafe" color={color} size={26} />,
          }}
        />
        <MaterialBottomTabs.Screen
          name="Review"
          component={ReviewScreen}
          options={{
            tabBarLabel: "Saved",
            tabBarIcon: ({ color }) => <Ionicons name="ios-bookmark" color={color} size={26} />,
          }}
        />
        <MaterialBottomTabs.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color }) => <Ionicons name="ios-settings" color={color} size={26} />,
          }}
        />
      </MaterialBottomTabs.Navigator>
    </NavigationContainer>
  );
};

export default connect(null, actions)(AppNavigation);
