import React from "react";
import styled from "styled-components";

/////////////////////
//
//  PROPS:
//  text
//
/////////////////////

import InfoIcon from "../assets/icons/info-red.svg";

const StyledDiv = styled.div`
  width: 100%;
  background: #fff;
  max-width: 400px;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  position: relative;
  :after{
    content: "";
    background-image: url(${InfoIcon});
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    position: absolute;
    top: -8px;
    right:-8px;
    z-index: 10;
  }
  .info-paragraph{
    font-size: 16px;
    color: #333;
    padding-top: 10px;
    text-align: center;
  }
  .info-icon{
    width: 30px;
  }
`;
const InfoWrapper = props => {
  return(
    <StyledDiv>
      <p className="info-paragraph">{props.text}</p>
      {/* <img  src={InfoIcon}/> */}
    </StyledDiv>
  );
}

export default InfoWrapper;