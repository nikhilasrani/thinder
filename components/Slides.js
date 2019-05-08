import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;
class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="Login with Facebook"
          rounded
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
        />
      );
    }
  }
  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.slideText}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  }
  render() {
    return (
      <ScrollView pagingEnabled horizontal style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}
const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
  buttonStyle: {
    marginTop:25,
    backgroundColor: "#3b5998"
  }
};
export default Slides;
