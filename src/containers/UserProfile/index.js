import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Button from "@material-ui/core/Button";

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { RequestHistoryCard } from './../../components/RequestHistoryCard'
import { Footer } from "../../components/Footer";
import { getProfile } from "../../actions/user"
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

const requestHistory = [
  {
    id: "1",
    text: "Hamburguer Vila Maria",
    data: "10/10/2019",
    value: "23,00"
  },
  {
    id: "2",
    text: "Hamburguer da Vale",
    data: "03/04/2019",
    value: "23,00"
  }, {
    id: "3",
    text: "Macarrão na Chapa da Teet",
    data: "04/03/2019",
    value: "10,00"
  },
  {
    id: "4",
    text: "Macarrão na Chapa da Teet",
    data: "04/03/2019",
    value: "10,00"
  },
]

export function UserProfile(props) {
  const classes = useStyles();

  useEffect(() => {
    props.fetchUsers();
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
          {requestHistory.map(request => (
            <RequestHistoryCard key={request.id} requestText={request.text} requestData={request.data} requestValue={request.value}></RequestHistoryCard>
          ))}
        </div>
      </ContainerResquestHistory>
      <Footer></Footer>
    </div>

  );
}

const mapStateToProps = state => ({
  users: state.users.allUsers
})

const mapDispatchToProps = (dispatch) => ({
  goToRestaurantFeed: () => dispatch(push(routes.restaurantFeed)),
  goToCart: () => dispatch(push(routes.cart)),
  fetchUsers: () => dispatch(getProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);