import React from "react";
import styled from "styled-components"

// components
import BackButton from "../components/BackButton";
import ForwardButton from "../components/ForwardButton";

const Start = props => {

  const StyledDiv = styled.div`
    .content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `;

  return (
    <div className="page-transition">
      <StyledDiv >
        <div className="content">
          <h1>WELCOME</h1>
          <h2>TO THE HIAB/EFFER DIFFERENTIATION TOOL</h2>
          <h2>LEARN WHAT YOU NEED TO KNOW</h2>
        </div>
        <BackButton />
        <ForwardButton />
      </StyledDiv>
    </div>
  );
};

export default Start;
