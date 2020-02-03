import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1> SignUp Page</h1>
        <Button onClick={this.props.goToSignUpAddress}>Va para SignUpAddress</Button>
        <Button onClick={this.props.goToLoginPage}>volta para Login</Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>({
  goToSignUpAddress: () => dispatch(push(routes.signupPageAddress)),
  goToLoginPage: () => dispatch(push(routes.loginPage))
})

export default connect(null, mapDispatchToProps)(SignUpPage);
