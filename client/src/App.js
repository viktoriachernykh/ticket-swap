import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import EventsListContainer from "./components/Home/EventsListContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" component={EventsListContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
