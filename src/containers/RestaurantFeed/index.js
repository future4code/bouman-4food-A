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

import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from "../../images/search.svg"
import { SearchField, SearchSection } from "../../components/Form/"

import styled from "styled-components";
import Container from '@material-ui/core/Container';
import SearchInput from './../../components/SearchInput'


const ContainerRestaurantFeed = styled(Container)`
  position: absolute;
  top:180px;
  bottom:50px;
  left:0px;
  right:0px;
  overflow:scroll;
`;

const DivApp = styled.div`
    display: block;
    position: absolute;
    top:50px;
    left:0px; 
    height:180px; 
    right:0px;
    overflow:hidden;
`;




class RestaurantFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { search: ""};
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token")
    if (token === null) {
      this.props.goToLoginPage()
    } else {
      this.props.getRestaurants()
    }
  }

  search = (e) => {
    this.setState({ search: e.target.value })
  }

  searchRestaurant = () => {
    const { restaurants } = this.props
    return restaurants.filter(restaurant => {
      if (restaurant.name.toLowerCase().includes(this.state.search.toLowerCase())) {
        return true
      }
    })
  }

  cleanPage = (e) => {
    if (this.state.search === "") {
      return false
    } else {
      return true
    }
  }

  render() {

    const foundRestaurants = this.searchRestaurant()

    return (
      <div>
        <AppBarComponent title="iFuture" />

      
        <SearchSection>
          <SearchField
            className="search"
            margin="normal"
            variant="outlined"
            placeholder="Restaurante"
            onChange={this.search}
            value={this.state.search}
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <img src={SearchIcon} alt="Search" />
                </InputAdornment>
            }} />
        </SearchSection>
        <ScrollableTabsButtonAuto />
        <RestaurantCard restaurants={foundRestaurants} />

      
        <DivApp>
          <SearchInput label="Restaurante"/>
          <ScrollableTabsButtonAuto tabLabel={restaurants.category}/>
        </DivApp>
        <ContainerRestaurantFeed>
          {restaurants.map( restaurant => (
            <RestaurantCard key={restaurant.id} restaurantTime={restaurant.deliveryTime} restaurantShipping={restaurant.shipping} restaurantName={restaurant.name} restaurantImg={restaurant.logoUrl} />
          ))}
          <Button onClick={this.props.goToRestaurantDetails}>Va para RestaurantDetails</Button>
        </ContainerRestaurantFeed>


        <Footer />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
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