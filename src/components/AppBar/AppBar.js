import React from "react";
import { StyledAppBar } from "../../style/styled";
import BackButton from "../../images/back.svg";

function AppBarComponent(props) {
  return (
    <StyledAppBar>
      <img src={BackButton} onClick={props.onClickButton} />
    </StyledAppBar>
  );
}

export default AppBarComponent;
