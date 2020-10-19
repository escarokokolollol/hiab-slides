import React from "react";
import styled from "styled-components";

import efferLogo from "../assets/icons/effer-logo.svg";
import hiabLogo from "../assets/icons/hiab-logo.svg";


///////////////////
//
//  PROPS:
//  title
//  textUnderTitle
//
//  hiabRange
//  hiabBenefits
//  hiabSolutions
//  hiabInnovations
//  efferRange
//  efferBenefits
//  efferSolutions
//  efferInnovations
//
///////////////////

const StyledDiv = styled.div`
  h1.intro-title{
    margin: 0;
    color: ${props => props.theme.red};
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 900;
  }
  p.intro-text{
    font-size: 22px;
  }
  .content{
    .image-wrapper{
      display: grid; 
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      img{
        width: 160px;
      }
    }
    .section{
      margin: 10px;
      h3{
        ${'' /* text-align: center; */}
        margin-top: 40px;
        margin: 0;
        margin-bottom: 10px;
        font-size: 32px;
      }
      .grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        .grid-item{
          p{
            margin:0 0 10px;
            font-size: 20px;
          }
          ul{
            margin: 0px;
            li{
              margin: 0;
              font-size: 20px;
            }
          }
        }
        .grid-item.hiab{
          ${'' /* text-align: right;
          list-style-position: inside; */}
        }
        .grid-item.effer{
        }
      }
    }
  }

`;

const Application = props => {
  return (
    <StyledDiv>
      <h1 className="intro-title">{props.title}</h1>
      <p className="intro-text">{props.textUnderTitle}</p>
      <div className="content">

        <div className="image-wrapper">
          <img src={hiabLogo} alt="hiab logo"/>
          <img src={efferLogo} alt="effer logo"/>
        </div>

        <div className="section range">
          <h3>Range</h3>
            <div className="grid">
              <div className="grid-item hiab">
                <p>
                  {props.hiabRange && props.hiabRange}
                </p>
              </div>
              <div className="grid-item effer">
                <p>
                  {props.efferRange && props.efferRange}
                </p>
            </div>
          </div>
        </div>

        <div className="section benefits">
          <h3>Key benefits:</h3>
          <div className="grid">
            <div className="grid-item hiab">
              <p>
                {props.hiabBenefits && props.hiabBenefits}
              </p>
            </div>
            <div className="grid-item effer">
              <p>
                {props.efferBenefits && props.efferBenefits}
              </p>
            </div>
          </div>
        </div>

        <div className="section solutions">
          <h3>Featured solutions:</h3>
          <div className="grid">
            <div className="grid-item hiab">
              {props.hiabSolutions && 
                <ul>
                  {props.hiabSolutions.map((item) => <li>{item}</li>)}
                </ul>
              }
            </div>
            <div className="grid-item effer">
              {props.hiabSolutions && 
                <ul>
                  {props.efferSolutions.map((item) => <li>{item}</li>)}
                </ul>
              }
            </div>
          </div>
        </div>

        <div className="section innovations">
          <h3>Major innovations:</h3>
          <div className="grid">
            <div className="grid-item hiab">
              <p>
                {props.hiabInnovations && props.hiabInnovations}
              </p>
            </div>
            <div className="grid-item effer">
              <p>
                {props.efferInnovations && props.efferInnovations}
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
}

export default Application;
