import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ScrollableTabsButtonAuto from "../../components/ScrollableTab"

class RestaurantFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>RestaurantFeed</h1>
        <ScrollableTabsButtonAuto/>
        <Button onClick={this.props.goToRestaurantDetails}>Va para RestaurantDetails</Button>
        <Button onClick={this.props.goToCart}>Va para Cart</Button>
        <Button onClick={this.props.goToUserProfile}>Va para UserProfile</Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToRestaurantDetails: () => dispatch(push(routes.restaurantDetails)),
  goToCart: () => dispatch(push(routes.cart)),
  goToUserProfile: () => dispatch(push(routes.userProfile))
})

export default connect(null, mapDispatchToProps)(RestaurantFeed);