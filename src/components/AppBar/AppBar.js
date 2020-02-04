import React from "react";
import { StyledAppBar, StyledBackImg } from "../../style/styled";
import BackButton from "../../images/back.svg";

function AppBarComponent(props) {
  return (
    <div>
      <StyledAppBar color="inherit" position="static">
        <StyledBackImg src={BackButton} onClick={props.onClickButton} />
      </StyledAppBar>
    </div>
  );
}

export default AppBarComponent;
