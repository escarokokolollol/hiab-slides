import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  img {
    width: 100%;
  }
`;

const Paragraphs = props => {
  return (
    <StyledDiv>
      <img src={props.src} alt={props.src} />
    </StyledDiv>
  );
};

export default Paragraphs;
