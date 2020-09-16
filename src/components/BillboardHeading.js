import React from "react";
import styled from "styled-components";

const StyledHeadingOne = styled.h1`
  text-transform: uppercase;
`;

const BillboardHeading = props => {
  const style = {
    color: props.color ? props.color : "#fff",
  }

  return <StyledHeadingOne style={style}>{props.text}</StyledHeadingOne>;
};

export default BillboardHeading;
