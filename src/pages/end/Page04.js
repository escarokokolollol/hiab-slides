import React, { useState } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// popup
import HiabView from "./Page03Views/Hiab";
import EfferView from "./Page03Views/Effer";
import BothView from "./Page03Views/Both";

// images
import Background from "../../assets/images/effer_hiab-background.jpg";
import closeIcon from "../../assets/icons/big-red-button.png";

const StyledDiv = styled.div`
  height: 100vh;
  display: grid;
  align-content: center;

  ${'' /* padding: 100px; */}
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
      grid-template-columns: 1fr 1fr 1fr;
      align-content: center;
      .grid-item{
        ${'' /* height: 20vh; */}
        background: ${props => props.theme.red};
        color: #fff;
        padding: 20px;
        transition: all .3s ease;
        h1{
          ${'' /* width: 80%; */}
        }
        h2{
          font-size: 17px;
          margin: 0 0 8px;
          text-transform: uppercase;
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
  .popup{
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(55,55,55, 0.8);
    top: 0;
    left: 0;
    z-index: 100;
    padding: 60px;

    .close-icon{
      position: absolute;
      bottom:60px;
      right:60px;
      width: 70px;
      z-index: 99;
      transform: rotate(180deg);
    }
    .close-icon:hover{
      cursor: pointer;
    }
  }

  @media ${props => props.theme.secondBreakpoint}{
    .content-inner{
      h1.title{
        font-size: 67px;
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
  .content-inner{
    h1.title{
      font-size: 97px;
      max-width: 1200px;
    }
  }
 
  ${'' /* transition */}
  ${'' /* {`popup ${simplicity ? "show" : "hide"}`} */}
  .hide{
    opacity: 0;
    z-index: -10;
    transition: opacity .3s ease;
  }
  .show{
    opacity: 1;
    z-index: 30;
    transition: opacity .3s ease;
  }
`;

const Page04 = () => {

  const [toggleHiab, setToggleHiab] = useState(false);
  const [toggleEffer, setToggleEffer] = useState(false);
  const [toggleBoth, setToggleBoth] = useState(false);

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>

          <div className="content-inner">
            <h1 className="title">Get inspired</h1>
            <p>Explore these suggested ideas for how set the tone for your communication</p>
            <div className="grid">
              <div onClick={() => setToggleHiab(true)} className="grid-item">
                <h1>HIAB</h1>
              </div>
              <div onClick={() => setToggleEffer(true)} className="grid-item">
                <h1>EFFER</h1>
              </div>
              <div onClick={() => setToggleBoth(true)} className="grid-item">
                <h1>HIAB & EFFER</h1>
              </div>
            </div>
          </div>

          {toggleHiab ?
            <div className={`popup`}>
              <HiabView />
              <img className="close-icon" src={closeIcon} alt="close icon" onClick={() => setToggleHiab(false)} />
            </div>
            : ""}

          {toggleEffer ?
            <div className={`popup`}>
              <EfferView />
              <img className="close-icon" src={closeIcon} alt="close icon" onClick={() => setToggleEffer(false)} />
            </div>
            : ""}

          {toggleBoth ?
            <div className={`popup`}>
              <BothView />
              <img className="close-icon" src={closeIcon} alt="close icon" onClick={() => setToggleBoth(false)} />
            </div>
            : ""}

          <Navigation backTo="/end03" to="/end05" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page04;