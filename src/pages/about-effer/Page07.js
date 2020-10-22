import React, { useEffect, useState } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import BlackBoxHeading from "../../components/BlackBoxHeading";

// images
import Background from "../../assets/images/effer/efferpeople01.jpg";

const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  
  .black-box{
    width: 90%;
    position: absolute;
    bottom: 60px;
    opacity: 0;
    transition: opacity 1s ease;
  }

  .show-black-box{
    opacity: 1;
    transition: opacity 2s ease;
  }

  @media ${props => props.theme.thirdBreakpoint}{
    .black-box{
      h1{
        font-size:80px;
        line-height:80px;
      }
    }
  }
`;

const Page07 = () => {
  
  const [showText, setShowText] = useState(false);

  useEffect(() =>{
    setTimeout(() => {
      setShowText(true);
    }, 1000);
  },[]);

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className={`black-box ${showText ? "show-black-box" : ""}`}>
            <BlackBoxHeading title="How we see ourselves" textUnder="is very much a reflection of the image created by our customers’ experiences. In their eyes, we are the company that provides specialised cranes that enable them to conquer the toughest challenges. In the next section we’ll see how this forms the basis of EFFER’s value proposition."/>
          </div>
            <h1>hide text</h1>
          <Navigation backTo="/about-effer/page05" to="/about-effer/page08"/>

        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page07;