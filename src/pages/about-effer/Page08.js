import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import BlackBoxHeading from "../../components/BlackBoxHeading";

// images
import Background from "../../assets/images/effer/efferasd02.jpg";


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
    h1{
      font-size: 52px;
      line-height: 52px;
    }
    p.under{
      font-size: 28px;
      margin: 0;
    }
  }

  @media ${props => props.theme.firstBreakpoint}{
    .BlackBoxHeading{
      width: 400px;
      h1{
        font-size: 47px;
        line-height: 47px;
      }
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .BlackBoxHeading{
      width: 800px;
      h1{
        font-size: 68px;
        line-height: 68px;
      }
      p.under{
        font-size: 40px;
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .BlackBoxHeading{
      width: 1000px;
      h1{
        font-size: 68px;
        line-height: 68px;
      }
    }
  }
 
`;

const Page08 = () => {
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBox(true);
    }, 700);
  });
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className={`box ${showBox ? "show-box" : ""}`}>
            <BlackBoxHeading className="BlackBoxHeading" showEfferLogo title="”To conquer the toughest challenges”" textUnder="Our value proposition"/>
          </div>
          <Navigation backTo="/about-effer/page05" to="/about-effer/page09"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page08;