import React from "react";
import styled from "styled-components";

// takes array and formats multiple <p> tags
// must have array

const StyledDiv = styled.div`
  p{
    margin: 0 0 20px;
  }
`;

const Paragraphs = props => {
  return (
    <StyledDiv>
      {props.items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </StyledDiv>
  );
};

export default Paragraphs;
