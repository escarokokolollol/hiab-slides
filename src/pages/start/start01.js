import React from "react";
import styled from "styled-components";

// images
import BigRedButton from "../../assets/icons/big-red-button.png";
import Background from "../../assets/images/effer_hiab-background.jpg";

// components
import BillboardHeading from "../../components/BillboardHeading";
import Paragraphs from "../../components/Paragraphs";
import LinkToAnywhere from "../../components/LinkToAnywhere";

const Start01 = props => {
  const paragraphText = [
    "A tool for understanding and communicating the strengths of the combined HIAB - EFFER offer"
  ];

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
        <div className="content">
          <BillboardHeading text="WELCOME" />
          <Paragraphs items={paragraphText}/>
          <LinkToAnywhere toWhere="/start02">
            <img src={BigRedButton} />
          </LinkToAnywhere>
        </div>
      </StyledDiv>
    </div>
  );
};

export default Start01;
