import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button, Card } from "react-native-elements";
import { connect } from "react-redux";
import * as actions from "../actions";

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header:{ title: "Application Settings"}
  });
  render() {
    return (
      <View>
        <Card>
          <Text>
            Once you click on the below button, the saved restaurants will be
            permanently lost.
          </Text>
          <Button
            title="Reset Liked Restaurants"
            buttonStyle={{ backgroundColor: "#F55", marginTop: 10 }}
            icon={{ name: "delete-forever", color: "white" }}
            onPress={() => {
              this.props.clearLikedRestaurants();
              this.props.navigation.navigate("review");
            }}
          />
        </Card>
      </View>
    );
  }
}

export default connect(
  null,
  actions
)(SettingsScreen);
