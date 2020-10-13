import React, { useState } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import CroSStab from "./Page017-items/CroSStab";
import Vstab from "./Page017-items/Vstab";
import ContinuouSlewing from "./Page017-items/ContinuouSlewing";
import SecondJib from "./Page017-items/SecondJib";

// images
import Background from "../../assets/images/effer_hiab-background.jpg";

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
    .close{
      color: ${props => props.theme.red};
      text-align: center;
    }
    .close:hover{
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
 
`;

const Page022 = () => {

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
                <h1 onClick={ () => setFlexibility(true)}>flexibility</h1>
              </div>
              <div className="grid-item">
                <h1 onClick={ () => setSimplicity(true)}>simplicity</h1>
              </div>
              <div className="grid-item">
                <h1 onClick={ () => setRepetition(true)}>repetition</h1>
              </div>
              <div className="grid-item">
                <h1 onClick={ () => setBasket(true) }>basket</h1>
              </div>
            </div>
          </div>

          {flexibility ? 
            <div className="popup">
              ${'' /* <Flexibility /> */}
              <h1 className="close" onClick={ () => setFlexibility(false)}>close</h1>
            </div>
            : ""
          }
          {simplicity ? 
            <div className="popup">
              ${'' /* <Simplicity /> */}
              <h1 className="close" onClick={ () => setSimplicity(false)}>close</h1>
            </div>
            : ""
          }

          {repetition ? 
            <div className="popup">
              ${'' /* <Repetition /> */}
              <h1 className="close" onClick={ () => setRepetition(false)}>close</h1>
            </div>
            : ""
          }

          {basket ? 
            <div className="popup">
              ${'' /* <Basket /> */}
              <h1 className="close" onClick={ () => setBasket(false)}>close</h1>
            </div>
            : ""
          }
          
          <Navigation backTo="/about-effer/page021" to="/about-effer/page023"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page022;