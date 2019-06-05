import _ from "lodash";
import React, { Component } from "react";
import { Image, Dimensions} from "react-native";
import Onboarding from "react-native-onboarding-swiper"
import { AppLoading } from "expo";



class WelcomeScreen extends Component {

  onSlidesComplete = () => {
    this.props.navigation.navigate("map");
  };
  render() {
    return <Onboarding
    skipToPage={2}
    onDone={this.onSlidesComplete}
    transitionAnimationDuration={100}
    subTitleStyles={{ fontSize: 20 }}
    bottomBarHighlight={false}
    pages={[
      {
          backgroundColor:"#ffffff",
        image: (
          <Image
            source={require("../assets/Find.png")}
            style={styles.onBoardingImageRectangular}
          />
        ),
        title: "Find Restaurants Around You",
        subtitle:
          "You can pan around inside our application and find the restaurants in your neighbourhood."
      },
      {
        backgroundColor:"#ffffff",
        image: (
          <Image
            source={require("../assets/EatOut.png")}
            style={styles.onBoardingImage}
          />
        ),
        title: "Decide On A Restaurant On First Glance",
        subtitle:
          "Have a look at the top 10 nearest options around you and swipe left or right on whether you would want to eat there. (Just like Tinder)"
      },
      {
        backgroundColor:"#ffffff",
        image: (
          <Image
            source={require("../assets/Save.png")}
            style={styles.onBoardingImage}
          />
        ),
        title: "Pick Among The Ones That You Love",
        subtitle: "After filtering out the best ones, you can check out the restaurants in Zomato in greater detail. Happy Eating! "
      },
    ]}
  />
    
    //<Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}
const width = Dimensions.get('window').width;
const styles = {
  onBoardingImage:{
      height:300,
      width:width,
      alignItems:"center",
  },
  onBoardingImageRectangular:{
    height:200,
    width:width,
    resizeMode:'cover',
    alignItems:"center",
}

}

export default WelcomeScreen;
