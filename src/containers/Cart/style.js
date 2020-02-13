import styled from "styled-components";
import RadioGroup from '@material-ui/core/RadioGroup';

export const WrapperAddress = styled.div`
  width: 100%;
  height: 76px;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
`;

export const FontAddressTitle = styled.label`
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin-left: 16px;
  margin-top: 16px;
`;

export const FontAddressUser = styled.label`
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #000000;
  margin-left: 16px;
  margin-top: 8px;
`;

export const TextCart = styled.h4`
  width: 296px;
  height: 18px;
  opacity: 0.89;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
  margin: 0 auto;
  margin-top: 30px;
`;

export const FreightPrice = styled.p`
  width: 104px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: right;
  color: #000000;
  margin-left: 240px;
  margin-right: 16px;
    /*iPhone 5/SE*/
  @media (width: 320px){ 
        margin-left: 170px;
        margin-right: 25px; 
  }
/*iPhone 5/SE*/
@media (width: 360px){
    margin-right: 16px; 
    margin-left: 220px;
  }
  margin-top: 83px;
`;

export const WrapperPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 14px;
`;

export const TitleDivPrice = styled.p`
  width: 164px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #000000;
  margin-left: 16px;
`;

export const TotalPrice = styled.p`
  width: 164px;
  height: 18px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;;
  letter-spacing: -0.43px;
  text-align: right;
  color: #e8222e;
    /*iPhone 5/SE*/
  @media (width: 320px){
        margin-right: 16px; 
  }
`;
export const FormOfPayment = styled.p`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #000000;
  margin-left: 16px;
  
`;
export const LineHr = styled.hr`
  margin-left: 16px;
  margin-right: 16px;
  border: 0.7px solid black;
`;

export const WrapperRadioButton = styled(RadioGroup)`
  margin-left: 16px;
  width: 360px;
  height: 100px;
  margin-top: 11px;
  margin-right: 16px;
`;

export const WrapperButtonConfirm = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  /*iPhone 6/7/8 plus*/ 
  margin-top: 130px;
  /*iPhone 6/7/8 */ 
  @media (height: 667px){
        margin-top: 60px;  
    }
  /*iPhone X */ 
  @media (height: 812px){
        margin-top: 100px;  
    }
  /*iPhone 5/SE */ 
  @media (height: 568px){
        margin-top: 10px;
    }
    /*Galaxy S5 */ 
  @media (height: 640px){
        margin-top: 35px;  
    }
`;

export const WrapperMain = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  margin-top: 55px;
  margin-bottom: 65px;
  /*iPhone 5/SE */ 
  height: 474px;
  /*Galaxy S5 */ 
  @media (height: 640px){
        height: 553px;  
  }
  /*iPhone X */ 
  @media (height: 812px){
        height: 800px;  
  }
  /*iPhone 6/7/8 plus*/ 
  @media (height: 736px){
        height: 653px;  
  }
  /*iPhone 6/7/8 */ 
  @media (height: 667px){
        height: 600px;  
  }
  overflow: hidden;
  overflow-y: scroll;
`;
