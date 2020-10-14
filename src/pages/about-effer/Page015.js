import React from "react";
import styled from "styled-components";

// components 
import RedArrowLink from "../../components/RedArrowLink";
import Navigation from "../../components/Navigation";
import UnorderedList from "../../components/UnorderedList";
// page template
import ParagraphMiddle from "../../pagetemplates/ParagraphMiddle";
// images
import Background from "../../assets/images/effer_hiab-background.jpg";

const StyledDiv = styled.div`
  .RedArrowLink-wrapper{
    display: inline;
    position: absolute;
    bottom: 50px;
    width: 40%;
    left: 30%;
  }
  @media ${props => props.theme.firstBreakpoint}{
    li{
      font-size: 26px;
    }
    li::before {
      top:10px;
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .RedArrowLink-wrapper{
      width: 30%;
      left: 35%;
    }
    li{
      font-size: 32px;
    }
    li::before {
      top:12px;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .RedArrowLink-wrapper{
      width: 20%;
      left: 40%;
    }
    li{
      font-size: 38px;
    }
    li::before {
      top:20px;
    }
  }
    
`;

const Page015 = () => {
  const listItems = [
    "extreme performance and durability",
    "highest level of customisation",
    "unequalled personal attention"
  ]
  return (
    <ParagraphMiddle title="In a nutshell" backgroundImage={Background} showEfferLogo={true} >
      <StyledDiv>
        <UnorderedList items={listItems}/>
          <div className="RedArrowLink-wrapper">
            <RedArrowLink text="Compare with HIAB" toWhere="dont now yet"/>
          </div>
        <Navigation backTo="/about-effer/page012" to="/about-effer/page016"/>
      </StyledDiv>
    </ParagraphMiddle>
  );
}

export default Page015;