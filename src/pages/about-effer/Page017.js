import React, { useState } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import CroSStab from "./innovations/CroSStab";
import Vstab from "./innovations/Vstab";
import ContinuouSlewing from "./innovations/ContinuouSlewing";
import SecondJib from "./innovations/SecondJib";

// images
import Background from "../../assets/images/effer/effer-inovation03.jpg";
import closeIcon from "../../assets/icons/close-menu.svg";

const StyledDiv = styled.div`
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;

  ${'' /* padding: 100px; */}
  .content-inner{
    background: rgba(0,0,0,0.6);
    padding: 40px;
    text-align: center;
    h1{
      margin: 0 auto 40px;
      max-width: 870px;
    }
    .grid{
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-content: center;
      .grid-item{
        ${'' /* height: 20vh; */}
        color: #fff;
        line-height: 90px;
        h1{
          width: 80%;
          background: ${props => props.theme.red};
          transition: all .2s ease;
        }
        h1:hover{
          cursor: pointer;
          color: ${props => props.theme.red};
          background: #fff;
          transition: all .4s ease;
        }
      }
    }
  }
  .popup{
    display: grid;
    justify-items: center;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #000;
    top: 0;
    left: 0;
    z-index: 100;
    padding: 20px;
    .close-icon{
      position: absolute;
      top: 40px;
      right: 40px;
      width: 40px;
      height: 40px;
      transition: all .2s ease;
    }
    .close-icon:hover{
      cursor: pointer;
      transform: scale(1.2);
      transition: all .2s ease;
    }
  }

  @media ${props => props.theme.thirdBreakpoint}{
  .content-inner{
    h1{
      max-width: 1200px;
    }
  }
 
`;

const Page017 = () => {

  const [crosstab, setCrosstab] = useState(false);
  const [vstab, setVstab] = useState(false);
  const [continuouSlewing, setContinuouSlewing] = useState(false);
  const [secondJib, setSecondJib] = useState(false);

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>

          <div className="content-inner">
            <h1>Take a look at some of the innovations that have set EFFER apart. Explore each one before moving on.</h1>
            <div className="grid">
              <div className="grid-item">
                <h1 onClick={ () => setCrosstab(true)}>CroSStab</h1>
              </div>
              <div className="grid-item">
                <h1 onClick={ () => setVstab(true)}>V-Stab</h1>
              </div>
              <div className="grid-item">
                <h1 onClick={ () => setContinuouSlewing(true)}>Continuous Slewing</h1>
              </div>
              <div className="grid-item">
                <h1 onClick={ () => setSecondJib(true) }>Second Jib</h1>
              </div>
            </div>
          </div>

          {crosstab ? 
            <div className="popup">
              <CroSStab />
              <img className="close-icon" src={closeIcon} alt="close" onClick={ () => setCrosstab(false)}/> 
            </div>
            : ""
          }
          {vstab ? 
            <div className="popup">
              <Vstab />
              <img className="close-icon" src={closeIcon} alt="close" onClick={ () => setVstab(false)}/> 
            </div>
            : ""
          }

          {continuouSlewing ? 
            <div className="popup">
              <ContinuouSlewing />
              <img className="close-icon" src={closeIcon} alt="close" onClick={ () => setContinuouSlewing(false)}/> 
            </div>
            : ""
          }

          {secondJib ? 
            <div className="popup">
              <SecondJib />
              <img className="close-icon" src={closeIcon} alt="close" onClick={ () => setSecondJib(false)}/> 
            </div>
            : ""
          }
          
          <Navigation backTo="/about-effer/page016" to="/about-effer/page018"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page017;