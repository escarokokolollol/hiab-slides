import React from "react";
import styled from "styled-components";

// components 
import RedArrowLink from "../../components/RedArrowLink";
import Navigation from "../../components/Navigation";
// page template
import ParagraphMiddle from "../../pagetemplates/ParagraphMiddle";
// images
import Background from "../../assets/images/effer_hiab-background.jpg";

const StyledDiv = styled.div`
  .video-container{
    position: relative;
    width: 500px;
    height: 0;
    padding-bottom: 56.25%;
    margin-top: 20px;
    .video{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .RedArrowLink-wrapper{
    display: inline;
    position: absolute;
    bottom: 50px;
    width: 40%;
    left: 30%;
  }
  @media ${props => props.theme.firstBreakpoint}{
  
  }
  @media ${props => props.theme.secondBreakpoint}{
    .video-container{
      width: 600px;
    }
    .RedArrowLink-wrapper{
      width: 30%;
      left: 35%;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .video-container{
      width: 740px;
    }
    .RedArrowLink-wrapper{
      width: 20%;
      left: 40%;
    }
  }
`;

const Page018 = () => {
  return (
    <ParagraphMiddle hideLine title="If we could boil it down to just one word, it would be… EXTREME" backgroundImage={Background} showEfferLogo={true} >
      <StyledDiv>
        <div className="video-container">
          <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/xC6J4T_hUKg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <div className="RedArrowLink-wrapper">
          <RedArrowLink text="Compare with hiab" toWhere="dont now yet"/>
        </div>
        <Navigation backTo="/about-effer/page017" to="/about-effer/page019"/>
      </StyledDiv>
    </ParagraphMiddle>
  );
}

export default Page018;