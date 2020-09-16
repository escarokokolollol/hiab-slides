import React from "react";
import styled from "styled-components";

// images
import Background from "../../assets/images/effer_hiab-background.jpg";

// components
import BillboardHeading from "../../components/BillboardHeading";
import Paragraphs from "../../components/Paragraphs";
import Logos from "../../components/Logos";
import Navigation from "../../components/Navigation";

const StyledDiv = styled.div`
  .content {
    padding: 1rem;
    height: 100vh;
    width: 100vw;
    background-image: url(${Background});
    background-size: cover;

    .start-page-text{
      margin-top: 60px;
    }
    .start-page-text h1{
      font-size: 40px;
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

const paragraphText = [
  "In 2019 a long-term strategy called “Stronger Together” was introduced aimed at fulfilling customer needs and demands through an expanded product portfolio and greater service coverage. “Sfida”, which means “Challenge” in Italian, is a learning tool and resource kit originating from that strategy. It is designed to help those of us already working with one brand to become more familiar with the other, and to make it easier for all of us to match the needs of our customers with our exceptional offer."
];

const Start02 = props => {
  return (
    <div className="page-transition">
      <StyledDiv>
        <div className="content">
          <div className="text-button-wrapper">
            <div className="start-page-text">
              <BillboardHeading text="Why ”Sfida”?" />
              <Paragraphs items={paragraphText}/>
            </div>
            <Logos />
            <Navigation to="/start03" backTo="/"/>
          </div>
        </div>
      </StyledDiv>
    </div>
  );
};

export default Start02;
