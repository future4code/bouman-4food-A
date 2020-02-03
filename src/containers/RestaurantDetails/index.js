import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class RestaurantDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>RestaurantDetails</h1>
        <Button onClick={this.props.goToRestaurantFeed}>Va para RestaurantFeed</Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToRestaurantFeed: () => dispatch(push(routes.restaurantFeed))
})

export default connect(null, mapDispatchToProps)(RestaurantDetails);