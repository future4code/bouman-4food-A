import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import {routes} from "../Router/";
import Button from "@material-ui/core/Button";

function InitialScreen(props){
    return <div>
        <h1>Initial Screen</h1>
        <Button onClick={props.goToLoginPage}>vai para a loginPage</Button>
    </div>
}

 const mapDispatchToProps = (dispatch) =>({
     goToLoginPage: () => dispatch(push(routes.loginPage))
 })

export default connect(null, mapDispatchToProps)(InitialScreen)