import React from "react";
import styled from "styled-components";

// images
import BigRedButton from "../../assets/icons/big-red-button.png";
import Background from "../../assets/images/effer_hiab-background.jpg";
import HiabLogo from "../../assets/icons/hiab-logo.svg";
import EfferLogo from "../../assets/icons/effer-logo.svg";

// components
import InfoWrapper from "../../components/InfoWrapper";
import BillboardHeading from "../../components/BillboardHeading";
import Paragraphs from "../../components/Paragraphs";
import LinkToAnywhere from "../../components/LinkToAnywhere";

const StyledDiv = styled.div`
  .content {
    padding: 1rem;
    min-height: 100vh;
    min-width: 100vw;
    background-image: url(${Background});
    background-size: cover;
    display: flex;
    flex-direction: column;

    .start-page-text{
      margin-top: 60px;
    }
    .start-page-text h1{
      font-size: 90px;
    }

    .start-page-red-button{
      img{
        float: right;
        margin-top: 30px;
        width: 100px;
      }
    }

    .logos{
      position: absolute;
      bottom: 120px;
      display: grid;
      grid-template-columns: 50% 50%;
      img{
        width: 140px;
      }
    }
  }

  @media (min-width: 960px){
    .content{
      justify-content: center;
      align-items: center;
      

      .text-button-wrapper{
        max-width: 800px;
        display: grid;
        grid-gap: 20px;  
        align-items: start;
        grid-template-columns: 70% 30%;
        .start-page-text{
          margin: 0; 
          text-align: right;      
          h1{
            font-size: 120px;
            margin-bottom: 40px;
          }   
          p{
            font-size: 22px;
          }
        }
        .start-page-red-button {
          .big-red-button{
            width: 90%;
          }
        }
      }
      .logos{
        bottom: 40px;
      }
    }
  }
`;

const Start01 = props => {
  const paragraphText = [
    "A tool for understanding and communicating the strengths of the combined HIAB - EFFER offer"
  ];

  return (
    <div className="page-transition">
      <StyledDiv>
        <div className="content">
          <div className="text-button-wrapper">
            <div className="start-page-text">
              <BillboardHeading text="WELCOME"/>
              <Paragraphs items={paragraphText}/>
            </div>
            <div className="start-page-red-button">
              <LinkToAnywhere toWhere="/start02">
                <img className="big-red-button" src={BigRedButton} alt="next page"/>
              </LinkToAnywhere>
            </div>
          </div>
          <div className="logos">
            <img src={HiabLogo} alt="Hiab logotype"/>
            <img src={EfferLogo} alt="Effer logotype"/>
          </div>
        </div>
        <InfoWrapper text="Set aside approximately 30 – 45 minutes to go through the entire tool the first time you use it."/>
      </StyledDiv>
    </div>
  );
};

export default Start01;
