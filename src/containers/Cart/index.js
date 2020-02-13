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
import { getProfile } from "../../actions/user";
import { placeOrder, refreshCart } from "../../actions/restaurantsActions";

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

const Card = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-block-start: 8px;
  margin-block-end: 8px;
  border-radius: 8px;
  padding: 10px;
`;

const Info = styled.div`
  height: 36.17%;
  margin: 0 16px;
`;

const Name = styled.p`
  width: 328px;
  height: 18px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e8222e;
`;

const OtherInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OtherInfo = styled.div`
  width: 328px;
  height: 18px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin: 2px 0;
`;

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payment: '',
    };
  }

  handleChange = event => {
    this.setState({ payment: event.target.value })
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token")
    if (token === null) {
      this.props.goToLoginPage()
    } else {
      this.props.fetchUsers();
    }
  }

  onOrder = () => {
    const productsToOrder = this.props.cart.products.map ( product => ({
      id: product.id,
      quantity: product.quantity
    }))
    const orderData = {
      products: productsToOrder,
      paymentMethod: this.state.payment
    }
    if (this.state.payment === '' ) {
      window.alert("Selecione o método de pagamento.")
    } else {
      this.props.onPlaceOrder(orderData, this.props.restaurantData.id)
    }
  }

  onRemoveItem(itemId){
    const itemIndex = this.props.cart.products.findIndex( product => product.id === itemId)
    this.props.cart.products.splice(itemIndex, 1)
    this.props.onRemoveItemOfCart(this.props.cart.products)
  }

  render() {
    const { restaurantData, userInformation } = this.props
    const { products } = this.props.cart

    return (
      <div>
        <AppBarComponent imageDisplay={false} title="Meu carrinho" />
        <WrapperMain>
          <WrapperAddress>
            <FontAddressTitle>Endereço de entrega</FontAddressTitle>
            <FontAddressUser>{userInformation.address}</FontAddressUser>
          </WrapperAddress>

          {products.length !== 0 &&
            <Card>
              <Info>
                <Name>{restaurantData.name}</Name>
                <OtherInfoContainer>
                  <OtherInfo>{restaurantData.address}</OtherInfo>
                </OtherInfoContainer>
                <OtherInfoContainer>
                  <OtherInfo>
                    {restaurantData.deliveryTime} - {restaurantData.deliveryTime + 10} min
                  </OtherInfo>
                </OtherInfoContainer>
              </Info>
            </Card>
          }

          <Container component="main" >
            {products.length === 0 ? <TextCart>Carrinho vazio</TextCart> :
              <RestaurantItemCardContainer>
                {products.map(item => {
                  return (
                    <CardContainer>
                      <StyledImg src={item.photoUrl} />
                      <InfoContainer>
                        <ItemName>{item.name}</ItemName>
                        <ItemNDescription>{item.description}</ItemNDescription>
                        <ItemPrice>R$ {Number(item.price*item.quantity).toFixed(2)}</ItemPrice>
                      </InfoContainer>
                      <RightContainer>
                        <QuantitySelected>{item.quantity}</QuantitySelected>
                        <CardButton type="submit" variant="contained" onClick={() => this.onRemoveItem(item.id)}>remover</CardButton>
                      </RightContainer>
                    </CardContainer>
                  )
                })}
              </RestaurantItemCardContainer>}
            <FreightPrice>
              Frete R$ {products.length !== 0 ? Number(restaurantData.shipping).toFixed(2) : "0.00"}
            </FreightPrice>
            <WrapperPrice>
              <TitleDivPrice>SUBTOTAL</TitleDivPrice>
              <TotalPrice>
                R$ {products.length !== 0 ?
                  Number(
                    products.reduce((acumulator, actualValue) => acumulator + (actualValue.quantity*actualValue.price), restaurantData.shipping)
                  ).toFixed(2) :
                  '0.00'
                }
              </TotalPrice>
            </WrapperPrice>
            <FormOfPayment>Forma de pagamento</FormOfPayment>
            <LineHr />
            <FormControl>
              <WrapperRadioButton name="payment" value={this.state.payment} onChange={this.handleChange}>
                <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
                <FormControlLabel value="creditCard" control={<Radio />} label="Cartão de crédito" />
              </WrapperRadioButton>
            </FormControl>
            <WrapperButtonConfirm>
              <FormButton
                style={{
                  background: "rgba(232, 34, 46, 0.5)",
                  width: "100%",
                  height: "42px",
                  borderRadius: "2px",
                }}
                onClick={this.onOrder}
                disabled={products.length === 0}
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
  cart: state.restaurants.cart,
  userInformation: state.users.allUsers,
  restaurantData: state.restaurants.restaurantDetails,
})

const mapDispatchToProps = (dispatch) => ({
  goToRestaurantFeed: () => dispatch(push(routes.restaurantFeed)),
  goToUserProfile: () => dispatch(push(routes.userProfile)),
  goToLoginPage: () => dispatch(push(routes.loginPage)),
  fetchUsers: () => dispatch(getProfile()),
  onPlaceOrder: (orderData, restaurantId) => dispatch(placeOrder(orderData, restaurantId)),
  onRemoveItemOfCart: (newProductsList) => dispatch(refreshCart(newProductsList)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);