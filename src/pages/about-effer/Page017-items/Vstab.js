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

const Vstab = () => {
  return(
    <StyledDiv>
      <h1>V-STAB</h1>
      <div className="grid">
        <div className="left">
          <p>Guarantees same advantages of the CroSStab, but with ‘set’ angle stabilizers.  </p>

          <p>Can fold completely into a closed position, making it possible to work in tight and small spaces.  </p>

          <p>Also eliminates need and cost of front stabilizers, which are less effective.</p>
        </div>
        <div className="right">
          <iframe className="video" title="vstab" allowFullScreen width="560" height="315" src="https://www.youtube.com/embed/BIxWkeqtYQk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    </StyledDiv>
  );
}

export default Vstab;