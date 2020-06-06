import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Icon } from "react-native-elements";
import MapScreen from "../screens/MapScreen";
import DeckScreen from "../screens/DeckScreen";
import ReviewScreen from "../screens/ReviewScreen";
import SettingsScreen from "../screens/SettingsScreen";
import OnboardingScreen from "../screens/OnboardingScreen";

const AppNavigator = createBottomTabNavigator(
  {
    welcome: { screen: OnboardingScreen },
    main: {
      screen: createBottomTabNavigator(
        {
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: { screen: ReviewScreen },
          settings: { screen: SettingsScreen },
        },
        {
          tabBarOptions: { activeBackgroundColor: "#f55", activeTintColor: "#fff", style: { height: 50 }, tabStyle: { borderRadius: 5 } },
        }
      ),
    },
  },
  {
    defaultNavigationOptions: {
      tabBarVisible: false,
    },
    lazy: true,
  }
);
AppNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;
};
const AppContainer = createAppContainer(AppNavigator);

class AppNavigation extends Component {
  render() {
    return <AppContainer screenProps={this.props} />;
  }
}

export default connect(null, actions)(AppNavigation);
