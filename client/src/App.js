import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import EventsListContainer from "./components/EventsList/EventsListContainer";
import EventDetailsContainer from "./components/EventDetails/EventDetailsContainer";
import SignupFormContainer from "./components/Signup/SignupFormContainer";
import LoginFormContainer from "./components/Login/LoginFormContainer";
import Logout from "./components/Logout/Logout";
import TicketDetailsContainer from "./components/TicketDetails/TicketDetailsContainer";

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
          <Route path="/ticket/:id" component={TicketDetailsContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
