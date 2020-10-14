import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// components
import SingleHeadingMiddle from "../../pagetemplates/SingleHeadingMiddle";
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import Background from "../../assets/images/effer_hiab-background.jpg";
import EfferLogo from "../../assets/icons/effer-logo.svg";

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

  p{
    font-weight: 100;
    max-width: 890px;
    font-size: 22px;
    text-align: left;
  }
  .compare{
    font-size: 22px;
    color: ${props => props.theme.red};
    position: absolute;
    bottom: 80px;
    padding: 10px 20px;
    font-weight: 900;
    transition: all .3s ease;
  }
  .compare:hover{
    background: ${props => props.theme.red};
    color: #fff;
    transition: all .3s ease;
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

const Page09 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
         <img className="logo" alt="effer logo" src={EfferLogo} />

          <h1>What we offer</h1>
          <p>EFFER helps customers who need specialized cranes designed <strong>to conquer the toughest challenges.</strong></p>

          <p>We do this by passionately building and configuring cranes to meet these customers’ tough demands for <strong>extreme performance and durability.</strong></p>

          <Link className="compare" to="Compare with HIAB">Compare with HIAB</Link>
          <Navigation backTo="/about-effer/page08" to="/about-effer/page012"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page09;