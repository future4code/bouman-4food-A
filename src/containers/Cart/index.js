import React, { useState } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Button from "@material-ui/core/Button";
import Footer from "../../components/Footer";
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AppBarCart from "../../components/AppBarCart"
import { FormButton } from "../../components/Form"
import Container from '@material-ui/core/Container';
import {  
  DivAddress,
  FontAddressTitle,
  FontAddressUser,
  TextCart,
  FreightPrice,
  DivPrice,
  TitleDivPrice,
  TotalPrice,
  FormOfPayment,
  LineHr,
  DivRadioButton,
  DivButtonConfirm
} from "./style"

export function Cart(props) {

  const [money, setMoney] = useState("")

  
  const handleChange = event => {
    setMoney(event.target.value);
  };
  
    return (
      <div>
        <AppBarCart />
            <DivAddress>
              <FontAddressTitle>Endereço de entrega</FontAddressTitle>
              <FontAddressUser>Rua Alessandra Viera, 42</FontAddressUser>
            </DivAddress>
          <Container style={{position:"absolute",top:"100px", bottom:"57px", overflow:"auto"}} component="main" >
            <TextCart>Carrinho Vazio</TextCart>
            <FreightPrice>Frete R$0,00</FreightPrice>
            <DivPrice>
              <TitleDivPrice>SUBTOTAL</TitleDivPrice>
              <TotalPrice>R$00,00</TotalPrice>
            </DivPrice>
            <FormOfPayment>Forma de pagamento</FormOfPayment>
            <LineHr />
            <FormControl>
                <DivRadioButton name="payment" value={props.value} onChange={handleChange}>
                  <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
                  <FormControlLabel value="creditCard" control={<Radio />} label="Cartão de crédito" />
                </DivRadioButton>
            </FormControl>
            <DivButtonConfirm>
              <FormButton
              style={
                { 
                  background: "rgba(232, 34, 46, 0.5)",
                  width: "100%",
                  height: "42px",
                  borderRadius: "2px",
                }
              }
              >
                Confirmar
              </FormButton>
            </DivButtonConfirm>
          </Container>
        {/* <Button onClick={this.props.goToRestaurantFeed}>Va para RestaurantFeed</Button>
        <Button onClick={this.props.goToUserProfile}>Va para UserProfile</Button> */}
        <Footer></Footer>
      </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
  goToRestaurantFeed: () => dispatch(push(routes.restaurantFeed)),
  goToUserProfile: () => dispatch(push(routes.userProfile))
})

export default connect(null, mapDispatchToProps)(Cart);