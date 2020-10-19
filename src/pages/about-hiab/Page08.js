import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import Background from "../../assets/images/hiab/hiab-bg-dark.jpg";
import HiabLogo from "../../assets/icons/hiab-logo.svg";

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

const Page08 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
         <img className="logo" alt="hiab logo" src={HiabLogo} />

          <h1>What we offer</h1>
          <p>HIAB helps customers who are seeking reliable, high quality loader cranes that will <strong>enable them to optimise their business.</strong></p>

          <p>We do this by providing smart solutions and intelligent services for achieving consistently <strong>smooth, safe and efficient performance.</strong></p>

          <Link className="compare" to="/about-effer/page09">Compare with EFFER</Link>
          <Navigation backTo="/about-hiab/page07" to="/about-hiab/page09"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page08;