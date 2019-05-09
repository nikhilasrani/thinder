import React, { Component } from "react";
import { View, Text, Platform, ScrollView, Image, Linking } from "react-native";
import { Card, Button } from "react-native-elements";
import { connect } from "react-redux";

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Saved Restaurants",
    headerRight: (
      <Button
        icon={{ name: "settings" }}
        onPress={() => navigation.navigate("settings")}
        buttonStyle={{ backgroundColor: "#fff" }}
      />
    )
  });

  renderLikedRestaurants() {
    return this.props.likedRestaurants.map(restaurant => {
      return (
        <Card title={restaurant.restaurant.name} key={restaurant.restaurant.id}>
          <View style={{ height: 330 }}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: restaurant.restaurant.featured_image }}
            />
            <View style={styles.detailWrapper}>
              <View>
                <Text style={styles.italics}>
                  {restaurant.restaurant.cuisines}
                </Text>
              </View>
              <View>
                <Text style={styles.italics}>
                  {restaurant.restaurant.location.locality_verbose}
                </Text>
              </View>
            </View>
            <Button
              title="View on Zomato"
              buttonStyle={{ backgroundColor: "#f55" }}
              onPress={() => Linking.openURL(restaurant.restaurant.deeplink)}
            />
          </View>
        </Card>
      );
    });
  }
  render() {
    return <ScrollView>{this.renderLikedRestaurants()}</ScrollView>;
  }
}

const styles = {
  detailWrapper: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  italics: {
    fontStyle: "italic"
  },
  image: {
    height: 260
  }
};

function mapStateToProps(state) {
  return { likedRestaurants: state.likedRestaurants };
}

export default connect(mapStateToProps)(ReviewScreen);
