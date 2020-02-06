import React from "react";
import { StyledAppBar, StyledBackImg } from "../../style/styled";
import BackButton from "../../images/back.svg";
import styled from 'styled-components';

const Title = styled.p`
  width: 300px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`;

function AppBarComponent(props) {
  return (
      <StyledAppBar color="inherit" position="static">
        {props.imageDisplay && <StyledBackImg src={BackButton} onClick={props.onClickButton} />}
        <Title>{props.title}</Title>
      </StyledAppBar>
  );
}

export default AppBarComponent;
