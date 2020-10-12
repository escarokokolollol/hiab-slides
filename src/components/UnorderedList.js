import React from "react";
import styled from "styled-components";

/////////////////
//
//  PROPS
//  items, array with strings
//
//
/////////////////

const StyledList = styled.ul`
  list-style: none;
  li{
    position: relative;
    font-size: 22px;
  }
  li::before {
    content: "\\2022";
    color: red;
    font-size: 40px;
    line-height: 20px;
    font-weight: bold;
    display: inline-block; 
    width: 1em;
    margin-left: -1em;
    position: absolute;
    top:6px;
    left:16px;
    z-index: 99999;
  }
  @media ${props => props.theme.firstBreakpoint}{
    li{
      font-size: 26px;
    }
    li::before {
      top:10px;
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    li{
      font-size: 32px;
    }
    li::before {
      top:12px;
    }
  }

  @media ${props => props.theme.thirdBreakpoint}{
    li{
      font-size: 38px;
    }
    li::before {
      top:20px;
    }
  }
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
