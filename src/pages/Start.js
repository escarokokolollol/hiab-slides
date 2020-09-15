import React from "react";
import styled from "styled-components";

// components
import BillboardHeading from "../components/BillboardHeading";

const Start = props => {
  const StyledDiv = styled.div`
    .content {
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
          <BillboardHeading
            text="TO THE HIAB/EFFER DIFFERENTIATION TOOL"
            color="red"
          />
          <BillboardHeading text="LEARN WHAT YOU NEED TO KNOW" />
        </div>
      </StyledDiv>
    </div>
  );
};

export default Start;
