import React from "react";
import { Paper } from '@material-ui/core';
import styled from "styled-components"


const RequestHistoryWrapper = styled.div`
    width: 360px;
    height: 110px;
    display: flex;
    justify-content:center;
    align-items:flex-end;
`;


const TypoRequest = styled.p`
    width: 296px;
    height: 18px;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e8222e;

    padding:0px 0px 0px 16px;
    margin: 0px;
    
`;

const TypoData = styled.p`
    width: 296px;
    height: 18px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #000000;

    padding:0px 0px 0px 16px;
    margin:0;
`;

const TypoSubTotal = styled.p`
    width: 296px;
    height: 18px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;

    padding:0px 0px 0px 16px;
    margin:0px;
    
`;

const PaperStyled = styled(Paper)`
    width: 328px;
    height: 102px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    display:flex;
    flex-direction: column;
    justify-content:space-evenly;

`;



export function RequestHistoryCard(props) {
    const options = {year:"numeric", month : "long", day: "numeric" }
  return (
    <RequestHistoryWrapper>
        <PaperStyled>
                <TypoRequest>
                   {props.requestData.restaurantName}
                </TypoRequest>
                <TypoData>
                {new Date(props.requestData.createdAt).toLocaleDateString('pt-BR',options)}
                </TypoData>
                <TypoSubTotal>
                    SUBTOTAL: R$ {Number(props.requestData.totalPrice).toFixed(2)}
                </TypoSubTotal>
        </PaperStyled>
    </RequestHistoryWrapper>    
        
  );
}

export default RequestHistoryCard;