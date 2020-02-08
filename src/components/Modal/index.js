import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { connect } from "react-redux";
import { addToCart } from "../../actions/restaurantsActions"
const StyledSelect = styled(Select)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin: 10px 0 0 40px !important;
`;

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 300,
    backgroundColor: theme.palette.background.paper, 
    border: '2px solid #cccccc',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
}));

export function ModalPopUp(props) {
  const classes = useStyles();
  
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(props.openPopUp);
  const [quantity, setQuantity] = React.useState("0") 
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    
    const products = {...props.product, quantity}
    props.addToCart(products)
    console.log("products: ",products)
    setOpen(false);
    props.changeDisplayState()
        
    // ja temos id = props.idProp
    // ja temos idRestaurant= props.idRestaurant
    // ja temos quantity = quantity
  };
  const handleSelect = (e) => {
    setQuantity(e.target.value)
  }

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
        <h3 id="simple-modal-title">Selecione a quantidade desejada</h3>
          <StyledSelect
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            onChange={handleSelect}
            value={quantity}
          >
            {/* <MenuItem value="0">
              <em>0</em>
            </MenuItem> */}
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem> 
            <MenuItem value="4">4</MenuItem> 
            <MenuItem value="5">5</MenuItem> 
            <MenuItem value="6">6</MenuItem> 
            <MenuItem value="7">7</MenuItem> 
            <MenuItem value="8">8</MenuItem> 
            <MenuItem value="9">9</MenuItem> 
            <MenuItem value="10">10</MenuItem> 
          </StyledSelect>
          <StyledButton onClick={handleClose}>
            Adicionar ao Carrinho
          </StyledButton>
        </div>
      </Modal>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addToCart: (products) => dispatch(addToCart(products))
})

export default connect(null, mapDispatchToProps)(ModalPopUp)