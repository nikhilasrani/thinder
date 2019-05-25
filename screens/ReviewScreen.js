import React, { Component } from "react";
import { View, Text, Platform, ScrollView, Image, Linking } from "react-native";
import { Card, Button, Rating } from "react-native-elements";
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
        <Card containerStyle={styles.cardStyle} key={restaurant.restaurant.id}>
            <View>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: restaurant.restaurant.featured_image }}
          />
          <Card containerStyle={styles.innerCardStyle}>
          <View style={[styles.column, {flex:2, paddingHorizontal:18}]}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontWeight:"bold", fontSize: 22}}>{restaurant.restaurant.name}</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontWeight:"lighter", color:"grey"}}>{restaurant.restaurant.cuisines}</Text>
            </View>
            <View style={styles.detailWrapper}>
            <View style={styles.detailsColumnWrapper}>
            <Rating
            readonly
            type="heart"
              imageSize={25}
              startingValue={restaurant.restaurant.user_rating.aggregate_rating}
            />
              <Text style={{fontWeight:"lighter", color:"grey"}}>{restaurant.restaurant.user_rating.aggregate_rating}/5 rating</Text>
              <Text style={{fontWeight:"lighter", color:"grey"}}>{restaurant.restaurant.user_rating.votes} votes</Text>
            </View>
            <View style={styles.detailsColumnWrapper}>
            <Text style={{fontWeight:"bold", fontSize: 18}}>Rs {restaurant.restaurant.average_cost_for_two}</Text>
            <Text style={{fontWeight:"lighter", color:"grey"}}>average cost for two</Text>
            </View>
            </View>
          </Card>
        </View>
            <Button
              rounded
              title="View on Zomato"
              buttonStyle={{ backgroundColor: "#f55", paddingHorizontal:30, marginTop:15 }}
              onPress={() => Linking.openURL(restaurant.restaurant.deeplink)}
            />
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
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10
  },
  image: {
    height: 260,
    borderRadius: 8,
  },
  cardStyle: {
    borderRadius: 8,
    wrapperStyle:{backgroundColor:"#f2f2f2"}
  },
  innerCardStyle:{
    borderRadius:12,
    marginTop:-20
  },
  detailsColumnWrapper:{
    alignItems: "center"
  }
};


function mapStateToProps(state) {
  return { likedRestaurants: state.likedRestaurants };
}

export default connect(mapStateToProps)(ReviewScreen);
