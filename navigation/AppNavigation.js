import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import { Icon } from "react-native-elements";
import AuthScreen from "../screens/AuthScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import MapScreen from "../screens/MapScreen";
import DeckScreen from "../screens/DeckScreen";
import ReviewScreen from "../screens/ReviewScreen";
import SettingsScreen from "../screens/SettingsScreen";

const AppNavigator = createBottomTabNavigator(
  {
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
    main: {
      screen: createBottomTabNavigator({
        map: { screen: MapScreen },
        deck: { screen: DeckScreen },
        review: {
          screen: createStackNavigator({
            review: { screen: ReviewScreen },
            settings: { screen: SettingsScreen }
          }),
          navigationOptions: {
            tabBarLabel: "Saved",
            tabBarIcon: ({ tintColor }) => {
              return <Icon name="favorite" size={30} color={tintColor} />;
            }
          }
        }
      }, {
        tabBarOptions:  { activeBackgroundColor:"#f55",activeTintColor:"#fff", style:{height:50},tabStyle:{borderRadius:5} }
        })
    }
  },
  {
    defaultNavigationOptions: {
      tabBarVisible: false
    },
    lazy: true
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

export default connect(
  null,
  actions
)(AppNavigation);
