import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Button,
} from "react-native";
import * as Permissions from "expo-permissions";
import { usePermissions } from "expo-permissions";
import { Ionicons } from "@expo/vector-icons";

const FeedScreen = () => {
  const latitude = 12.97;
  const longitude = 77.59;
  const url = `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`;

  const [data, setData] = useState(null);

  const [permission, askForPermission] = usePermissions(Permissions.LOCATION, {
    ask: true,
  });

  if (!permission || permission.status !== "granted") {
    return (
      <View>
        <Text>Permission is not granted</Text>
        <Button title="Grant permission" onPress={askForPermission} />
      </View>
    );
  }

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(url, {
        headers: { "user-key": "80e2eb2d12ef4fdbb35b2ade5120740d" },
      });
      response = await response.json();
      console.log(response);
    }
    fetchData();

    setData(data);
  }, [data]);

  return (
    <SafeAreaView style={{ backgroundColor: "#f5f3f9", flex: 1 }}>
      <View
        style={{
          paddingVertical: 48,
          paddingHorizontal: 42,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Ionicons name="ios-menu" color={"#333333"} size={32} />
        <Ionicons name="ios-cart" color={"#333333"} size={32} />
      </View>
      <View style={{ paddingHorizontal: 42 }}>
        <Text>Restaurants near me</Text>
        <Text>{JSON.stringify(data)}</Text>
        {data && data.nearby_restaurants
          ? data.nearby_restaurants.map((item, index) => {
              return (
                <View style={styles.cardContainer}>
                  <Image
                    source={{ uri: item.restaurant.featured_image }}
                    style={styles.cardImage}
                  />
                  <View>
                    <Text>{item.restaurant.name}</Text>
                    <Text>{item.restaurant.cuisines}</Text>
                  </View>
                </View>
              );
            })
          : null}
      </View>
    </SafeAreaView>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#ffffff",
    marginVertical: 10,
    marginHorizontal: 30,
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
