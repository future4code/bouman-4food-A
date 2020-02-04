import React from "react";
import { StyledAppBar } from "../../style/styled";
import styled from "styled-components"

const Title = styled.p`
  width: 91px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
  margin: 0 auto;
  margin-top: 20px;
`;

function AppBarCart(props) {
  return (
    <StyledAppBar color="inherit">
      <Title>Meu carrinho</Title>
    </StyledAppBar>
  );
}

export default AppBarCart;