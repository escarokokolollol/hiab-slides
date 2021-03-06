import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BlackBoxHeading from "../../components/BlackBoxHeading"
import BackgroundImage from "../../components/styled/BackgroundImage";
import InfoWrapper from "../../components/InfoWrapper";

//images
import Background from "../../assets/images/hiab/hiabtrees01.jpg";
import InfoIcon from "../../assets/icons/info-red.svg";

const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  .box{
    opacity: 0;
  }
  .show-box{
    opacity: 1;
    transition: opacity 2s ease;
  }
  .jump{
    animation-name: jumpAni; 
    animation-duration: 1.5s;
    animation-direction: alternate;
    animation-timing-function: ease;
  }

  @keyframes jumpAni {
    0%   {transform: scale(1);}
    10%   {transform: scale(1.2);}
    50%  {transform: scale(1);}
    60% {transform: scale(1.2);}
    100% {transform: scale(1);}
  }
  .info-button{
    position: absolute;
    top: 0;
    right: 0;
    transform: scale(1);
    transition: transform .3s ease;
  }
  .info-button:hover{
    cursor: pointer;
    transform: scale(1.2);
    transition: transform .3s ease;
  }
  .info-wrapper-wrapper{
    position: absolute;
    bottom: -80;
    right: -230px;
    width: 300px;
  }  

  .show{
    opacity: 1;
    transition: all .2s ease;
  }
  .hide{
    opacity: 0;
    transform: scale(1.5);
    transition: all .1s ease;
  }

  @media ${props => props.theme.secondBreakpoint}{
    .box{
      .BlackBoxHeading{
        width: 500px;
        p.over{
          font-size: 22px;
        }
        h1{
          font-size: 59px;
          line-height: 59px;
        }
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .box{
      .BlackBoxHeading{
        width: 600px;
        p.over{
          font-size: 27px;
        }
        h1{
          font-size: 76px;
          line-height: 76px;
        }
      }
    }
  }
  
`;

const Page01 = () => {

  const [toggle, setToggle] = useState();
  const [infoButtonJump, setInfoButtonJump] = useState(false);
  const [showBox, setShowBox] = useState(false);

  useEffect( () => {
    setTimeout( () => {
      setInfoButtonJump(true);
    },3000);

    setTimeout(() => {
      setShowBox(true);
    }, 1000);
  });

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}> 
        <StyledDiv>
          <div className={`box ${showBox ? "show-box" : ""}`}>
            <BlackBoxHeading className="BlackBoxHeading" textOver="When it comes to the loader crane" title="All roads lead to Hudiksvall!">
              <img 
                onClick={() => setToggle(!toggle)} 
                className={`info-button ${infoButtonJump ? "jump" : ""}`}
                src={InfoIcon}
                alt="info button"
              />
                <div className={`info-wrapper-wrapper ${toggle ? "show" : "hide"}`}>
                  <InfoWrapper text="Did you know… Sweden is so long that to drive from Malmö in the south to Abisko in the north is just over 2,000 km, the same as from Malmö to Rome, Italy."/>
                </div>
            </BlackBoxHeading>
          </div>
          <Navigation to="/about-hiab/page02"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
};

export default Page01;
