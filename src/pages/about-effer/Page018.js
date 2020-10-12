import React from "react";
import styled from "styled-components";

import BackgroundImage from "../../components/styled/BackgroundImage";
import Navigation from "../../components/Navigation";
import RedArrowLink from "../../components/RedArrowLink";

import EfferLogo from "../../assets/icons/effer-logo.svg";
import Background from "../../assets/images/effer_hiab-background.jpg";

const StyledDiv = styled.div`
  height: 70vh;
  text-align: center;
  h2{
    margin: 0;
    padding-top: 20px;
  }
  h1{
    font-size: 66px;
    margin: 0;
    ${'' /* padding-bottom: 60px; */}
  }
  .logo{
    position: absolute;
    top: 20px;
    left: 30px;
  }
  ${'' /* .video-container{
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    video{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  } */}

  .RedArrowLink-wrapper{
    display: inline;
    position: absolute;
    bottom: 50px;
    width: 40%;
    left: 30%;
  }
  @media ${props => props.theme.firstBreakpoint}{
  }
  @media ${props => props.theme.secondBreakpoint}{
    .RedArrowLink-wrapper{
      width: 30%;
      left: 35%;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .RedArrowLink-wrapper{
      width: 20%;
      left: 40%;
    }
  }
`;


const Page018 = props => {
  return(
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <img className="logo" alt="effer logo" src={EfferLogo} />
          
          <h2>If we could boil it down to just one word, it would be…</h2>
          <h1>EXTREME</h1>
          <div className="video-container">
            <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/xC6J4T_hUKg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <div className="RedArrowLink-wrapper">
            <RedArrowLink text="Compare with hiab" toWhere="dont now yet"/>
          </div>

          <Navigation backTo="/about-effer/page017" to="/about-effer/page019"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page018;