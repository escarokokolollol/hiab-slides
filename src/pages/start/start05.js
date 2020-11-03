import React from "react";
import styled from "styled-components";

// images
import Background from "../../assets/images/test-bg-start02.jpg";

// components
import BillboardHeading from "../../components/BillboardHeading";
import Paragraphs from "../../components/Paragraphs";
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import RedArrowLink from "../../components/RedArrowLink";


const StyledDiv = styled.div`
  .content {
    padding: 1rem;
    height: 100vh;
    width: 100vw;
    .start-page-text{
      margin: 0 auto;
      margin-top: 20vh;
      max-width: 900px;
      h1{
        font-size: 80px;
      }
      p{
        font-size: 22px;
      }
      .hiabOrEffer{
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        p{
          text-align: center;
        }
      }
    }

  
    .logos-wrapper{
      width: 100%;
      
      .logos{
        position: absolute;
        bottom: 10px;
        img{
          width: 140px;
        }
      }
    }
    
  }

  @media (min-width: 960px){
    .content{
      justify-content: center;
      align-items: center;
      .logos-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        .logos{
          bottom: 40px;
          img{
            margin-right: 40px;
          }
        }
      }
    }
  }
`;

const Start05 = props => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="content">
            <div className="text-button-wrapper">
              <div className="start-page-text">
                <BillboardHeading text="Choose a road" />
                <div className="hiabOrEffer">
                  <div>
                    <Paragraphs items={["If you work with HIAB, choose the “Via Emilia” to learn the story of EFFER"]}/>
                    <RedArrowLink text="Via Emilia" toWhere="/about-effer/page01"/>
                  </div>

                  <div>
                    <Paragraphs items={["If you work with EFFER, take “E4 North” to learn more about HIAB"]}/>
                    <RedArrowLink text="E4 North" toWhere="/about-hiab/page01"/>
                  </div>
                </div>
                <Paragraphs items={["Feel free to start over as often as you like, or to revisit any section using the menu at the top right."]}/>
                
              </div>
              <Navigation backTo="/start04"/>
            </div>
          </div>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
};

export default Start05;
