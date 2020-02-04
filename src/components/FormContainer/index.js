import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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


export function FormContainer(props) {
  const classes = useStyles();
 
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          {props.formTitle !== undefined && <Typography component="h1" variant="h5">{props.formTitle}</Typography>}
          <form className={classes.form} noValidate>
            {props.formInputs.map( input => (
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label={input.label}
                name={input.name}
                placeholder={input.placeholder}
                autoComplete={input.autoComplete}
                autofocus={input.autoFocus}
                value={input.value}
                onChange={input.onChange}
              />
            ))}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ background:"#e8222e" }}
              className={classes.submit}
            >
              {props.buttonText}
            </Button>
          </form>
        </div>
      </Container>
    );
}

export default FormContainer;