import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { RequestHistoryCard } from './../../components/RequestHistoryCard'
import {Footer} from "../../components/Footer";


const useStyles = makeStyles(theme => ({
	paper: {
	  marginTop: theme.spacing(8),
	  display: 'flex',
	  flexDirection: 'column',
	  alignItems: 'center',
	}
}))

const requestHistory =[
  {
    id:"1",
    text: "Hamburguer Vila Maria",
    data: "10/10/2019",
    value: "23,00"
  },
  {
    id:"2",
    text: "Hamburguer da Vale",
    data: "03/04/2019",
    value: "23,00"
  },{
    id:"3",
    text: "Macarrão na Chapa da Teet",
    data: "04/03/2019",
    value: "10,00"
  },{
    id:"4",
    text: "Macarrão na Chapa da Teet",
    data: "04/03/2019",
    value: "10,00"
  },
]

export function UserProfile(props) {
	const classes = useStyles();
    return (
      <div>
        <div>
        <h1>UserProfile</h1>
            <Button onClick={props.goToRestaurantFeed}>Va para RestaurantFeed</Button>
            <Button onClick={props.goToCart}>Va para Cart</Button>
        </div>
        <Container style={{position:"absolute",top:"100px", bottom:"57px", overflow:"auto"}} component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
        {requestHistory.map(request => (
          <RequestHistoryCard key={request.id} requestText={request.text} requestData={request.data} requestValue={request.value}></RequestHistoryCard>
        ))}
			</div>
        </Container>
		<Footer></Footer>
      </div>
      
    );
  }


const mapDispatchToProps = (dispatch) => ({
  goToRestaurantFeed: () => dispatch(push(routes.restaurantFeed)),
  goToCart: () => dispatch(push(routes.cart))
})

export default connect(null, mapDispatchToProps)(UserProfile);