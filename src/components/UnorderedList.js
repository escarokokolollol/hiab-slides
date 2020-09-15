import React from "react";
import styled from "styled-components";

const UnorderedList = props => {
  const StyledList = styled.ul`
    li {
      // do what ever
    }
  `;

  console.log(props.items);

  return (
    <StyledList>
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </StyledList>
  );
};

export default UnorderedList;
