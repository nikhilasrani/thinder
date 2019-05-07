import React, { Component } from "react";
import { Provider } from "react-redux";
import AppNavigation from "./navigation/AppNavigation";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
export default App;
