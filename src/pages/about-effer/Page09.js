import React, { useState } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import Background from "../../assets/images/effer/effernewbg.png";
import EfferLogo from "../../assets/icons/effer-logo.svg";
import closeIcon from "../../assets/icons/close-menu.svg";

const StyledDiv = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 90%;
  max-width: 1200px;
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

  .paragraphs{
    display: grid;
    grid-gap: 60px;
    grid-template-columns: 1fr 1fr;
    p{
      font-weight: 100;
      font-size: 22px;
      text-align: left;
    }
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
  .popup.show-popup{
    opacity: 1;
    z-index:1;
    transition: all .3s ease;
  }
  .popup{
    display: grid;
    justify-items: center;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    z-index: 100;
    padding: 20px;
    z-index:-1;
    opacity: 0;
    transition: all .3s ease;
    .compare-text{
      padding: 30px 50px;
      background: #555;
      color: #fff;
      width: 70%;
      max-width: 1000px;
      margin: 0 auto;
      position: relative;
      .paragraphs{
        display: grid;
        grid-gap: 40px;
        grid-template-columns: 1fr 1fr;
      }
      h2{
        margin:0;
        margin-top: 10px;
        font-size: 34px;
      }
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

const Page09 = () => {

  const [compare, setCompare] = useState(false);

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
         <img className="logo" alt="effer logo" src={EfferLogo} />

          <h1>What we offer</h1>
          <div className="paragraphs">
            <p>EFFER helps customers who need specialized cranes designed <strong>to conquer the toughest challenges.</strong></p>
            <p>We do this by passionately building and configuring cranes to meet these customers’ tough demands for <strong>extreme performance and durability.</strong></p>
          </div>

          <p onClick={() => setCompare(true)} className="compare">Compare with HIAB</p>

          <div className={`popup ${compare ? "show-popup" : ""}`}>
            <div className="compare-text">
              <h2>What HIAB offers</h2>
              <div className="paragraphs">
                <p>HIAB helps customers who are seeking reliable, high quality loader cranes that will <strong>enable them to optimise their business.</strong></p>
                <p>HIAB does this by providing smart solutions and intelligent services for achieving consistently <strong>smooth, safe and efficient performance.</strong></p>
              </div>
              <img className="close-icon" src={closeIcon} alt="close" onClick={ () => setCompare(false)}/>
            </div>
          </div>

          <Navigation backTo="/about-effer/page08" to="/about-effer/page012"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page09;
