import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BlackBoxHeading from "../../components/BlackBoxHeading"
import BackgroundImage from "../../components/styled/BackgroundImage";
import InfoWrapper from "../../components/InfoWrapper";

import Background from "../../assets/images/background01.jpg";

const StyledDiv = styled.div`
  .info-wrapper-wrapper{
    position: absolute;
    right: -280px;
    bottom: -90;
    max-width: 350px;
  }
`;

const Page01 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}> 
        <StyledDiv>
          <BlackBoxHeading title="But what do you know about EFFER?" textOver="So you know the story of HIAB already">
          <div className="info-wrapper-wrapper">
            <InfoWrapper text="Did you know…The Via Emilia is a 2000 year old artery running through the vital region of Italy known as “Emilia Romagna”, and is a marvel of Roman engineering."/>
          </div>
          </BlackBoxHeading>
          <Navigation to="/about-effer/page02"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
};

export default Page01;
