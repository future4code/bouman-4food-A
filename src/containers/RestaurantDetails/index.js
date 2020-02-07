import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { AppBarComponent } from "./../../components/AppBarComponent"
import {RestaurantItemCard} from "../../components/RestaurantItemCard"

class RestaurantDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    const token = window.localStorage.getItem("token")
    if(token === null){
      this.props.goToLoginPage()
    }else{
      
    }
  }

  render() {
    return (
      <div>
        <AppBarComponent
          imageDisplay={true}
          title="Restaurante"
          //colocar a prop onClickButton
        />
        
        
        <Button onClick={this.props.goToRestaurantFeed}>Va para RestaurantFeed</Button>
        <RestaurantItemCard/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToRestaurantFeed: () => dispatch(push(routes.restaurantFeed)),
  goToLoginPage: () => dispatch(push(routes.loginPage))
})

export default connect(null, mapDispatchToProps)(RestaurantDetails);