import React from "react";
import styled from "styled-components";

import InfoIcon from "../assets/icons/info-icon.svg";

const InfoWrapper = ({text}) => {
  const StyledDiv = styled.div`
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    background: #fff;
    position: absolute;
    bottom: 0;
    color: #333;
    width: 100%;
    .info-icon{
      width: 20px;
    }
    .info-paragraph{
      font-size: 14px;
      padding-left: 30px;
      padding-top: 10px;
    }

    @media (min-width: 960px) {
      top:30px;
      bottom: initial;
      right: 30px;
      max-width: 400px;
      background: #fff;
      padding: 2.4rem 3rem;
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
    }
  `;

  return(
    <StyledDiv>
      <img className="info-icon" src={InfoIcon} alt="info"/>
      <p className="info-paragraph">{text}</p>
    </StyledDiv>
  );
}

export default InfoWrapper;