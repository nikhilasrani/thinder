import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapView from "react-native-maps";
import { connect } from "react-redux";
import { Button, Icon } from "react-native-elements";

import * as actions from "../actions";

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: 77.6,
      latitude: 13,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09,
    },
    location: { coords: { latitude: 13, longitude: 77.6 } },
    locationResult: null,
  };
  componentDidMount() {
    this.setState({ mapLoaded: true });
    this._getLocationAsync();
  }
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied",
        region: location.coords,
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location), location });
  };
  onRegionChangeComplete = (region) => {
    this.setState({ region });
  };

  onButtonPress = () => {
    this.props.fetchRestaurants(this.state.region, () => {
      this.props.navigation.navigate("Deck");
    });
  };

  setCurrentLocationPress = () => {
    this._getLocationAsync();
    let { latitude, longitude } = this.state.location.coords;
    this.setState({
      region: {
        ...this.region,
        latitude,
        longitude,
        longitudeDelta: 0.004,
        latitudeDelta: 0.009,
      },
    });
  };
  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView region={this.state.region} style={{ flex: 1 }} onRegionChangeComplete={this.onRegionChangeComplete} />
        <View style={styles.buttonContainer}>
          <Button
            rounded
            onPress={this.setCurrentLocationPress}
            icon={{ name: "my-location" }}
            buttonStyle={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: "#FFF",
              position: "absolute",
              bottom: 10,
              right: 10,
            }}
          />
          <Button
            rounded
            title="Search This Area"
            buttonStyle={{
              backgroundColor: "#f55",
              marginHorizontal: 20,
            }}
            icon={{ name: "search", color: "white" }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}
const styles = {
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
};
export default connect(null, actions)(MapScreen);
