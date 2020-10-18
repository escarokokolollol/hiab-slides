import React, { useState } from "react";
import styled from "styled-components";

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
          <h1>HIAB</h1>
          {props.hiabHtml}
        </div>
        <div className="effer">
          <h1>EFFER</h1>
          {props.efferHtml}
        </div>

      </div>


    </StyledDiv>
  );
}

export default Application;
