import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  li {
    // do what ever
  }
`;

const UnorderedList = props => {
  return (
    <StyledList>
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </StyledList>
  );
};

export default UnorderedList;
