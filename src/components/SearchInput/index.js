import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import styled from "styled-components";
import SearchIcon from '@material-ui/icons/Search';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
      margin: theme.spacing(1),
      width:328,
      height:56,   
    },
  }));
  
  
export function SearchInput(props) {
    const classes = useStyles();
   
    return (

        <FormControl className={classes.root}>
            <InputLabel htmlFor="input-with-icon-adornment">{props.label}</InputLabel>
            <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                <SearchIcon />
                </InputAdornment>
            }
            />
        </FormControl>
    )
}
export default (SearchInput)