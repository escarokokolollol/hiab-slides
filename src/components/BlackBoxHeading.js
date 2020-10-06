import React from "react";
import styled from "styled-components";

//////////////
// 
//  PROPS:
//  textOver
//  Title
//  textUnder
// 
//////////////

const StyledDiv = styled.div`
  width: 50%;
  padding: 60px;
  background: rgba(20,20,20, 0.9);
  max-width: 800px;
  position: relative; ${'' /* relative is to position childs in this component */}
  h1{
    margin: 20px 0;
    font-size: 52px;
    line-height: 52px;
  }
  p.over{
    font-size: 20px;
  }
  p.under{
    font-size: 16px;
  }

  @media ${props => props.theme.secondBreakpoint}{
    h1{
      font-size: 76px;
      line-height: 76px;
    }
    p.over{
      font-size: 24px;
    }
    p.under{
      font-size: 20px;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    h1{
      font-size: 90px;
      line-height: 90px;
    }
    p.over{
      font-size: 28px;
    }
    p.under{
      font-size: 22px;
    }
  }
`;

const BlackBoxHeading = (props) => {
  return(
    <StyledDiv>
      {props.textOver ? <p className="over">{props.textOver}</p> : ""}
      {props.title ? <h1>{props.title}</h1> : ""}
      {props.textUnder ? <p className="under">{props.textUnder}</p> : ""}
      {props.children}
    </StyledDiv>
  );
}

export default BlackBoxHeading;