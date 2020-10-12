import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  h1{
    text-align: center;
  }
  .grid{
    max-width: 1340px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
    .left{
      h3{
        margin-bottom: 0;
      }
      p{
        margin-top:0;
      }
    }
    .right{
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 56.25%;
      .video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  @media ${props => props.theme.firstBreakpoint}{
    h1{
      font-size: 28px;
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    h1{
      font-size: 38px;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    h1{
      font-size: 52px;
    }
  }
  
`;

const ContinuouSlewing = () => {
  return(
    <StyledDiv>
      <h1>Second jib</h1>
      <div className="grid">
        <div className="left">
          <p>no text yet no text yet no text yet no text yet no text yet no text yet no text yet no text yet </p>
        </div>
        <div className="right">
          <iframe className="video" allowFullScreen="allowfullscreen" width="560" height="315" src="https://www.youtube.com/embed/wbNNpnZ7BuU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </StyledDiv>
  );
}

export default ContinuouSlewing;