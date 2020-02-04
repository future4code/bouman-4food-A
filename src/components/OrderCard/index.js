import React from "react";
import styled from "styled-components"
import Clock from "../../images/clock.svg";

const CardContainer = styled.div`
  height: 118px;
  position: fixed;
  bottom: 49px;
  background: #e8222e;
  display: flex;
  align-items: center;
`

const Image = styled.div`
  width: 22.22vw;
  text-align: center;
`

const Info = styled.div`
  width: 78.88vw;
`

const Confirmation = styled.p`
  width: 256px;
  height: 18px;
  font-family: Montserrat;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #ffffff;
  margin-block-start: 24px;
  margin-block-end: 8px;
`

const Name = styled.p`
width: 256px;
  height: 18px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  margin-block-start: 8px;
  margin-block-end: 8px;
`

const Subtotal = styled.p`
  width: 256px;
  height: 18px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  margin-block-start: 8px;
  margin-block-end: 24px;
`


function OrderCard(props) {
  return (
    <CardContainer>
      <Image>
        <img src={Clock} />
      </Image>
      <Info>
        <Confirmation>Pedido em andamento</Confirmation>
        <Name>Bullguer Vila Madalena</Name>
        <Subtotal>SUBTOTAL R$67,00</Subtotal>
      </Info>
    </CardContainer>
  );
}

export default OrderCard;
