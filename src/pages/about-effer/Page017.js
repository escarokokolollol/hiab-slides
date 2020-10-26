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
import Background from "../../assets/images/effer/effer-bg-dark04.jpg";
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
          font-size: 17px;
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
        .grid-item{
          h1{
            font-size: 18px;
          }  
        }
      }
    }
  }
  @media (min-width: 1200px){
    .content-inner{
      .grid{
        .grid-item{
          h1{
            font-size: 22px;
          }
        }
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
          font-size: 26px;
        }
      }
    }
  }
 
  ${'' /* transition */}
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
            <h1 className="title">Reach what others can’t</h1>
            <p>Explore the innovations that have set EFFER apart and enable extreme challenges. </p>
            <div className="grid">
              <div onClick={() => setCrosstab(true)} className="grid-item">
                <h1>CroSStab</h1>
              </div>
              <div onClick={() => setVstab(true)} className="grid-item">
                <h1>V-stab</h1>
              </div>
              <div onClick={() => setContinuouSlewing(true)} className="grid-item">
                <h1>Continuous Slewing</h1>
              </div>
              <div onClick={() => setSecondJib(true)} className="grid-item">
                <h1>Second Jib</h1>
              </div>
            </div>
          </div>

          {crosstab ?
            <div className="popup">
              <CroSStab />
              <img className="close-arrow" src={closeIcon} alt="close" onClick={() => setCrosstab(false)} />
            </div>
            : ""
          }
          {vstab ?
            <div className="popup">
              <Vstab />
              <img className="close-arrow" src={closeIcon} alt="close" onClick={() => setVstab(false)} />
            </div>
            : ""
          }

          {continuouSlewing ?
            <div className="popup">
              <ContinuouSlewing />
              <img className="close-arrow" src={closeIcon} alt="close" onClick={() => setContinuouSlewing(false)} />
            </div>
            : ""
          }

          {secondJib ?
            <div className="popup">
              <SecondJib />
              <img className="close-arrow" src={closeIcon} alt="close" onClick={() => setSecondJib(false)} />
            </div>
            : ""
          }

          <Navigation backTo="/about-effer/page012" to="/about-effer/page015" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page017;