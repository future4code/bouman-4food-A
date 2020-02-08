import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchRestaurantsDetails } from "../../actions/restaurantsActions";

const Card = styled.section`
  max-width: 480px;
  height: 188px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-block-start: 8px;
  margin-block-end: 8px;
  border: solid 1px #b8b8b8;
  border-radius: 8px;
`;

const Image = styled.div`
  height: 120px;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Info = styled.div`
  height: 36.17%;
  width: 90%;
`;

const Name = styled.p`
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #e8222e;
  margin-block-start: 12px;
  margin-block-end: 8px;
`;

const OtherInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OtherInfo = styled.div`
  display: inline-block;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;

function RestaurantCard(props) {
  const goToRestaurantDetails = restaurantId => {
    props.getRestaurantDetails(restaurantId);
  };

  return (
    <Card
      onClick={() => {goToRestaurantDetails(props.id)}}
    >
      <Image>
        {/* se tivermos tempo, aprender o canvas */}
        <Img src={props.restaurantImg} />
      </Image>
      <Info>
        <Name>{props.restaurantName}</Name>
        <OtherInfoContainer>
          <OtherInfo>
            {props.restaurantTime} - {props.restaurantTime + 10} min
          </OtherInfo>
          <OtherInfo>Frete R$ {Number(props.restaurantShipping).toFixed(2)}</OtherInfo>
        </OtherInfoContainer>
      </Info>
    </Card>
  );
}

const mapDispatchToProps = dispatch => ({
  getRestaurantDetails: restaurantId =>
    dispatch(fetchRestaurantsDetails(restaurantId))
});

export default connect(null, mapDispatchToProps)(RestaurantCard);
