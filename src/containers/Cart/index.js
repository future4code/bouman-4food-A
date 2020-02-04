import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Button from "@material-ui/core/Button";
import Footer from "../../components/Footer";
import styled from "styled-components";
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AppBarCart from "../../components/AppBarCart"
import { FormButton } from "../../components/Form"

const DivAddress = styled.div`
  max-width: 420px;
  height: 76px;
  margin-top: 65px;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
`;

const FontAddressTitle = styled.label`
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin-left: 16px;
  margin-top: 16px;

`;

const FontAddressUser = styled.label`
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #000000;
  margin-left: 16px;
  margin-top: 8px;
`;

const TextCart = styled.h4`
  width: 296px;
  height: 18px;
  opacity: 0.89;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
  margin: 0 auto;
  margin-top: 20px;
`;

const FreightPrice = styled.p`
  width: 104px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: right;
  color: #000000;
  margin-left: 240px;
  margin-top: 83px;
`;

const DivPrice = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 14px;
`;

const TitleDivPrice = styled.p`
  width: 164px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #000000;
  margin-left: 16px;
`;

const TotalPrice = styled.p`
  width: 164px;
  height: 18px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;;
  letter-spacing: -0.43px;
  text-align: right;
  color: #e8222e;
`;
const FormOfPayment = styled.p`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #000000;
  margin-left: 16px;
`;
const LineHr = styled.hr`
  margin-left: 16px;
  margin-right: 16px;
  border: 0.7px solid black;
`;

const DivRadioButton = styled(RadioGroup)`
  margin-left: 16px;
  width: 360px;
  height: 100px;
`;

const DivButtonConfirm = styled.div`
  margin-left: 16px;
`;

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'money',
    };
  }

  handleChange = event => {
    this.setState({value: event.target.value})
  } 
  render() {
    return (
      <div>
        <AppBarCart />
        <DivAddress>
          <FontAddressTitle>Endereço de entrega</FontAddressTitle>
          <FontAddressUser>Rua Alessandra Viera, 42</FontAddressUser>
        </DivAddress>
        <TextCart>Carrinho Vazio</TextCart>
        <FreightPrice>Frete R$0,00</FreightPrice>
        <DivPrice>
          <TitleDivPrice>SUBTOTAL</TitleDivPrice>
          <TotalPrice>R$00,00</TotalPrice>
        </DivPrice>
        <FormOfPayment>Forma de pagamento</FormOfPayment>
        <LineHr />

        <FormControl>
            <DivRadioButton name="payment" value={this.state.value} onChange={this.handleChange}>
              <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
              <FormControlLabel value="creditCard" control={<Radio />} label="Cartão de crédito" />
            </DivRadioButton>
        </FormControl>
        <DivButtonConfirm>
          <FormButton
          style={
            { 
              background: "rgba(232, 34, 46, 0.5)",
              width: "328px",
              height: "42px",
              borderRadius: "2px",
            }
          }
          >
            Confirmar
          </FormButton>
        </DivButtonConfirm>
        {/* <Button onClick={this.props.goToRestaurantFeed}>Va para RestaurantFeed</Button>
        <Button onClick={this.props.goToUserProfile}>Va para UserProfile</Button> */}
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToRestaurantFeed: () => dispatch(push(routes.restaurantFeed)),
  goToUserProfile: () => dispatch(push(routes.userProfile))
})

export default connect(null, mapDispatchToProps)(Cart);