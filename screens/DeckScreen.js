import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";
import { MapView } from "expo";
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
  renderCard(job) {
    const initialRegion = {
      longitude: parseInt(job.restaurant.location.longitude),
      latitude: parseInt(job.restaurant.location.latitude),
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };
    return (
      <Card title={job.restaurant.name}>
        <View>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: job.restaurant.thumb }}
          />
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.restaurant.location.locality}</Text>
          <Text>{job.restaurant.location.city}</Text>
          <View>
            <Rating
              imageSize={10}
              readonly
              startingValue={parseInt(
                job.restaurant.user_rating.aggregate_rating
              )}
            />
            <Text>{job.restaurant.user_rating.aggregate_rating}/5</Text>
          </View>
        </View>
        <View style={{ height: 150 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={true}
            initialRegion={initialRegion}
          />
        </View>
      </Card>
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card title="No more Restaurants">
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
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
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
    height: 260
  }
};

function mapStateToProps({ jobs }) {
  return { jobs: jobs.nearby_restaurants };
}
export default connect(
  mapStateToProps,
  actions
)(DeckScreen);
