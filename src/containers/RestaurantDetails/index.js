import React, { Component } from "react";
import { connect } from "react-redux";
import { push, goBack } from "connected-react-router";
import { routes } from "../Router/";
import AppBarComponent from "../../components/AppBarComponent";
import styled from "styled-components";
import { fetchRestaurantsDetails } from "../../actions/restaurantsActions";
import { RestaurantItemCard } from "./../../components/RestaurantItemCard";
import LinearProgress from '@material-ui/core/LinearProgress'

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const Card = styled.section`
  /* height: 188px; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center;
  text-align: center; */
  margin-block-start: 8px;
  margin-block-end: 8px;
  /* border: solid 1px #b8b8b8; */
  border-radius: 8px;
`;

// const Image = styled.div`
//   height: 120px;
// `

const Img = styled.img`
  height: 120px;
  /* width: 100%; */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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

class RestaurantDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token");
    console.log(this.props.selectRestaurant)
    if (token === null) {
      this.props.goToLoginPage();
    }
    else if(this.props.selectRestaurant === undefined){
      this.props.goBackPage()
    } 
  }

  render() {
    // Evitar Problemas quando atualizamos a pagina de ver detalhes
    if(this.props.selectRestaurant === undefined){
      return(
        <LinearProgress/>
      ) 
    }
    const allCategories = this.props.selectRestaurant.products.map(el => {
      return el.category;
    });

    const uniqueCategories = Array.from(new Set(allCategories));

    const categoryItens = uniqueCategories.map(category => {
      const itensOfCategory = this.props.selectRestaurant.products.filter(
        item => {
          return item.category === category;
        }
      );
      return {
        category,
        itens: itensOfCategory
      };
    });
    console.log("cat:", categoryItens);
    return (
      <div>
        <AppBarComponent
          imageDisplay={true}
          title="Restaurante"
          onClickButton={this.props.goBackPage}
        />

        <Container>
          <Card>
            {/* se tivermos tempo, aprender o canvas */}
            <Img src={this.props.selectRestaurant.logoUrl} />
            <Info>
              <Name>{this.props.selectRestaurant.name}</Name>
              <OtherInfoContainer>
                <OtherInfo>{this.props.selectRestaurant.category}</OtherInfo>
              </OtherInfoContainer>
              <OtherInfoContainer>
                <OtherInfo>
                  {this.props.selectRestaurant.deliveryTime} -{" "}
                  {this.props.selectRestaurant.deliveryTime + 10} min
                </OtherInfo>
                <OtherInfo>
                  Frete R${this.props.selectRestaurant.shipping},00
                </OtherInfo>
              </OtherInfoContainer>
              <OtherInfoContainer>
                <OtherInfo>{this.props.selectRestaurant.address}</OtherInfo>
              </OtherInfoContainer>
            </Info>
          </Card>
        </Container>
        {categoryItens.map(item => {
          return <RestaurantItemCard itemData={item} />;
        })}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  goBackPage: () => dispatch(goBack()),
  goToLoginPage: () => dispatch(push(routes.loginPage)),
  
});

function mapStateToProps(state) {
  return {
    selectRestaurant: state.restaurants.restaurantDetails,
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetails);
