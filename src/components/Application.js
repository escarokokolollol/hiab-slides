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
  .top-of-page{
    .grid-top{
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      h1.intro-title{
        margin: 0;
        text-transform: uppercase;
        font-size: 36px;
        margin-bottom: 20px;
      }
      p.intro-text{
        font-size: 20px;
        margin-top:0;
      }
      img.top-img{
        width:100%;
      }
    }
  }
  .content{
    .image-wrapper{
      display: grid; 
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      margin-top: 40px;
      img{
        width: 140px;
      }
    }
    .section{
      margin: 10px;
      h3{
        text-transform: uppercase;
        padding-bottom: 6px;
        margin-top: 100px;
        margin: 0;
        color: ${props => props.theme.red};
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: 900;
        border-bottom: 1px solid #fff;
        padding-bottom: 10px;
      }
      .grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px;
        .grid-item{
          p{
            margin:0 0 10px;
            font-size: 18px;
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
      <div className="top-of-page">
        <div className="grid-top">
          <div>
            <h1 className="intro-title">{props.title}</h1>
            <p className="intro-text">{props.textUnderTitle}</p>
          </div>
          <img className="top-img" src={props.image} alt="stuff" />
        </div>
      </div>
      <div className="content">

        <div className="image-wrapper">
          <img src={hiabLogo} alt="hiab logo" />
          <img src={efferLogo} alt="effer logo" />
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
          <h3>Key benefits</h3>
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
          <h3>Featured solutions</h3>
          <div className="grid">
            <div className="grid-item hiab">
              {props.hiabSolutions && Array.isArray(props.hiabSolutions) ?
                <ul>
                  {props.hiabSolutions.map((item) => <li>{item}</li>)}
                </ul>
                : <p>{props.hiabSolutions}</p>}
            </div>
            <div className="grid-item effer">
              {props.efferSolutions && Array.isArray(props.efferSolutions) ?
                <ul>
                  {props.efferSolutions.map((item) => <li>{item}</li>)}
                </ul>
                : <p>{props.efferSolutions}</p>}
            </div>
          </div>
        </div>

        <div className="section innovations">
          <h3>Major innovations</h3>
          <div className="grid">
            <div className="grid-item hiab">
              {props.hiabInnovations && Array.isArray(props.hiabInnovations) ?
                <ul>
                  {props.hiabInnovations.map((item) => <li>{item}</li>)}
                </ul>
                : <p>{props.hiabInnovations}</p>}
            </div>
            <div className="grid-item effer">
              {props.efferInnovations && Array.isArray(props.efferInnovations) ?
                <ul>
                  {props.efferInnovations.map((item) => <li>{item}</li>)}
                </ul>
                : <p>{props.efferInnovations}</p>}
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
}

export default Application;
