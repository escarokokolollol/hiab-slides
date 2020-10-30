import React from "react";
import styled from "styled-components";

// components
import BackgroundImage from "../../components/styled/BackgroundImage.js";
import Navigation from "../../components/Navigation";

// images
import Background from "../../assets/images/effer_hiab-background.jpg";

const StyledDiv = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .wrapper{
    margin: 0 auto;
    width: 70%;
    h1{
      margin: 0;
      font-size: 64px;
    }
    p{
      font-size: 22px;
      a{
        color: ${props => props.theme.red};
      }
    }
  }
`;

const Page05 = () => {

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="wrapper">
            <h1>Learn more</h1>
            <p>To find more materials and information regarding EFFER products, please visit <a href="https://www.effer.com/">effer.com</a> and request access to the reserved area and to our product sharing platform, MySource. Or send a request via e-mail to <a href="mailto:carolina.deganutti@hiab.com">carolina.deganutti@hiab.com</a>.</p>
          </div>
          <Navigation backTo="/end08" to="/end010" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );

}

export default Page05;
