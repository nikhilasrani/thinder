import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";
import RestaurantCard from "../components/RestaurantCard";

const FeedScreen = () => {
  const [location, setLocation] = useState({ latitude: 13, longitude: 77.5 });
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const { latitude = 13, longitude = 77.5 } = location;
  const url = `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`;

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(url, {
        headers: { "user-key": "80e2eb2d12ef4fdbb35b2ade5120740d" },
      });
      response = await response.json();
      console.log(response);
      setData(response);
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#f5f3f9", flex: 1 }}>
      <View
        style={{
          paddingTop: 48,
          paddingBottom: 16,
          paddingHorizontal: 42,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#FFFFFF",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="ios-menu" color={"#333333"} size={32} />
          {data && data.location && (
            <View style={{ marginLeft: 16 }}>
              <Text>{data.location.title}</Text>
              <Text style={{}}>
                {data.location.city_name}, {data.location.country_name}
              </Text>
            </View>
          )}
        </View>
        <Ionicons name="ios-cart" color={"#333333"} size={32} />
      </View>
      <View style={{ paddingHorizontal: 42 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontFamily: "Manrope_800ExtraBold",
              fontSize: 20,
              paddingTop: 24,
            }}
          >
            Restaurants near me
          </Text>
          {data && data.nearby_restaurants
            ? data.nearby_restaurants.map((item, index) => {
                return <RestaurantCard item={item} index={index} />;
              })
            : null}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FeedScreen;
