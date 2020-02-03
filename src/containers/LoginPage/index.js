import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FourFood from "../../images/logo-future-eats-invert.svg";
import { ImageLogo } from "./style"


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export function LoginPage(props) {
  const classes = useStyles();

 
    return (
      <div>
        <div>
          <h1> Login Page</h1>
          <Button onClick={props.goToRestaurantFeed}>Va para Feed</Button>
          <Button onClick={props.goToSignUp}>Va para SignUp</Button>
        </div>
        <ImageLogo>
          <img src={FourFood}/>
        </ImageLogo>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Entrar
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                placeholder="email@email.com"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                placeholder="Mínimo 6 caracteres"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={
                  { 
                    background:"#e8222e" 
                  }
                }
                className={classes.submit}
              >
               Entrar
              </Button>
              <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                <Grid item>
                  <Link href="#" variant="body2" color="inherit">
                    {"Não possui cadastro? Clique aqui."}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
      </Container>
      </div>
    );
}

const mapDispatchToProps = (dispatch) =>({
  goToSignUp: () => dispatch(push(routes.signupPage)),
  goToRestaurantFeed: () => dispatch(push(routes.restaurantFeed))
})

export default connect(null, mapDispatchToProps)(LoginPage);
