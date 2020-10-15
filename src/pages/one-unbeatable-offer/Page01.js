import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import BlackBoxHeading from "../../components/BlackBoxHeading";

// images
import Background from "../../assets/images/effer/effer-big-05.jpg";
import EfferLogo from "../../assets/icons/effer-logo.svg";
import HiabLogo from "../../assets/icons/hiab-logo.svg";

const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  height: 100vh;
  display: flex; 
  justify-content: center;
  align-items: center;
  .BlackBoxHeading-wrapper{
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.8);
    width: 500px;
    padding: 60px;
    .logos{
      display: grid;
      grid-gap: 40px;
      grid-template-columns: 1fr 1fr;
      img{
        width: 100px;
      }
    }
    h1{
      margin: 6px;
    }
  }
  @media ${props => props.theme.firstBreakpoint}{
    .BlackBoxHeading-wrapper{
      width: 700px;
      .logos{
        img{
          width: 200px;
        }
      }
      h1{
        font-size: 32px;
        line-height:32px;
      }
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .BlackBoxHeading-wrapper{
      h1{
        font-size:46px;
        line-height:46px;
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .BlackBoxHeading-wrapper{
      width: 900px;
      h1{
        font-size: 66px;
        line-height: 66px;
      }
    }
  }
`;

const Page01 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>

          <div className="BlackBoxHeading-wrapper">
            <div className="logos">
              <img src={EfferLogo} />
              <img src={HiabLogo} />
            </div>
            <h1>Two remarable brands</h1>
            <h1>One unbeatable offer</h1>
          </div>

          <Navigation backTo="/about-effer/page019" to="/one-unbeatable-offer/page02"/>

        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page01;