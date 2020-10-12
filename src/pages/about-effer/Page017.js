import React, { useState } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import CroSStab from "./Page017-items/CroSStab";

// images
import Background from "../../assets/images/effer/effer-inovation03.jpg";

const StyledDiv = styled.div`
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;

  ${'' /* padding: 100px; */}
  .content-inner{
    background: rgba(0,0,0,0.6);
    padding: 60px;
    text-align: center;
    h1{
      margin: 0 auto 40px;
      max-width: 1000px;
    }
    .grid{
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-content: center;
      .grid-item{
        ${'' /* height: 20vh; */}
        color: ${props => props.theme.red};
        line-height: 160px;
        h1{
          width: 80%;
          background: #000;
          transition: all .2s ease;
        }
        h1:hover{
          cursor: pointer;
          color: #fff;
          background: ${props => props.theme.red};
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
    .close{
      color: ${props => props.theme.red};
      text-align: center;
    }
    .close:hover{
      cursor: pointer;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    h1{
    }
  }
 
`;

const Page017 = () => {

  const [crosstab, setCrosstab] = useState(true);

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
                <h1>V-Stab</h1>
              </div>
              <div className="grid-item">
                <h1>Continuous Slewing</h1>
              </div>
              <div className="grid-item">
                <h1>Second Jib</h1>
              </div>
            </div>
          </div>

          {crosstab ? 
            <div className="popup">
              <CroSStab />
              <h1 className="close" onClick={ () => setCrosstab(false)}>close</h1>
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