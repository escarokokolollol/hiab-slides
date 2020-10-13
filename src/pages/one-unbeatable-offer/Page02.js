import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

import EfferLogo from "../../assets/icons/effer-logo.svg";
import HiabLogo from "../../assets/icons/hiab-logo.svg";

// images
import Background from "../../assets/images/effer_hiab-background.jpg";

const StyledDiv = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1{
    margin: 0;
    margin-bottom: 40px;
    text-align: center;
  }
  .grid{
    margin: 0 auto;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    .item{
      width: 200px;
      background: #333;
      padding: 20px 40px;
      text-align: center;
      h3{
        margin:0;
        text-transform: uppercase;
      }
      img{
        width: 120px;
      }
    }
  }

  @media ${props => props.theme.firstBreakpoint}{
  h1{
    font-size: 44px;
  }
  .grid{
    .item{
      width: 100%;
      img{
        width: 140px;
      }
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
  h1{
    font-size: 64px;
  }
  .grid{
    .item{
      img{
        width: 170px;
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
  h1{
    font-size: 64px;
  }
  .grid{
    .item{
      width: 600px;
      h3{
        font-size: 28px;
      }
      img{
        width: 220px;
      }
    }
  }

`;

const Page02 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <h1>For every need </h1>
          <div className="grid">
            <div className="item">
              <h3>Low-Medium</h3>
              <img src={HiabLogo} alt="hiab logo"/>
            </div>
            <div className="item">
              <h3>Midrange</h3>
              <img src={EfferLogo} alt="effer logo"/>
              <img src={HiabLogo} alt="hiab logo"/>
            </div>
            <div className="item">
              <h3>Heavy</h3>
              <img src={EfferLogo} alt="effer logo"/>
              <img src={HiabLogo} alt="hiab logo"/>
            </div>
            <div className="item">
              <h3>Super heavy</h3>
              <img src={EfferLogo} alt="effer logo"/>
            </div>
          </div>
          <Navigation backTo="/one-unbeatable-offer/page01" to="/one-unbeatable-offer/page03"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page02;