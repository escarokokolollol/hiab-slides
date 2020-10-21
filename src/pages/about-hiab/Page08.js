import React, { useState } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import Background from "../../assets/images/hiab/hiab-bg-dark.jpg";
import HiabLogo from "../../assets/icons/hiab-logo.svg";
import closeIcon from "../../assets/icons/close-menu.svg";

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
    bottom: 50px;
    padding: 10px 20px;
    font-weight: 900;
    transition: all .3s ease;
  }
  .compare:hover{
    cursor: pointer;
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

  .popup{
    display: grid;
    justify-items: center;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.4);
    top: 0;
    left: 0;
    z-index: 100;
    padding: 20px;
    .compare-text{
      padding: 30px 50px;
      background: #fff;
      color: #000;
      width: 50%;
      margin: 0 auto;
      position: relative;
      .close-icon{
        position: absolute;
        top: 20px;
        right: 20px;
        width: 20px;
        height: 20px;
        transition: all .2s ease;
      }
      .close-icon:hover{
        cursor: pointer;
        transform: scale(1.2);
        transition: all .2s ease;
      }
    }
  }
`;

const Page08 = () => {

  const [compare, setCompare] = useState(false);

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
         <img className="logo" alt="hiab logo" src={HiabLogo} />

          <h1>What we offer</h1>
          <p>HIAB helps customers who are seeking reliable, high quality loader cranes that will <strong>enable them to optimise their business.</strong></p>

          <p>We do this by providing smart solutions and intelligent services for achieving consistently <strong>smooth, safe and efficient performance.</strong></p>
          
          <p onClick={() => setCompare(true)} className="compare">Compare with HIAB</p>

          {compare && 
            <div className="popup">
              <div className="compare-text">
                <h2>What we offer (HIAB)</h2>
                <p>EFFER helps customers who need specialized cranes designed to conquer the toughest challenges.</p>
                <p>We do this by passionately building and configuring cranes to meet these customers’ tough demands for extreme performance and durability.</p>
                <img className="close-icon" src={closeIcon} alt="close" onClick={ () => setCompare(false)}/> 
              </div>
            </div>
          }
          <Navigation backTo="/about-hiab/page07" to="/about-hiab/page09"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page08;