import React from "react";
import styled from "styled-components";

import Backbutton from "./BackButton";
import ForwardButton from "./ForwardButton";

const Navigation = props => {
    const NavigationWrapper = styled.div`
        display: flex;
        justify-content: space-between;
        position: fixed;
        width:100%;
        top: 50vh;
        div{
            background: #333;
            *{
                color: #fff;
            }
        }
  `;
  return (
    <NavigationWrapper>
        <Backbutton toWhere={props.backToWhere}/>
        <ForwardButton toWhere={props.forwardToWhere}/>
    </NavigationWrapper>
  );
};

export default Navigation;