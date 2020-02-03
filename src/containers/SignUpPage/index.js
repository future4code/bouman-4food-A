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
        <Button>Va para SignUpAddress</Button>
        <Button>volta para Login</Button>
      </div>
    );
  }
}

export default connect()(SignUpPage);
