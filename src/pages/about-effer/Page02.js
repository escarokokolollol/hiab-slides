import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BlackBoxHeading from "../../components/BlackBoxHeading"
import BackgroundImage from "../../components/styled/BackgroundImage";

import Background from "../../assets/images/background01.jpg";

const StyledDiv = styled.div`
  .info-wrapper-wrapper{
    position: absolute;
    right: -280px;
    bottom: -90;
    max-width: 350px;
  }
`;

const Page02 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}> 
        <StyledDiv>
          <BlackBoxHeading title="To understand EFFER you need to know where we come from." textUnder="The “Terra dei Motori”, or “Motor Valley” is home to some of the world’s most legendary and innovative motor companies including Ferrari, Lamborghini, Maserati and Ducati. No wonder EFFER is passionate about engineering.">
          </BlackBoxHeading>
          <Navigation backTo="/about-effer/page01" to="/about-effer/page03"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
};

export default Page02;
