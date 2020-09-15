import React from "react";
import styled from "styled-components";

// images
// import BigRedButton from "../../assets/icons/big-red-button.png";
import Background from "../../assets/images/effer_hiab-background.jpg";

// components
// import BillboardHeading from "../../components/BillboardHeading";
// import Paragraphs from "../../components/Paragraphs";
// import LinkToAnywhere from "../../components/LinkToAnywhere";

const Start02 = props => {
  const StyledDiv = styled.div`
    .content {
      height: 100vh;
      width: 100vw;
      background-image: url(${Background});
      background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `;
  return (
    <div className="page-transition">
      <StyledDiv>
        <h1>Start02</h1>
      </StyledDiv>
    </div>
  );
};

export default Start02;
