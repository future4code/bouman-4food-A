import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Footer from "../../components/Footer";
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AppBarComponent from "../../components/AppBarComponent"
import { FormButton } from "../../components/Form"
import Container from '@material-ui/core/Container';
import {
  WrapperAddress,
  FontAddressTitle,
  FontAddressUser,
  TextCart,
  FreightPrice,
  WrapperPrice,
  TitleDivPrice,
  TotalPrice,
  FormOfPayment,
  LineHr,
  WrapperRadioButton,
  WrapperButtonConfirm,
  WrapperMain
} from "./style";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'money',
    };
  }

  handleChange = event => {
    this.setState({value: event.target.value})
  } 

  componentDidMount(){
    const token = window.localStorage.getItem("token")
    if(token === null){
      this.props.goToLoginPage()
    }else{
      
    }
  }
  render() {
    return (
      <div>
        <AppBarComponent imageDisplay={false} title="Meu carrinho" />
            <WrapperMain>
              <WrapperAddress>
                <FontAddressTitle>Endereço de entrega</FontAddressTitle>
                <FontAddressUser>Rua Alessandra Viera, 42</FontAddressUser>
              </WrapperAddress>
              <Container  component="main" >
              <TextCart>Carrinho Vazio</TextCart>
              <FreightPrice>Frete R$0,00</FreightPrice>
              <WrapperPrice>
                <TitleDivPrice>SUBTOTAL</TitleDivPrice>
                <TotalPrice>R$00,00</TotalPrice>
              </WrapperPrice>
              <FormOfPayment>Forma de pagamento</FormOfPayment>
              <LineHr />
              <FormControl>
                  <WrapperRadioButton name="payment" value={this.props.value} onChange={this.handleChange}>
                    <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
                    <FormControlLabel value="creditCard" control={<Radio />} label="Cartão de crédito" />
                  </WrapperRadioButton>
              </FormControl>
              <WrapperButtonConfirm>
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
              </WrapperButtonConfirm>
            </Container>
          </WrapperMain>
          <Footer></Footer>
      </div>
    );
}
}

const mapDispatchToProps = (dispatch) => ({
  goToRestaurantFeed: () => dispatch(push(routes.restaurantFeed)),
  goToUserProfile: () => dispatch(push(routes.userProfile)),
  goToLoginPage: () => dispatch(push(routes.loginPage))
})

export default connect(null, mapDispatchToProps)(Cart);