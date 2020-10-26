import React, { useState } from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import Background from "../../assets/images/hiab/hiab-bg-dark.jpg";
import HiabLogo from "../../assets/icons/hiab-logo.svg";
import closeIcon from "../../assets/icons/close-menu.svg";

const StyledDiv = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 90%;
  max-width:1200px;
  display: flex;
  flex-direction: column;
  text-align:center;
  justify-content: center;
  align-items: center;
  .logo{
    position: absolute;
    top: 20px;
    left: 30px;
  }

  h1{
    margin: 0;
  }

  .paragraphs{
    display: grid;
    grid-gap: 60px;
    grid-template-columns: 1fr 1fr;
    p{
      font-weight: 100;
      max-width: 890px;
      font-size: 22px;
      text-align: left;
    }
  }
  .compare{
    font-size: 22px;
    color: ${props => props.theme.red};
    position: absolute;
    bottom: 50px;
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
    h1{
      font-size: 52px;
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    h1{
      font-size: 72px;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    h1{
      font-size: 100px;
    }
  }
  .popup.show-popup{
    opacity: 1;
    z-index:1;
    transition: all .3s ease;
  }
  .popup{
    display: grid;
    justify-items: center;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    z-index: 100;
    padding: 20px;
    z-index:-1;
    opacity: 0;
    transition: all .3s ease;
    .compare-text{
      padding: 30px 50px;
      background: #555;
      color: #fff;
      width: 70%;
      max-width: 1000px;
      margin: 0 auto;
      position: relative;
      .paragraphs{
        display: grid;
        grid-gap: 40px;
        grid-template-columns: 1fr 1fr;
      }
      h2{
        margin:0;
        margin-top: 10px;
        font-size: 34px;
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

const Page09 = () => {

  const [compare, setCompare] = useState(false);

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
         <img className="logo" alt="hiab logo" src={HiabLogo} />

          <h1>What sets us apart</h1>
          <div className="paragraphs">
            <p>Unlike other manufacturers, HIAB is known for its unique position as <strong>the inventor of the original truck-mounted loader crane</strong> and has been pioneering the industry for over 75 years. Innovations such as Crane Tip Control and Semi Automatic Folding are examples of technologies designed to make crane operation safer, more efficient and easier to use than the competition.</p>
            <p>More than that, we are appreciated for leading the way in <strong>intelligent, data-driven solutions</strong> such as HiConnect that enable optimal service and support, and ultimately smarter operations and maximised uptime.</p>
          </div>

          <p onClick={() => setCompare(true)} className="compare">Compare with EFFER</p>

          <div className={`popup ${compare ? "show-popup" : ""}`}>
            <div className="compare-text">
              <h2>What sets EFFER apart</h2>
              <div className="paragraphs">
                <p>Unlike other manufacturers, EFFER offers customised loader cranes with <strong>exceptional reach and power-to-weight ratio in order to reach and carry what others can’t.</strong> Innovations such as CroSStab, V-Stab, continuous slewing and the use of second jibs all demonstrate technologies that make this possible.</p>
                <p>More than that, we are known for providing the <strong>industry’s highest level of crane customisation and personal attention,</strong> two of the most cited reasons why customers continue to make EFFER their number one choice.</p>
              </div>
              <img className="close-icon" src={closeIcon} alt="close" onClick={ () => setCompare(false)}/>
            </div>
          </div>
          <Navigation backTo="/about-hiab/page08" to="/about-hiab/page010"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page09;
