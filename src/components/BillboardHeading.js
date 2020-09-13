import React from "react";
import styled from "styled-components";

const BillboardHeading = props => {
  const StyledHeadingOne = styled.h1`
    color: ${props.color ? props.color : "#fff"};
  `;

  return <StyledHeadingOne>{props.text}</StyledHeadingOne>;
};

export default BillboardHeading;
