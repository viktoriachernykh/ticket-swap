import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import EventsListContainer from "./components/EventsList/EventsListContainer";
import EventDetailsContainer from "./components/Event/EventDetailsContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={EventsListContainer} />
          <Route path="/event/:id" component={EventDetailsContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
