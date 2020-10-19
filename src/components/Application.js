import React from "react";
import styled from "styled-components";

import efferLogo from "../assets/icons/effer-logo.svg";
import hiabLogo from "../assets/icons/hiab-logo.svg";


///////////////
//
//  PROPS:
//  title
//  textUnderTitle
//  hiabHtml
//  efferHtml
//
///////////////

const StyledDiv = styled.div`
  h1{
    margin: 0;
  }
  .content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    .hiab{

    }
    .effer{

    }
  }

`;

const Application = props => {
  return (
    <StyledDiv>
      <h1>{props.title}</h1>
      <p>{props.textUnderTitle}</p>
      <div className="content">
        <div className="hiab">
          <img src={hiabLogo} alt="hiab logo"/>
          {props.hiabHtml}
        </div>
        <div className="effer">
          <img src={efferLogo} alt="effer logo"/>
          {props.efferHtml}
        </div>

      </div>


    </StyledDiv>
  );
}

export default Application;
