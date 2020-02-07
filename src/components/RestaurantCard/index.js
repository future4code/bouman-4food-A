import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchRestaurantsDetails } from "../../actions/restaurantsActions";

const Container = styled.main`
  margin: auto;
  max-width: 480px;
`;

const Card = styled.section`
  height: 188px;
  margin: 10px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
`;

const Info = styled.div`
  height: 36.17%;
  margin: 0 16px;
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
    <div>
      <Container>
        <Card
          onClick={() => {
            goToRestaurantDetails(props.id);
          }}
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
              <OtherInfo>Frete R${props.restaurantShipping},00</OtherInfo>
            </OtherInfoContainer>
          </Info>
        </Card>
      </Container>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  getRestaurantDetails: restaurantId =>
    dispatch(fetchRestaurantsDetails(restaurantId))
});

export default connect(null, mapDispatchToProps)(RestaurantCard);
