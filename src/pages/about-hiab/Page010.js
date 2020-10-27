import React, { useState } from "react";
import styled from "styled-components";

// components 
import Navigation from "../../components/Navigation";
import UnorderedList from "../../components/UnorderedList";
// page template
import ParagraphMiddle from "../../pagetemplates/ParagraphMiddle";
// images
import Background from "../../assets/images/hiab/hiab-bg-dark.jpg";
import closeIcon from "../../assets/icons/close-menu.svg";

const StyledDiv = styled.div`
  .smart-wrapper{
    text-align: center;
    p{
      font-size: 22px;
      strong{
        font-weight: 900;
      }
    }
  }
  ul{
    max-width: 500px;
    margin: 0 auto;
  }
  .compare{
    font-size: 22px;
    color: ${props => props.theme.red};
    position: absolute;
    bottom: 50px;
    left: 30%;
    padding: 10px 20px;
    font-weight: 900;
    transition: all .3s ease;
  }
  .compare:hover{
    cursor: pointer;
    background: ${props => props.theme.red};
    color: #fff;
    transition: all .3s ease;
  }
 
  @media ${props => props.theme.firstBreakpoint}{
    
  }
  @media ${props => props.theme.secondBreakpoint}{
    .compare{
      left: 38%;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .compare{
      left: 42%;
    }
  }
  .popup.show-popup{
    opacity: 1;
    z-index:11;
    transition: all .3s ease;
  }
  .popup{
    display: grid;
    justify-items: center;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.4);
    top: 0;
    left: 0;
    z-index: 100;
    padding: 20px;
    z-index:-1;
    opacity:0;
    .compare-text{
      padding: 30px 50px;
      background: #555;
      color: #fff;
      margin: 0 auto;
      position: relative;
      h2{
        text-align: center;
      }
      ul{
        li{
          font-size: 22px;
        }
      }
      .close-icon{
        position: absolute;
        top: 20px;
        right: 20px;
        width: 20px;
        height: 20px;
        transition: all .2s ease;
      }
      .close-icon:hover{
        cursor: pointer;
        transform: scale(1.2);
        transition: all .2s ease;
      }
    }
  }
    
`;

const Page010 = () => {
  const [compare, setCompare] = useState(false);

  const listItems = [
    "Smooth, safe and efficient performance",
    "Exceptional service and support",
    "Maximised uptime for optimising operations"
  ]
  return (
    <ParagraphMiddle hideLine title="In a nutshell" backgroundImage={Background} showHiabLogo>
      <StyledDiv>
        <div className="smart-wrapper">
          <p><strong>SMART. </strong>That’s HIAB in a single word. Our customers experience it as </p>
        </div>
        <UnorderedList items={listItems} />
        <Navigation backTo="/about-hiab/page012" to="/about-hiab/page014" />

        <p onClick={() => setCompare(true)} className="compare">Compare with EFFER</p>

        <div className={`popup ${compare ? "show-popup" : ""}`}>
          <div className="compare-text">
            <h2>EFFER a nutshell</h2>
            <ul>
              <li>Extreme performance and durability</li>
              <li>Highest level of customisation</li>
              <li>Unequalled personal attention</li>
            </ul>
            <img className="close-icon" src={closeIcon} alt="close" onClick={() => setCompare(false)} />
          </div>
        </div>

      </StyledDiv>
    </ParagraphMiddle>
  );
}

export default Page010;