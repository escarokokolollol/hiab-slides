import React from "react";
import styled from "styled-components";

// images
import HiabLogo from "../assets/icons/hiab-logo.svg";
import EfferLogo from "../assets/icons/effer-logo.svg";

const Logos = props => {

  const StyledDiv = styled.div`
    .logos-wrapper{
        width: 100%;
        
        .logos{
          position: absolute;
          bottom: 10px;
          img{
            width: 140px;
          }
        }
      }
    }

    @media (min-width: 960px){
      .logos-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
          .logos{
            bottom: 40px;
          }
      }
    }
  `;

  return (
    <StyledDiv>
      <div className="logos-wrapper">
        <div className="logos">
          <img src={HiabLogo} alt="Hiab logotype"/>
          <img src={EfferLogo} alt="Effer logotype"/>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Logos;
