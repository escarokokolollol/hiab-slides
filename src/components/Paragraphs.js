import React from "react";
import styled from "styled-components";

// takes array and formats multiple <p> tags

const StyledDiv = styled.div`
  p{
    margin: 0;
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
