import React, { useEffect, useState } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

import Background from "../../assets/images/hiab/hiab01.jpg";


const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  .black-box{
    width: 400px;
    padding: 40px;
    background: rgba(10,10,10, 0.9);
    position: absolute;
    bottom: 10vh;
    opacity: 0;
    transition: opacity 1s ease;
  }

  .show-black-box{
    opacity: 1;
    transition: opacity 2s ease;
  }

  @media ${props => props.theme.firstBreakpoint}{
    .black-box{
      width: 600px;
      h1{
        font-size: 32px;
        line-height: 32px;
      }
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .black-box{
      width: 800px;
      h1{
        font-size: 34px;
        line-height: 34px;
      }
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .black-box{
      width: 900px;
      h1{
        font-size: 30px;
        line-height: 30px;
      }
    }
  }
`;

const Page02 = () => {

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
          <div className={`black-box ${showText ? "show-black-box" : ""}`}>
              <h1>The ski maker who invented the loader crane.</h1>
              <p>In Hudiksvall, a historic town at the doorstep to Sweden’s spectacular wilderness, a ski maker and inventor by the name of Eric Sundin figured out how to use a truck engine to power loader cranes using hydraulics. Having built such a crane for moving the heavy roundwood used in his ski production, he then founded Hydrauliska Industri AB in 1944, later shortened to “Hiab”.</p>
          </div>
          <Navigation backTo="/about-hiab/page01" to="/about-hiab/page03"/>
        </StyledDiv>
        
      </BackgroundImage>
    </div>
  );
};

export default Page02;
