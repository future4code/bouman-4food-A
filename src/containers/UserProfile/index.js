import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { RequestHistoryCard } from './../../components/RequestHistoryCard'
import Footer from "../../components/Footer";
import { getProfile, fetchOrdersHistory } from "../../actions/user"
import {
  DivAddress,
  TitleAddress,
  FontProfile,
  DivUserProfile,
  EditAddress,
  LineHr,
  ContainerResquestHistory,
} from "./style";
import IconEdit from "../../images/edit.svg"
import AppBarCart from "../../components/AppBarCart";

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}))

export function UserProfile(props) {
  const classes = useStyles();

  useEffect(() => {
    props.fetchUsers();
    props.fecthOrders();
  }, [])

  return (
    <div>
      <AppBarCart title="Meu Perfil"/>
      <DivUserProfile>
        <EditAddress>
          <FontProfile>{props.users.name}</FontProfile>
          <img src={IconEdit} />
        </EditAddress>
          <FontProfile>{props.users.email}</FontProfile>
          <FontProfile>{props.users.cpf}</FontProfile>
        <DivAddress>
          <EditAddress>
            <TitleAddress>Endereço cadastrado</TitleAddress>
            <img src={IconEdit} />
          </EditAddress>
          <FontProfile>{props.users.address}</FontProfile>
        </DivAddress>
        <FontProfile>Histórico de pedidos</FontProfile>
        <LineHr />
      </DivUserProfile>
      <ContainerResquestHistory  component="main" maxWidth="xs">
       <CssBaseline />
        <div className={classes.paper}>
          {props.orders===[]? props.orders.map(request => (
            <RequestHistoryCard key={request.id} requestText={request.text} requestData={request.data} requestValue={request.value}></RequestHistoryCard>
          )):<p>Você não realizou nenhum pedido</p>}
        </div>
      </ContainerResquestHistory>
      <Footer></Footer>
    </div>

  );
}

const mapStateToProps = state => ({
  users: state.users.allUsers,
  orders: state.users.allOrders
})

const mapDispatchToProps = (dispatch) => ({
  goToRestaurantFeed: () => dispatch(push(routes.restaurantFeed)),
  goToCart: () => dispatch(push(routes.cart)), 
  fetchUsers: () => dispatch(getProfile()),
  fecthOrders: () => dispatch(fetchOrdersHistory())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);