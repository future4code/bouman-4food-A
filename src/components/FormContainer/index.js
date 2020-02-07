import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(2),
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
 
  const preventDefault = (e) => {
    e.preventDefault()
    props.onClickCriar(props.form)
  }

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
                required={input.required}
                fullWidth
                label={input.label}
                name={input.name}
                placeholder={input.placeholder}
                autoComplete={input.autoComplete}
                autoFocus={input.autoFocus}
                value={input.value}
                onChange={input.onChange}
                type={input.type}
              />
            ))}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ background:"#e8222e" }}
              className={classes.submit}
              onClick={preventDefault}
            >
              {props.buttonText}
            </Button>
          </form>
        </div>
      </Container>
    );
}

export default FormContainer;