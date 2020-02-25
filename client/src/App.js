import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import EventsListContainer from "./components/EventsList/EventsListContainer";
import EventDetailsContainer from "./components/Event/EventDetailsContainer";
import SignupFormContainer from "./components/Signup/SignupFormContainer";
import LoginFormContainer from "./components/Login/LoginFormContainer";
import Logout from "./components/Logout/Logout";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={EventsListContainer} />
          <Route exact path="/login" component={LoginFormContainer} />
          <Route exact path="/signup" component={SignupFormContainer} />
          <Route exact path="/logout" component={Logout} />
          <Route path="/event/:id" component={EventDetailsContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
