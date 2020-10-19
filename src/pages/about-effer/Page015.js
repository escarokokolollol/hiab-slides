import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// components 
import Navigation from "../../components/Navigation";
import UnorderedList from "../../components/UnorderedList";
// page template
import ParagraphMiddle from "../../pagetemplates/ParagraphMiddle";
// images
import Background from "../../assets/images/effer_hiab-background.jpg";

const StyledDiv = styled.div`
    .compare{
      font-size: 22px;
      color: ${props => props.theme.red};
      position: absolute;
      bottom: 80px;
      left: 42.5vw;
      padding: 10px 20px;
      font-weight: 900;
      transition: all .3s ease;
    }
    .compare:hover{
      background: ${props => props.theme.red};
      color: #fff;
      transition: all .3s ease;
    }
  }
 
  @media ${props => props.theme.firstBreakpoint}{
    li{
      ${'' /* font-size: 26px; */}
    }
    li::before {
      ${'' /* top:10px; */}
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .RedArrowLink-wrapper{
      width: 30%;
      left: 35%;
    }
    li{
      ${'' /* font-size: 32px; */}
    }
    li::before {
      ${'' /* top:12px; */}
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .RedArrowLink-wrapper{
      width: 20%;
      left: 40%;
    }
    li{
      ${'' /* font-size: 38px; */}
    }
    li::before {
      ${'' /* top:20px; */}
    }
  }
    
`;

const Page015 = () => {
  const listItems = [
    "Extreme performance and durability",
    "Highest level of customisation",
    "Unequalled personal attention"
  ]
  return (
    <ParagraphMiddle hideLine title="In a nutshell" backgroundImage={Background} showEfferLogo={true} >
      <StyledDiv>
        <UnorderedList items={listItems}/>
        <Navigation backTo="/about-effer/page012" to="/about-effer/page016"/>
        <div className="flex">
          <Link className="compare" to="/about-hiab/page010">Compare with HIAB</Link>
        </div>
      </StyledDiv>
    </ParagraphMiddle>
  );
}

export default Page015;