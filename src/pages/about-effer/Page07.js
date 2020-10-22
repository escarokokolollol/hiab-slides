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
            <BlackBoxHeading title="Proud, passionate and pumped" textUnder="Our customers love EFFER because they love challenges, and our cranes enable them to go after what others can’t. It’s that spirit that runs through the “Terra dei Motori” and through our veins, and has made us what we are today."/>
          </div>
          <Navigation backTo="/about-effer/page05" to="/about-effer/page08"/>

        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page07;