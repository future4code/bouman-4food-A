import React from "react";
import styled from "styled-components";

const Container = styled.main`
  margin: auto;
  max-width: 480px;
`

const Card = styled.section`
  height: 188px;
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  // text-align: center;
  margin-block-start: 8px;
  margin-block-end: 8px;
  border: solid 1px #b8b8b8;
  border-radius: 8px;
`

const Image = styled.div`
  height: 63.83%;
`

const Img = styled.img`
  height: 100%;
  display: block;
  margin: auto;
`

const Info = styled.div`
  height: 36.17%;
  margin: 0 16px;
`

const Name = styled.p`
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #e8222e;
  margin-block-start: 12px;
  margin-block-end: 8px;
`

const OtherInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const OtherInfo = styled.div`
  display: inline-block;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`

export default function RestaurantCard(props) {
  return (
    <div>
      <Container>
        {props.restaurants.map(restaurant => (
          <Card>
          <Image>
            <Img src={restaurant.logoUrl} />
          </Image>
          <Info>
            <Name>{restaurant.name}</Name>
            <OtherInfoContainer>
            <OtherInfo>{restaurant.deliveryTime} min</OtherInfo>
            <OtherInfo>Frete R${restaurant.shipping},00</OtherInfo>
            </OtherInfoContainer>
          </Info>
       </Card>
        ))}
      </Container>
    </div>
  )
}