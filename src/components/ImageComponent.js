import React from "react";
import styled from "styled-components";

const Paragraphs = props => {
  const StyledDiv = styled.div`
    img {
      width: 100%;
    }
  `;

  return (
    <StyledDiv>
      <img src={props.src} alt={props.src} />
    </StyledDiv>
  );
};

export default Paragraphs;
