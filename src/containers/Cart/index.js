import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/";
import Button from "@material-ui/core/Button";
import Footer from "../../components/Footer";
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AppBarComponent from "../../components/AppBarComponent"
import { FormButton } from "../../components/Form"
import styled from "styled-components";
import RadioGroup from '@material-ui/core/RadioGroup';
import Container from '@material-ui/core/Container';

const DivAddress = styled.div`
  max-width: 420px;
  height: 76px;
  margin-top: 45px;
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
  margin-top: 11px;
`;

const DivButtonConfirm = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 130px;
`;

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
                <DivRadioButton name="payment" value={this.props.value} onChange={this.handleChange}>
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
}

const mapDispatchToProps = (dispatch) => ({
  goToRestaurantFeed: () => dispatch(push(routes.restaurantFeed)),
  goToUserProfile: () => dispatch(push(routes.userProfile)),
  goToLoginPage: () => dispatch(push(routes.loginPage))
})

export default connect(null, mapDispatchToProps)(Cart);