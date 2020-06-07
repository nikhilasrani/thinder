import _ from "lodash";
import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import Slides from "../components/Slides";
import { AppLoading } from "expo";

const SLIDE_DATA = [
  { text: "Welcome to Thinder, Swipe left to continue", color: "#03A9F4" },
  {
    text:
      "The word 'thindi' or 'ತಿಂಡಿ' in Kannada means food. Thinder is an app that combines a Tinder-like interface with Zomato's API capabilities to search for restaurants nearby and help you make that food decision much easier.",
    color: "#009688",
  },
  {
    text: "This app authenticates you and persists data using Facebook. Select your location and begin swiping away!",
    color: "#03A9F4",
  },
];

class WelcomeScreen extends Component {
  state = { token: null };

  async componentWillMount() {
    let token = await AsyncStorage.getItem("fb_token");

    if (token) {
      this.props.navigation.navigate("Map");
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }
  onSlidesComplete = () => {
    this.props.navigation.navigate("Auth");
  };
  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }
    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}

export default WelcomeScreen;
