import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AppBarComponent from "../../components/AppBarComponent";
import Footer from "../../components/Footer";
import RestaurantCard from "../../components/RestaurantCard";
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
        <AppBarComponent title="iFuture" />
        <h1>RestaurantFeed</h1>
        <ScrollableTabsButtonAuto tabLabel={restaurants.category}/>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <Button onClick={this.props.goToRestaurantDetails}>Va para RestaurantDetails</Button>
        <Button onClick={this.props.goToCart}>Va para Cart</Button>
        <Button onClick={this.props.goToUserProfile}>Va para UserProfile</Button>
        <Footer />
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