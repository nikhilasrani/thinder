import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { windowWidth } from "../constants";
import Thumb1 from "../assets/restaurant_thumbnails/restaurant-1.jpg";
import Thumb2 from "../assets/restaurant_thumbnails/restaurant-2.jpg";
import Thumb3 from "../assets/restaurant_thumbnails/restaurant-3.jpg";

const RestaurantCard = ({ item, index }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={
          item?.restaurant?.featured_image
            ? { uri: item.restaurant.featured_image }
            : getRandomRestaurantThumbnail()
        }
        style={styles.cardImage}
      />
      <View style={{ width: windowWidth - 32 - 75 - 84 }}>
        <Text style={{ fontFamily: "Manrope_800ExtraBold" }}>
          {item.restaurant.name}
        </Text>
        <Text style={{ fontFamily: "Manrope_400Regular", color: "#707070" }}>
          {item.restaurant.cuisines}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: `#${item.restaurant.user_rating.rating_color}`,
              paddingHorizontal: 4,
              paddingVertical: 2,
            }}
          >
            <Ionicons name="ios-star" color={"#FFFFFF"} size={14} />
            <Text style={{ paddingLeft: 4, color: "#FFFFFF" }}>
              {item.restaurant.user_rating.aggregate_rating}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#ffffff",
    marginVertical: 10,
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
  },
  cardImage: {
    height: 75,
    width: 75,
    resizeMode: "cover",
    marginRight: 16,
    borderRadius: 6,
  },
});

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRestaurantThumbnail() {
  let num = getRandomInt(1, 3);
  switch (num) {
    case 1:
      return Thumb1;
    case 2:
      return Thumb2;
    case 3:
      return Thumb3;
    default:
      return Thumb1;
  }
}
