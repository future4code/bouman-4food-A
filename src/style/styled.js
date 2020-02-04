import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";

export const StyledImg = styled.img`
  width: 104px;
  height: 58px;
  object-fit: contain;
  
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  justify-content:center;
`

export const StyledAppBar = styled(AppBar)`
  width: 360px;
  height: 44px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`;

export const StyledBackImg = styled.img`
  margin-right: 325px;
  margin-top: 9px;
`;

export const CreateUserContainer = styled.div`
  width: 300px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 0px 5px;
  margin: 10px;
  background-color: white;
  :hover {
    box-shadow: 0px 0px 10px;
  }
`;
