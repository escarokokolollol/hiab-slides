import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import Background from "../../assets/images/hiabeffer222.jpg";
import EfferLogo from "../../assets/icons/effer-logo.svg";
import HiabLogo from "../../assets/icons/hiab-logo.svg";

const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  height: 100vh;
  .BlackBoxHeading-wrapper{
    position: absolute;
    bottom: 90px;
    left: 100px; 
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.8);
    width: 500px;
    padding: 40px;
    background: rgba(255,255,255, 0.8);
    color: #000;
    .logos{
      display: grid;
      grid-gap: 40px;
      grid-template-columns: 1fr 1fr;
      img{
        width: 80px;
      }
    }
    h1{
      margin: 6px;
    }
  }
  @media ${props => props.theme.firstBreakpoint}{
    .BlackBoxHeading-wrapper{
      width: 460px;
      .logos{
        img{
          width: 140px;
        }
      }
      h1{
        font-size: 30px;
        line-height:30px;
      }
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .BlackBoxHeading-wrapper{
      width: 600px;
      h1{
        font-size:42px;
        line-height:42px;
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .BlackBoxHeading-wrapper{
      width: 800px;
      .logos{
        img{
          width: 200px;
        }
      }
      h1{
        font-size: 58px;
        line-height: 58px;
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
            {/* <div className="logos">
              <img src={EfferLogo} alt="effer logo" />
              <img src={HiabLogo} alt="hiab logo" />
            </div> */}
            <h1>Two remarkable brands</h1>
            <h1>One unbeatable offer</h1>
          </div>

          <Navigation to="/one-unbeatable-offer/page02" />

        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page01;