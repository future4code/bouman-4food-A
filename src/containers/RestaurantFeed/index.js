import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ScrollableTabsButtonAuto from "../../components/ScrollableTab"
import { fetchRestaurants } from '../../actions/restaurantsActions'

class RestaurantFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    const token = window.localStorage.getItem("token")
    if(token === null){
      this.props.goToLoginPage()
    }else{
      this.props.getRestaurants()
    }
  }

  render() {
    
    const { restaurants } = this.props

    return (
      <div>
        <h1>RestaurantFeed</h1>
        <ScrollableTabsButtonAuto tabLabel={restaurants.category}/>
        <Button onClick={this.props.goToRestaurantDetails}>Va para RestaurantDetails</Button>
        <Button onClick={this.props.goToCart}>Va para Cart</Button>
        <Button onClick={this.props.goToUserProfile}>Va para UserProfile</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  restaurants: state.restaurants.allRestaurants
})

const mapDispatchToProps = (dispatch) => ({
  goToRestaurantDetails: () => dispatch(push(routes.restaurantDetails)),
  goToCart: () => dispatch(push(routes.cart)),
  goToUserProfile: () => dispatch(push(routes.userProfile)),
  goToLoginPage: () => dispatch(push(routes.loginPage)),
  getRestaurants: () => dispatch(fetchRestaurants()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantFeed);