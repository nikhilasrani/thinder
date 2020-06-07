import React, { Component } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import AppNavigation from "./navigation/AppNavigation";
import store from "./store";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <AppNavigation />
        </PaperProvider>
      </Provider>
    );
  }
}
export default App;
