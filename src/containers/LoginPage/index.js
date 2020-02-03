import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1> Login Page</h1>
        <Button>Va para Feed</Button>
        <Button>Va para SignUp</Button>
      </div>
    );
  }
}

export default connect()(LoginPage);
