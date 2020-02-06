import React from 'react';
import AvatarIcon from './../../images/avatar.svg'
import AvatarIconActive from './../../images/avataractive.svg'
import HomePageIcon from './../../images/homepage.svg'
import HomePageIconActive from './../../images/homepageactive.svg'
import ShoppingIcon from './../../images/shopping-cart.svg'
import ShoppingIconActive from './../../images/shopping-cartactive.svg'
import styled from "styled-components"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";

const ContainerFooter = styled.div`
    width:100vw;
    height:49px;
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    position:fixed;
    overflow:hidden;
    bottom:0;
    margin:0;
    padding:0;
    box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 
    0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 
    rgba(0, 0, 0, 0.14);
`;

export function Footer(props) {

  const {currentRoute} = props
  const HomeIcon = currentRoute === "/restaurantFeed" ? HomePageIconActive : HomePageIcon;
  const CartIcon = currentRoute === "/cart" ? ShoppingIconActive : ShoppingIcon;
  const UserIcon = currentRoute === "/userProfile" ? AvatarIconActive : AvatarIcon;
  
  return (
    <ContainerFooter color="primary">
      <img onClick={props.goToRestaurantFeed} src={HomeIcon} />
      <img onClick={props.goToCart} src={CartIcon} />
      <img onClick={props.goToUserProfile} src={UserIcon} />  
    </ContainerFooter>
  );
}

const mapStateToProps = (state) => ({
  currentRoute: state.router.location.pathname,
})

const mapDispatchToProps = (dispatch) => ({
  goToRestaurantFeed: () => dispatch(push(routes.restaurantFeed)),
  goToCart: () => dispatch(push(routes.cart)),
  goToUserProfile: () => dispatch(push(routes.userProfile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)