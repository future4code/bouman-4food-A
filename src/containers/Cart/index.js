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
import styled from "styled-components";

const RestaurantItemCardContainer = styled.div`
  width: 328px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  width: 328px;
  height: 112px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin: 3px 0;
  display: flex;
  flex-direction: row;
`;

const StyledImg = styled.img`
  width: 96px;
  height: 112px;
  object-fit: contain;
`;
const InfoContainer = styled.div`
  width: 150px;
  height: 112px;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-items: flex-start;
  margin-left: 15px;
`;
const ItemName = styled.p`
  width: 167px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e8222e;
  margin: 0;
  margin-top: 10px;
`;
const ItemNDescription = styled.p`
  width: 200px;
  height: 30px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
  margin: 0;
  margin-top: 10px;
`;
const ItemPrice = styled.p`
  width: 118px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  margin: 0;
  margin-top: 10px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const QuantitySelected = styled.p`
  margin: 0;
  border: 1px solid;
  text-align: center;
  border-radius: 8px;
  width: 30px;
  align-self: flex-end;
`;

const CardButton = styled.p`
  padding: 3px 8px;
  background: white;
  border: 1px solid;
  border-radius: 8px;
  margin: 0;
  width: 75px;
`;

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'money',
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token")
    if (token === null) {
      this.props.goToLoginPage()
    } else {

    }
  }
  render() {
    console.log(this.props.cart)

    return (
      <div>
        <AppBarComponent imageDisplay={false} title="Meu carrinho" />
        <WrapperMain>
          <WrapperAddress>
            <FontAddressTitle>Endereço de entrega</FontAddressTitle>
            <FontAddressUser>Rua Alessandra Viera, 42</FontAddressUser>
          </WrapperAddress>
          <Container component="main" >
            {!this.props.cart.products ? <TextCart>Carrinho vazio</TextCart> : <RestaurantItemCardContainer>
              {this.props.cart.products.map(item => {
                return (
                  <CardContainer>
                    <StyledImg src={item.photoUrl} />
                    <InfoContainer>
                      <ItemName>{item.name}</ItemName>
                      <ItemNDescription>{item.description}</ItemNDescription>
                      <ItemPrice>R$ {Number(item.price*item.quantity).toFixed(2)}</ItemPrice>
                    </InfoContainer>
                    <RightContainer>
                      <QuantitySelected>0</QuantitySelected>
                      <CardButton
                        type="submit"
                        variant="contained"
                      >
                        remover
              </CardButton>
                    </RightContainer>
                  </CardContainer>
                );
              })}
            </RestaurantItemCardContainer>}
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

const mapStateToProps = state => ({
  cart: state.restaurants.cart
})

const mapDispatchToProps = (dispatch) => ({
  goToRestaurantFeed: () => dispatch(push(routes.restaurantFeed)),
  goToUserProfile: () => dispatch(push(routes.userProfile)),
  goToLoginPage: () => dispatch(push(routes.loginPage))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);