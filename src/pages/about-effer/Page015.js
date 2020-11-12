import React, { useState } from "react";
import styled from "styled-components";

// components 
import Navigation from "../../components/Navigation";
import UnorderedList from "../../components/UnorderedList";
// page template
import ParagraphMiddle from "../../pagetemplates/ParagraphMiddle";
// images
import Background from "../../assets/images/effer/effernewbg.png";
import closeIcon from "../../assets/icons/close-menu.svg";

const StyledDiv = styled.div`
  .paragraph-middle{
    font-size: 76px !important;
  }
  .extreme-wrapper{
    text-align: center;
    p{
      margin-bottom: 40px;
      font-size: 26px;
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
    padding: 20px;
    opacity: 0;
    z-index:-1;
    transition: all .3s ease;
    .compare-text{
      padding: 30px 50px;
      background: #555;
      color: #fff;
      margin: 0 auto;
      position: relative;
      max-width: 900px;
      text-align: center;
      p{
        font-size: 22px;
      }
      h2{
        text-align: center;
      }
      ul{
        max-width:800px;
        width: max-content;
        margin: 0 auto;
        li{
          text-align: left;
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

const Page015 = () => {
  const [compare, setCompare] = useState(false);
  const listItems = [
    "Extreme performance, reach and durability",
    "Highest level of customisation",
    "Unequalled personal attention"
  ]
  return (
    <StyledDiv>
      <ParagraphMiddle hideLine title="EXTREME." backgroundImage={Background} showEfferLogo={true} >
        <div className="extreme-wrapper">
          <p>That’s EFFER in a single word. Our customers experience it as</p>
        </div>
        <UnorderedList items={listItems} />
        <Navigation backTo="/about-effer/page017" to="/about-effer/page019" />
        <p onClick={() => setCompare(true)} className="compare">Compare with HIAB</p>

        <div className={`popup ${compare ? "show-popup" : ""}`}>
          <div className="compare-text">
            <p><strong>SMART. </strong></p>
            <p>That’s HIAB in a single word. Our customers experience it as</p>
            <ul>
              <li>Smooth, safe and efficient performance</li>
              <li>Exceptional service and support</li>
              <li>Maximised uptime for optimising operations</li>
            </ul>
            <img className="close-icon" src={closeIcon} alt="close" onClick={() => setCompare(false)} />
          </div>
        </div>
      </ParagraphMiddle>
    </StyledDiv>
  );
}

export default Page015;