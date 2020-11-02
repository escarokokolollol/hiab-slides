import React from "react";
import styled from "styled-components";

// images
import Background from "../../assets/images/effer_hiab-background.jpg";

// components
import Paragraphs from "../../components/Paragraphs";
import Logos from "../../components/Logos";
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import RedArrowLink from "../../components/RedArrowLink";

const StyledDiv = styled.div`
  .content {
    padding: 1rem;
    width: 100vw;
    height: 80vh;
    display: flex;
    .start-page-text{
      margin: 0 auto;
      ${'' /* margin-top: 20vh; */}
      max-width: 900px;
      ${'' /* text-align: center; */}
      h1{
        margin: 0;
      }
      h1.title-over{
        font-size: 52px;
      }
      h1.title-under{
        font-size: 52px;
        margin-bottom: 20px;
      }
      p{
        font-size: 22px;
      }
      .RedArrowLink-wrapper{
        width: 50%;
        margin-top: 40px;
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

const Page06 = props => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="content">
            <div className="text-button-wrapper">
              <div className="start-page-text">
                <h1 className="title-over">Well done.</h1>
                <h1 className="title-under">You’ve now completed “la Sfida”!</h1>
                <Paragraphs items={["Thanks for taking The Challenge and be sure to let us know if it has helped you in your discussions with customers. Feel free to come back whenever you need a refresher."]} />
                <div className="RedArrowLink-wrapper">
                  <RedArrowLink text="Start over" toWhere="/start05"/>
                </div>
              </div>
              <Logos />
              <Navigation backTo="/end09" />
            </div>
          </div>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
};

export default Page06;
