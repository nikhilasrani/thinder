import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";
import { Button, Card, Rating, Icon } from "react-native-elements";
import Swipe from "../components/Swipe";
import * as actions from "../actions";

class DeckScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Restaurants",
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="cake" size={30} color={tintColor} />;
    }
  };
  renderCard(restaurant) {
    const initialRegion = {
      longitude: parseInt(restaurant.restaurant.location.longitude),
      latitude: parseInt(restaurant.restaurant.location.latitude),
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };
    return (
      <Card
        title={restaurant.restaurant.name}
        containerStyle={styles.cardStyle}
      >
        <View>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: restaurant.restaurant.thumb }}
          />
        </View>
        <View style={styles.detailWrapper}>
          <Text>{restaurant.restaurant.location.locality}</Text>
          <Text>{restaurant.restaurant.location.city}</Text>
          <View>
            <Rating
              imageSize={10}
              readonly
              startingValue={parseInt(
                restaurant.restaurant.user_rating.aggregate_rating
              )}
            />
            <Text>{restaurant.restaurant.user_rating.aggregate_rating}/5</Text>
          </View>
        </View>
      </Card>
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card title="No More Restaurants" containerStyle={styles.cardStyle}>
        <Text>
          Pan around and search other areas for more nearby restaurants!
        </Text>
        <Button
          title="Back to the Map"
          icon={{ name: "my-location", color: "white" }}
          buttonStyle={{ backgroundColor: "#f55" }}
          onPress={() => this.props.navigation.navigate("map")}
        />
        <Button
          title="Go to Saved Restaurants Screen"
          icon={{ name: "favorite", color: "white" }}
          buttonStyle={{ backgroundColor: "#f55", marginTop: 10 }}
          onPress={() => this.props.navigation.navigate("review")}
        />
      </Card>
    );
  };
  render() {
    return (
      <View style={{ marginTop: 25 }}>
        <Swipe
          data={this.props.restaurants}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={restaurant => this.props.likeRestaurant(restaurant)}
        />
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10
  },
  image: {
    height: 260,
    borderRadius: 8
  },
  cardStyle: {
    borderRadius: 8
  }
};

function mapStateToProps({ restaurants }) {
  return { restaurants: restaurants.nearby_restaurants };
}
export default connect(
  mapStateToProps,
  actions
)(DeckScreen);
