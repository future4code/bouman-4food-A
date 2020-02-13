import styled from "styled-components";
import Container from '@material-ui/core/Container';


export const WrapperAddress = styled.div`
  width: 100%;
  height: 90px;
  background-color: #eeeeee;
  top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const EditAddress = styled.div`
    display: flex;
    flex-direction: row;
    
`;

export const TitleAddress = styled.p`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin-left: 16px;
  margin-top: 20px;
`;

export const FontProfile = styled.p`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #000000;
  margin-left: 16px;
  margin-top: 8px;
`;



export const WrapperUserProfile = styled.div`
    display: block;
    position: absolute;
    top:50px;
    left:0px; 
    height:320px; 
    right:0px;
    overflow:hidden;
    
`;
export const LineHr = styled.hr`
  margin-left: 16px;
  margin-right: 16px;
  border: 0.7px solid black;
`;

export const ContainerResquestHistory = styled(Container)`
  position: absolute;
  top:320px;
  bottom:50px;
  left:0px;
  right:0px;
  overflow:scroll;
 
`;