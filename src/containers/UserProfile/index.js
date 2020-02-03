import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>UserProfile</h1>
        <Button>Va para RestaurantFeed</Button>
        <Button>Va para Cart</Button>
        
        
      </div>
    );
  }
}

export default connect()(UserProfile);