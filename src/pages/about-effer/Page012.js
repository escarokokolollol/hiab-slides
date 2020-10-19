import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// components
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

const Page012 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
         <img className="logo" alt="effer logo" src={EfferLogo} />

          <h1>What sets us apart</h1>
          <p>Unlike other manufacturers, EFFER offers customised loader cranes with 
              <strong> exceptional reach and power-to-weight ratio in order to reach and carry what others can’t. 
              </strong> Innovations such as CroSStab, V-Stab, continuous slewing and the use of second jibs all demonstrate technologies that make this possible.
            </p>

          <p>
            More than that, we are known for providing the  
              <strong> industry’s highest level of crane customisation and personal attention,
              </strong> two of the most cited reasons why customers continue to make EFFER their number one choice.
           </p>

          <Link className="compare" to="/about-hiab/page09">Compare with HIAB</Link>
          <Navigation backTo="/about-effer/page09" to="/about-effer/page015"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page012;