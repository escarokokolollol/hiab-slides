import React from "react";
import styled from "styled-components";

// images
import Background from "../../assets/images/effer_hiab-background.jpg";

// components
import BillboardHeading from "../../components/BillboardHeading";
import Paragraphs from "../../components/Paragraphs";
import Logos from "../../components/Logos";
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
      .links{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px;
      }
      h1{
        font-size: 80px;
      }
      p{
        font-size: 22px;
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

const Page04 = props => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="content">
            <div className="text-button-wrapper">
              <div className="start-page-text">
                <BillboardHeading text="That’s it!"/>
                <Paragraphs items={["Good luck in your discussions with customers and feel free to return to this tool whenever you need a refresher."]}/>
                <div className="links">
                  <RedArrowLink text="Start over" toWhere="/"/>
                  <div/>
                  {/* <RedArrowLink text="Exit" onClick={() => window.close()}/> */}
                </div>
              </div>
              <Logos />
              <Navigation backTo="/start04"/>
            </div>
          </div>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
};

export default Page04;
