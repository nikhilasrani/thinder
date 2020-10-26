import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Button, Card, Rating, Icon } from "react-native-elements";

class DeckScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Restaurants",
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="cake" size={30} color={tintColor} />;
    },
  };
  renderCard(restaurant) {
    const initialRegion = {
      longitude: parseInt(restaurant.restaurant.location.longitude),
      latitude: parseInt(restaurant.restaurant.location.latitude),
      latitudeDelta: 0.045,
      longitudeDelta: 0.02,
    };
    return (
      <Card containerStyle={styles.cardStyle}>
        <View>
          <Image style={styles.image} resizeMode="cover" source={{ uri: restaurant.restaurant.featured_image }} />
          <Card containerStyle={styles.innerCardStyle}>
            <View style={[styles.column, { flex: 2, paddingHorizontal: 18 }]}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: "bold", fontSize: 22 }}>
                {restaurant.restaurant.name}
              </Text>
              <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: "lighter", color: "grey" }}>
                {restaurant.restaurant.cuisines}
              </Text>
            </View>
            <View style={styles.detailWrapper}>
              <View style={styles.detailsColumnWrapper}>
                <Rating readonly type="heart" imageSize={25} startingValue={restaurant.restaurant.user_rating.aggregate_rating} />
                <Text style={{ fontWeight: "lighter", color: "grey" }}>{restaurant.restaurant.user_rating.aggregate_rating}/5 rating</Text>
                <Text style={{ fontWeight: "lighter", color: "grey" }}>{restaurant.restaurant.user_rating.votes} votes</Text>
              </View>
              <View style={styles.detailsColumnWrapper}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Rs {restaurant.restaurant.average_cost_for_two}</Text>
                <Text style={{ fontWeight: "lighter", color: "grey" }}>average cost for two</Text>
              </View>
            </View>
          </Card>
        </View>
      </Card>
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card title="No More Restaurants" containerStyle={styles.cardStyle}>
        <Text>Pan around and search other areas for more nearby restaurants!</Text>
        <Button
          title="Back to the Map"
          icon={{ name: "my-location", color: "white" }}
          buttonStyle={{ backgroundColor: "#f55" }}
          onPress={() => this.props.navigation.navigate("Map")}
        />
        <Button
          title="Go to Saved Restaurants Screen"
          icon={{ name: "favorite", color: "white" }}
          buttonStyle={{ backgroundColor: "#f55", marginTop: 10 }}
          onPress={() => this.props.navigation.navigate("Review")}
        />
      </Card>
    );
  };
  render() {
    return (
      <View style={{ marginTop: 25 }}>
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  image: {
    height: 260,
    borderRadius: 8,
  },
  cardStyle: {
    borderRadius: 8,
    wrapperStyle: { backgroundColor: "#f2f2f2" },
  },
  innerCardStyle: {
    borderRadius: 12,
    marginTop: -20,
  },
  detailsColumnWrapper: {
    alignItems: "center",
  },
};


export default DeckScreen

}
