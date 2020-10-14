import React, { useState } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// popup
import Flexibility from "./views/Flexibility";
import Simplicity from "./views/Simplicity";
import Repetition from "./views/Repetition";
import Basket from "./views/Basket";

// images
import Background from "../../assets/images/effer_hiab-background.jpg";
import BackgroundPopup from "../../assets/images/effer/effer-big-05.jpg";
import closeIcon from "../../assets/icons/close-menu.svg";

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
      grid-template-columns: 1fr 1fr;
      align-content: center;
      .grid-item{
        ${'' /* height: 20vh; */}
        color: #fff;
        line-height: 100px;
        h1{
          ${'' /* width: 80%; */}
          background: ${props => props.theme.red};
          transition: all .2s ease;
        }
        h1:hover{
          cursor: pointer;
          color: ${props => props.theme.red};
          background: #fff;
          transition: all .4s ease;
        }
        h2{
          line-height: 20px;
          text-transform: uppercase;
          margin-top:0;
          color: ${props => props.theme.red};
        }
      }
    }
  }
  .popup{
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(55,55,55, 0.8);
    background: url(${BackgroundPopup});
    background-size: cover;
    top: 0;
    left: 0;
    z-index: 100;
    padding: 60px;

    .close-icon{
      position: absolute;
      bottom:60px;
      right:60px;
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
  @media ${props => props.theme.thirdBreakpoint}{
  .content-inner{
    h1.title{
      font-size: 97px;
      max-width: 1200px;
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

const Page03 = () => {

  const [flexibility, setFlexibility] = useState(false);
  const [simplicity, setSimplicity] = useState(false);
  const [repetition , setRepetition] = useState(false);
  const [basket , setBasket] = useState(false);

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>

          <div className="content-inner">
            <h1 className="title">A few typical cases</h1>
            <p>Let’s have a look at a few example cases to learn how we can match our offer with customer needs. </p>
            <div className="grid">
              <div className="grid-item">
                <h2>case 1:</h2>
                <h1 onClick={ () => setFlexibility(true)}>flexibility</h1>
              </div>
              <div className="grid-item">
                <h2>case 2:</h2>
                <h1 onClick={ () => setSimplicity(true)}>simplicity</h1>
              </div>
              <div className="grid-item">
                <h2>case 3:</h2>
                <h1 onClick={ () => setRepetition(true)}>repetition</h1>
              </div>
              <div className="grid-item">
                <h2>case 4:</h2>
                <h1 onClick={ () => setBasket(true) }>basket</h1>
              </div>
            </div>
          </div>

          <div className={`popup ${flexibility ? "show" : "hide"}`}>
            <Flexibility />
            <img className="close-icon" src={closeIcon} alt="close icon" onClick={ () => setFlexibility(false)}/> 
          </div>
          
          <div className={`popup ${simplicity ? "show" : "hide"}`}>
            <Simplicity />
            <img className="close-icon" src={closeIcon} alt="close icon" onClick={ () => setSimplicity(false)}/> 
          </div>

          <div className={`popup ${repetition ? "show" : "hide"}`}>
            <Repetition />
            <img className="close-icon" src={closeIcon} alt="close icon" onClick={ () => setRepetition(false)}/> 
          </div>

          <div className={`popup ${basket ? "show" : "hide"}`}>
            <Basket />
            <img className="close-icon" src={closeIcon} alt="close icon" onClick={ () => setBasket(false)}/> 
          </div>
          
          <Navigation backTo="/one-unbeatable-offer/page02" to="/one-unbeatable-offer/page04"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page03;