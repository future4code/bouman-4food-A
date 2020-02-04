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



export function UserProfile(props) {
	const classes = useStyles();
    return (
      <div>
        <div>
        <h1>UserProfile</h1>
            <Button onClick={props.goToRestaurantFeed}>Va para RestaurantFeed</Button>
            <Button onClick={props.goToCart}>Va para Cart</Button>
        </div>
        <Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<RequestHistoryCard></RequestHistoryCard>
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