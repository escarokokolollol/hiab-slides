import React from "react";
import styled from "styled-components";

import EfferLogo from "../assets/icons/effer-logo.svg";
import HiabLogo from "../assets/icons/hiab-logo.svg";


//////////////
// 
//  PROPS:
//  textOver
//  Title
//  textUnder
//  showEfferLogo
//  showHiabLogo
// 
//////////////

const StyledDiv = styled.div`
  width: 50%;
  background: rgba(10,10,10, 0.9);
  max-width: 800px;
  position: relative; ${'' /* relative is to position childs in this component */}
  padding: 60px;
  h1{
    margin: 20px 0;
    font-size: 32px;
    line-height: 32px;
  }
  p.over{
    font-size: 20px;
  }
  p.under{
    font-size: 16px;
  }
  @media ${props => props.theme.firstBreakpoint}{
    h1{
      font-size: 40px;
      line-height: 40px;
    }
  }

  @media ${props => props.theme.secondBreakpoint}{
    h1{
      font-size: 50px;
      line-height: 50px;
    }
    p.over{
      font-size: 24px;
    }
    p.under{
      font-size: 20px;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    h1{
      font-size: 64px;
      line-height: 64px;
    }
    p.over{
      font-size: 28px;
    }
    p.under{
      font-size: 22px;
    }
  }
`;

const BlackBoxHeading = (props) => {
  return(
    <StyledDiv className="BlackBoxHeading">
      {
        props.showEfferLogo ? 
          <img src={EfferLogo} className="logo" alt="effer logo"/>
        : ""
      }
      {
        props.showHiabLogo ? 
          <img src={HiabLogo} className="logo" alt="hiab logo"/>
        : ""
      }

      {props.textOver ? <p className="over">{props.textOver}</p> : ""}
      {props.titleOver ? <h1>{props.titleOver}</h1> : ""}
      {props.title ? <h1>{props.title}</h1> : ""}
      {props.titleUnder ? <h1>{props.titleUnder}</h1> : ""}
      {props.textUnder ? <p className="under">{props.textUnder}</p> : ""}
      {props.children}
    </StyledDiv>
  );
}

export default BlackBoxHeading;