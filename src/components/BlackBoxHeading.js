import React from "react";
import styled from "styled-components";

//////////////
// 
//  PROPS:
//  textOver
//  Title
//  textUnder
// 
//////////////

const StyledDiv = styled.div`
  position: absolute;
  top: 60px;
  left: 60px;
  width: 50%;
  padding: 60px;
  background: rgba(20,20,20, 0.9);
  max-width: 800px;
  h1{
    margin: 20px 0;
    font-size: 52px;
    line-height: 52px;
  }
  p{
    font-size: 20px;
  }

  @media ${props => props.theme.secondBreakpoint}{
    h1{
      font-size: 76px;
      line-height: 76px;
    }
    p{
      font-size: 24px;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    h1{
      font-size: 90px;
      line-height: 90px;
    }
    p{
      font-size: 28px;
    }
  }

`;

const BlackBoxHeading = (props) => {
  return(
    <StyledDiv>
      {props.textOver ? <p>{props.textOver}</p> : ""}
      {props.title ? <h1>{props.title}</h1> : ""}
      {props.textUnder ? <p>{props.textUnder}</p> : ""}
      {props.children}
    </StyledDiv>
  );
}

export default BlackBoxHeading;