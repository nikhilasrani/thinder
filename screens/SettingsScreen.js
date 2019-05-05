import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import * as actions from "../actions";

class SettingsScreen extends Component {
  render() {
    return (
      <View>
        <Button
          title="Reset Liked Restaurants"
          buttonStyle={{ backgroundColor: "#F55" }}
          icon={{ name: "delete-forever" }}
          onPress={() => {
            this.props.clearLikedJobs();
            this.props.navigation.navigate("review");
          }}
        />
      </View>
    );
  }
}

export default connect(
  null,
  actions
)(SettingsScreen);
