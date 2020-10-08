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
//  showEfferLogo
//  showHiabLogo
//
//////////////

const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo{
    position: absolute;
    top: 20px;
    left: 30px;
  }

  p.paragraph-middle{
    text-align: center;
    max-width: 800px;
    font-weight: 700;
    margin: 0;
  }
  div.line{
    border-bottom: 2px solid ${props => props.theme.red};
    height: 42px;
    width: 40%;
  }
  @media ${props => props.theme.firstBreakpoint}{
    p.paragraph-middle{
      max-width: 600px;
      font-size: 32px;
      line-height: 40px;
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    p.paragraph-middle{
      max-width: 700px;
      font-size: 42px;
      line-height: 50px;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    p.paragraph-middle{
      max-width: 920px;
      font-size: 56px;
      line-height: 62px;
    }
  }
`;

const ParagraphMiddle = props => {
  return(
    <div className="page-transition">
      <BackgroundImage image={props.backgroundImage}>
        <StyledDiv>

          {props.showEfferLogo ? <img className="logo" alt="effer logo" src={EfferLogo} /> : ""}
          {props.showHiabLogo ? <img className="logo" alt="hiab logo" src={HiabLogo} /> : ""}
    
          <p className="paragraph-middle">{props.title}</p>
          <div className="line"></div>

          {props.children}
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default ParagraphMiddle;