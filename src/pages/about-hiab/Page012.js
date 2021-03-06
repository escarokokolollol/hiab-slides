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
import Background from "../../assets/images/hiab/hiabnewbg0102.jpg";
import closeIcon from "../../assets/icons/big-red-button.png";

const StyledDiv = styled.div`
 height: 100vh;
  display: grid;
  align-content: center;

  .content-inner{
    text-align: center;
    h1{
      margin: 0 auto;
    }
    p{
      font-size: 22px;
      margin-bottom: 40px;
      padding: 0 60px;
    }
    .grid{
      display: grid;
      padding: 0 60px;
      grid-gap: 20px;
      grid-template-columns: 1fr 1fr;
      align-content: center;
      .grid-item{
        ${'' /* height: 20vh; */}
        background: ${props => props.theme.red};
        color: #fff;
        padding: 30px 20px;
        transition: all .3s ease;
        h1{
          font-size: 22px;
        }
      }
      .grid-item:hover{
        cursor: pointer;
        background: #fff;
        color: ${props => props.theme.red};
        transition: all .3s ease;
      }
    }
  }
  .popup.show{
    opacity: 1;
    z-index: 10;
    transition: all .4s ease;
  }
  .popup.hide{
    opacity: 0;
    z-index: -10;
    transition: all .4s ease;
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
    .close-arrow{
      position: absolute;
      bottom: 60px;
      right: 60px;
      width: 70px;
      height: 70px;
      transform: rotate(180deg);
    }
    .close-arrow:hover{
      cursor: pointer;
    }
  }

  @media ${props => props.theme.secondBreakpoint}{
    .content-inner{
      h1.title{
        font-size: 67px;
      }
      .grid{
        grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      }
    }
  }
  @media (min-width: 1200px){
    .content-inner{
      .grid{
      }
    }
  
  }
  @media ${props => props.theme.thirdBreakpoint}{
  .content-inner{
    h1.title{
      font-size: 97px;
      max-width: 1200px;
    }
    .grid{
      .grid-item{
        h1{
          font-size: 30px;
        }
      }
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
            <h1 className="title">Do it smarter</h1>
            <p>Explore the innovations that have set HIAB apart and help optimise business.</p>
            <div className="grid">
              <div onClick={() => setCtcToggle(true)} className="grid-item">
                <h1>CTC</h1>
              </div>
              <div onClick={() => setSamToggle(true)} className="grid-item">
                <h1>SAM</h1>
              </div>
              <div onClick={() => setSafToggle(true)} className="grid-item">
                <h1>SAF</h1>
              </div>
              <div onClick={() => setHiConnectToggle(true)} className="grid-item">
                <h1>HiConnect</h1>
              </div>
            </div>
          </div>

          <div className={`popup ${ctcToggle ? "show" : "hide"}`}  >
            <CTC />
            <img className="close-arrow" src={closeIcon} alt="close" onClick={() => setCtcToggle(false)} />
          </div>

          <div className={`popup ${samToggle ? "show" : "hide"}`}  >
            <SAM />
            <img className="close-arrow" src={closeIcon} alt="close" onClick={() => setSamToggle(false)} />
          </div>

          <div className={`popup ${safToggle ? "show" : "hide"}`}  >
            <SAF />
            <img className="close-arrow" src={closeIcon} alt="close" onClick={() => setSafToggle(false)} />
          </div>

          <div className={`popup ${hiConnectToggle ? "show" : "hide"}`}  >
            <HiConnect />
            <img className="close-arrow" src={closeIcon} alt="close" onClick={() => setHiConnectToggle(false)} />
          </div>

          <Navigation backTo="/about-hiab/page09" to="/about-hiab/page010" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page012;