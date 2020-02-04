import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import InitialScreen from "../InitialScreen"
import LoginPage from "../LoginPage"
import SignUpPage from "../SignUpPage"
import SignupPageAddress from "../SignupPageAddress"
import RestaurantFeed from "../RestaurantFeed"
import Cart from "../Cart"
import UserProfile from "../UserProfile"
import RestaurantDetails from "../RestaurantDetails"
import EditUserProfile from "../EditUserProfile";
import EditUserAddress from "../EditUserAddress";

export const routes = {
  initialScreen: "/",
  loginPage: "/loginPage",
  signupPage:"/signupPage",
  signupPageAddress: "/signupPageAddress",
  restaurantFeed: "/restaurantFeed",
  cart: "/cart",
  userProfile: "/userProfile",
  restaurantDetails: "/restaurantDetails",
  editUserProfile: "/editUserProfile",
  editUserAddress: "/editUserAddress",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.initialScreen} component={InitialScreen} />
        <Route exact path={routes.loginPage} component={LoginPage} />
        <Route exact path={routes.signupPage} component={SignUpPage} />
        <Route exact path={routes.signupPageAddress} component={SignupPageAddress} />
        <Route exact path={routes.restaurantFeed} component={RestaurantFeed} />
        <Route exact path={routes.cart} component={Cart} />
        <Route exact path={routes.userProfile} component={UserProfile} />
        <Route exact path={routes.restaurantDetails} component={RestaurantDetails} />
        <Route exact path={routes.editUserProfile} component={EditUserProfile} />
        <Route exact path={routes.editUserAddress} component={EditUserAddress} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
