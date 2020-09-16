import React from "react";
import styled from "styled-components";

//      PROPS INFO
//
// headingText      h1 text
// paragraphText    p text
// to               navigation
// backTo           navigation
//
//

// images
import Background from "../assets/images/effer_hiab-background.jpg";

// components
import BillboardHeading from "../components/BillboardHeading";
import Paragraphs from "../components/Paragraphs";
import Logos from "../components/Logos";
import Navigation from "../components/Navigation";

const StyledDiv = styled.div`
  .content {
    padding: 1rem;
    height: 100vh;
    width: 100vw;
    background-image: url(${Background});
    background-size: cover;
    .start-page-text{
      margin: 0 auto;
      margin-top: 20vh;
      max-width: 800px;
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
        }
      }
    }
  }
`;

const StartPage = props => {
  const headingText = [props.headingText];
  const paragraphText = [props.paragraphText];

  return (
    <div className="page-transition">
      <StyledDiv>
        <div className="content">
          <div className="text-button-wrapper">
            <div className="start-page-text">
              <BillboardHeading text={headingText} />
              <Paragraphs items={paragraphText}/>
              {props.children}
            </div>
            <Logos />
            <Navigation to={props.to} backTo={props.backTo}/>
          </div>
        </div>
      </StyledDiv>
    </div>
  );
};

export default StartPage;
