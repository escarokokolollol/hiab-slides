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
import BackgroundImage from "../../components/styled/BackgroundImage";

const StyledDiv = styled.div`
  .content {
    padding: 1rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    .start-page-text{
      margin-top: 60px;
      h1{
       font-size: 50px;
     }
    }
    

    .start-page-red-button{
      img{
        width: 100px;
      }
    }

    .logos{ 
      position: absolute;
      bottom: 120px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
      img{
        width: 140px;
      }
    }
  }

  @media (min-width: 960px){
    .content{
      justify-content: center;
      align-items: center;
      .info-wrapper-wrapper{
        width: 250px;
        position: absolute;
        bottom: 40px;
        right: 40px;
      }
      .text-button-wrapper{
        display: grid;
        grid-gap: 20px;  
        align-items: center;
        grid-template-columns: 3fr 1fr;
        .start-page-text{
          margin: 0; 
          text-align: right;      
          h1{
            font-size: 60px;
            margin-top: 0;
          }   
          p{
            max-width: 740px;
            float: right;
            font-size: 22px;
          }
        }
        .start-page-red-button {
          justify-self: start;
          .big-red-button{
            width: 60%;
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
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="content">
            <div className="text-button-wrapper">
              <div className="start-page-text">
                <BillboardHeading text="Welcome to “la Sfida”"/>
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
            <div className="info-wrapper-wrapper">
              <InfoWrapper text="Set aside approximately 30 – 45 minutes to go through the entire tool the first time you use it."/>
            </div>
          </div>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
};

export default Start01;
