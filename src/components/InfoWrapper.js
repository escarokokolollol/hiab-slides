import React from "react";
import styled from "styled-components";

/////////////////////
//
//  PROPS:
//  text
//
/////////////////////

import InfoIcon from "../assets/icons/info-icon.svg";
const StyledDiv = styled.div`
  width: 100%;
  background: #fff;
  max-width: 400px;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  .info-paragraph{
    font-size: 14px;
    color: #333;
    padding-left: 30px;
    padding-top: 10px;
  }
  .info-icon{
    width: 30px;
  }
`;
const InfoWrapper = props => {
  return(
    <StyledDiv>
      <img className="info-icon" src={InfoIcon} alt="info"/>
      <p className="info-paragraph">{props.text}</p>
    </StyledDiv>
  );
}

export default InfoWrapper;