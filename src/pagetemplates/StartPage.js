
//      PROPS INFO
//
// headingText      h1 text
// paragraphText    p text
// to               navigation
// backTo           navigation
//
//

import React from "react";
import styled from "styled-components";

// images
import Background from "../assets/images/test-bg-start02.jpg";

// components
import BillboardHeading from "../components/BillboardHeading";
import Paragraphs from "../components/Paragraphs";
import Navigation from "../components/Navigation";
import BackgroundImage from "../components/styled/BackgroundImage";

const StyledDiv = styled.div`
  .content {
    padding: 1rem;
    height: 100vh;
    width: 100vw;
    .start-page-text{
      margin: 0 auto;
      margin-top: 20vh;
      max-width: 900px;
    }

    .start-page-text h1{
      font-size: 80px;
    }
    .start-page-text p{
      font-size: 22px;
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

const StartPage = props => {
  const headingText = props.headingText;
  const paragraphText = props.paragraphText ? [...props.paragraphText] : [];

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="content">
            <div className="text-button-wrapper">
              <div className="start-page-text">
                <BillboardHeading text={headingText} />
                <Paragraphs items={paragraphText}/>
                {props.children}
              </div>
              <Navigation to={props.to} backTo={props.backTo}/>
            </div>
          </div>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
};

export default StartPage;
