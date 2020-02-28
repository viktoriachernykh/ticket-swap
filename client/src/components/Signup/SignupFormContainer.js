import React from "react";
import { connect } from "react-redux";
import { signup } from "../../store/user/actions";
import SignupForm from "./SignupForm";

class SignupFormContainer extends React.Component {
  state = { name: "", email: "", password: "", logo: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.signup(
      this.state.name,
      this.state.email,
      this.state.password,
      this.state.logo
    );
    this.setState({
      name: "",
      email: "",
      password: "",
      logo: ""
    });
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (Object.keys(this.props.user).length) {
      setTimeout(() => {
        this.props.history.push("/login");
      }, 500);
      return <p>You have signed up!</p>;
    }
    return (
      <div>
        <h1>Sign up</h1>
        <SignupForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          text="Signup"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: { ...state.session.user }
  };
}

export default connect(mapStateToProps, { signup })(SignupFormContainer);
