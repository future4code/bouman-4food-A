import React from "react";
import styled from "styled-components";
import burguerImg from "./../../images/burguer.png";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

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
const ItemCategory = styled.p`
  margin: 0;
  margin-bottom: 5px;
`;
const HR = styled(Divider)`
  margin-bottom: 10px !important;
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
  width:30px;
  align-self: flex-end
`;

const CardButton = styled.p`
  padding: 3px 8px;
  background: white;
  border: 1px solid;
  border-radius: 8px;
  margin: 0;
  width:75px;
`;

export function RestaurantItemCard(props) {
  return (
    <RestaurantItemCardContainer>
      <ItemCategory>{props.itemData.category}</ItemCategory>
      <HR></HR>
      {props.itemData.itens.map(item => {
        return (
          <CardContainer>
            <StyledImg src={item.photoUrl} />
            <InfoContainer>
              <ItemName>{item.name}</ItemName>
              <ItemNDescription>{item.description}</ItemNDescription>
              <ItemPrice>R${item.price}</ItemPrice>
            </InfoContainer>
            <RightContainer>
              <QuantitySelected>0</QuantitySelected>
              <CardButton type="submit" variant="contained">
                adicionar
              </CardButton>
            </RightContainer>
          </CardContainer>
        );
      })}
    </RestaurantItemCardContainer>
  );
}

export default RestaurantItemCard;
