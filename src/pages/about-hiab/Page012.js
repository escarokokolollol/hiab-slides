import React, { useState } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import CTC from "./innovations/CTC";
import SAM from "./innovations/SAM";
import SAF from "./innovations/SAF";
import HiConnect from "./innovations/HiConnect";

// images
import Background from "../../assets/images/hiab/hiab-bg.png";
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
          width: 90%;
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

const Page012 = () => {

  const [ctcToggle, setCtcToggle] = useState(false);
  const [samToggle, setSamToggle] = useState(false);
  const [safToggle, setSafToggle] = useState(false);
  const [hiConnectToggle, setHiConnectToggle] = useState(false);

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="content-inner">
            <h1>Here are just a few of the many innovations that have set HIAB apart. Explore each one before moving on.</h1>
            <div className="grid">
              <div className="grid-item">
                <h1 onClick={ () => setCtcToggle(true)}>Crane Tip Control</h1>
              </div>
              <div className="grid-item">
                <h1 onClick={ () => setSamToggle(true)}>Semi Automatic Motion</h1>
              </div>
              <div className="grid-item">
                <h1 onClick={ () => setSafToggle(true)}>Semi Automatic Folding</h1>
              </div>
              <div className="grid-item">
                <h1 onClick={ () => setHiConnectToggle(true) }>HiConnect</h1>
              </div>
            </div>
          </div>

          {ctcToggle ? 
            <div className="popup">
              <CTC />
              <img className="close-icon" src={closeIcon} alt="close" onClick={ () => setCtcToggle(false)}/> 
            </div>
            : ""
          }
          {samToggle ? 
            <div className="popup">
              <SAM />
              <img className="close-icon" src={closeIcon} alt="close" onClick={ () => setSamToggle(false)}/> 
            </div>
            : ""
          }

          {safToggle ? 
            <div className="popup">
              <SAF />
              <img className="close-icon" src={closeIcon} alt="close" onClick={ () => setSafToggle(false)}/> 
            </div>
            : ""
          }

          {hiConnectToggle ? 
            <div className="popup">
              <HiConnect />
              <img className="close-icon" src={closeIcon} alt="close" onClick={ () => setHiConnectToggle(false)}/> 
            </div>
            : ""
          }
          
          <Navigation backTo="/about-hiab/page011" to="/about-hiab/page013"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page012;