import React from "react";
import styled from "styled-components";

import BackgroundImage from "../components/styled/BackgroundImage";
import EfferLogo from "../assets/icons/effer-logo.svg";
import HiabLogo from "../assets/icons/hiab-logo.svg";

//////////////
//
//  PROPS:
//  backgroundImage
//  title
//  overTitle
//  underTitle
//  showEfferLogo
//  showHiabLogo
//
//////////////

const StyledDiv = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align:center;
  justify-content: center;
  align-items: center;
  .logo{
    position: absolute;
    top: 20px;
    left: 30px;
  }

  h1{
    margin: 0;
  }
  @media ${props => props.theme.firstBreakpoint}{
    h1{
      font-size: 52px;
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    h1{
      font-size: 72px;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    h1{
      font-size: 100px;
    }
  }
`;

const SingleHeadingMiddle = props => {
  return(
    <div className="page-transition">
      <BackgroundImage image={props.backgroundImage}>
        <StyledDiv>

          {props.showEfferLogo ? <img className="logo" alt="effer logo" src={EfferLogo} /> : ""}
          {props.showHiabLogo ? <img className="logo" alt="hiab logo" src={HiabLogo} /> : ""}
    
          <h1>{props.overTitle}</h1>
          <h1>{props.title}</h1>
          <h1>{props.underTitle}</h1>
          {props.children}
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default SingleHeadingMiddle;