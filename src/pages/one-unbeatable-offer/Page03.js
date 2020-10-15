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
      grid-template-columns: 1fr 1fr;
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
      width: 70px;
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
              <div onClick={ () => setFlexibility(true)} className="grid-item">
                <h2>case 1:</h2>
                <h1>Flexibility</h1>
              </div>
              <div onClick={ () => setSimplicity(true)} className="grid-item">
                <h2>case 2:</h2>
                <h1>Simplicity</h1>
              </div>
              <div onClick={ () => setRepetition(true)} className="grid-item">
                <h2>case 3:</h2>
                <h1>Repetition</h1>
              </div>
              <div onClick={ () => setBasket(true)} className="grid-item">
                <h2>case 4:</h2>
                <h1>Basket</h1>
              </div>
            </div>
          </div>

          {flexibility ? 
          <div className={`popup`}>
            <Flexibility />
            <img className="close-icon" src={closeIcon} alt="close icon" onClick={ () => setFlexibility(false)}/> 
          </div>
          : "" }

          {simplicity ? 
          <div className={`popup`}>
            <Simplicity />
            <img className="close-icon" src={closeIcon} alt="close icon" onClick={ () => setSimplicity(false)}/> 
          </div>
          : "" }

          {repetition ? 
          <div className={`popup`}>
            <Repetition />
            <img className="close-icon" src={closeIcon} alt="close icon" onClick={ () => setRepetition(false)}/> 
          </div>
          : "" }

          {basket ? 
          <div className={`popup`}>
            <Basket />
            <img className="close-icon" src={closeIcon} alt="close icon" onClick={ () => setBasket(false)}/> 
          </div>
          : "" }
          
          <Navigation backTo="/one-unbeatable-offer/page02" to="/one-unbeatable-offer/page04"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page03;