import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import BlackBoxHeading from "../../components/BlackBoxHeading";

// images
import Background from "../../assets/images/hiab/hiabnewbg01.jpg";

const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  .box{
    opacity: 0;
  }
  .show-box{
    opacity: 1;
    transition: opacity 2s ease;
  }
  .BlackBoxHeading{
    width:  500px;
      h1{
        font-size: 52px;
        line-height: 52px;
      }
      p{
        font-size: 24px;
        margin: 0;
      }
    }
  }

  @media ${props => props.theme.secondBreakpoint}{
    .BlackBoxHeading{
      width:  700px;
      h1{
        font-size: 80px;
        line-height: 80px;
      }
      p{
        font-size: 44px;

      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .BlackBoxHeading{
      width:  760px;
      h1{
        font-size: 90px;
        line-height: 90px;
      }
    }
  }
 
`;

const Page07 = () => {
  const [showBox, setShowBox] = useState(false);

  useEffect( () => {
    setTimeout(() => {
      setShowBox(true);
    }, 1000);
  });
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className={`box ${showBox ? "show-box" : ""}`}>
            <div className="BlackBoxHeading-wrapper">
              <BlackBoxHeading className="BlackBoxHeading" showHiabLogo title="”To optimise your business”" textUnder="Our value proposition" />
            </div>
          </div>
          <Navigation backTo="/about-hiab/page05" to="/about-hiab/page08" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page07;