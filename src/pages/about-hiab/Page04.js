import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import BlackBoxHeading from "../../components/BlackBoxHeading";

// images
import Background from "../../assets/images/hiab/pioneer01.png";

const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  .BlackBoxHeading-wrapper{
    width: 90%;
    position: absolute;
    bottom: 60px;
    opacity: 0;
    transition: opacity 1s ease;
    div{
    }
  }
  .show-black-box{
    opacity: 1;
    transition: opacity 2s ease;
  }
  @media ${props => props.theme.firstBreakpoint}{
    .BlackBoxHeading-wrapper{
      width: 900px;
      h1{
        font-size:32px;
        line-height:32px;
      }
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .BlackBoxHeading-wrapper{
      width: 1200px;
      h1{
        font-size:52px;
        line-height:52px;
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .BlackBoxHeading-wrapper{
      width: 1530px;
      h1{
        font-size:72px;
        line-height:72px;
      }
    }
  }
`;

const Page04 = () => {

  const [showText, setShowText] = useState(false);

  useEffect(() =>{
    setTimeout(() => {
      setShowText(true);
    }, 1000);
  });
  
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className={`BlackBoxHeading-wrapper ${showText ? "show-black-box" : ""}`}>
            <BlackBoxHeading title="Once a pioneer, always a pioneer" textUnder="Yesterday, being a pioneer was about hydraulics and steel. Today it’s about service and data. Why? Because the two things that our customers care more about now than they’ve ever had to before, are reliability and uptime. And that’s why so many love the HIAB brand."/>
          </div>
          <Navigation backTo="/about-hiab/page03" to="/about-hiab/page05"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page04;