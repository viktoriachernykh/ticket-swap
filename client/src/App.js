import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import { connect } from "react-redux";
import Header from "./components/Header";
import EventsListContainer from "./components/EventsList/EventsListContainer";
import EventDetailsContainer from "./components/EventDetails/EventDetailsContainer";
import SignupFormContainer from "./components/Signup/SignupFormContainer";
import LoginFormContainer from "./components/Login/LoginFormContainer";
import Logout from "./components/Logout/Logout";
import TicketDetailsContainer from "./components/TicketDetails/TicketDetailsContainer";
// import { fetchTicketRisk } from "./store/ticket/actions";
// const baseUrl = "http://localhost:4000";

class App extends Component {
  // stream = new EventSource(`${baseUrl}/stream`);
  // componentDidMount() {
  //   this.stream.onmessage = ticket => {
  //     // console.log("action", ticket);
  //     const action = JSON.parse(ticket.data);
  //     console.log("stream action", action);
  //     // this.props.fetchTicketRisk(action);
  //   };
  // }

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
// export default connect(null, { fetchTicketRisk })(App);
