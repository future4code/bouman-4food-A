import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Carrinho</h1>
        <Button onClick={this.props.goToRestaurantFeed}>Va para RestaurantFeed</Button>
        <Button onClick={this.props.goToUserProfile}>Va para UserProfile</Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToRestaurantFeed: () => dispatch(push(routes.restaurantFeed)),
  goToUserProfile: () => dispatch(push(routes.userProfile))
})

export default connect(null, mapDispatchToProps)(Cart);