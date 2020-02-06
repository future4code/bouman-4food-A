import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Button from "@material-ui/core/Button";
import AppBarComponent from "../../components/AppBar/AppBar";
import Footer from "../../components/Footer";
import RestaurantCard from "../../components/RestaurantCard";
import ScrollableTabsButtonAuto from "../../components/ScrollableTab"
import { fetchRestaurants } from '../../actions/restaurantsActions'
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from "../../images/search.svg"
import { SearchField, SearchSection } from "../../components/Form/"

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