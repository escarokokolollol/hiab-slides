import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import Background from "../../assets/images/effer_hiab-background.jpg";
import EfferLogo from "../../assets/icons/effer-logo.svg";
import HiabLogo from "../../assets/icons/hiab-logo.svg";
import Kettlebell from "../../assets/images/kettlebell.svg";

const StyledDiv = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1{
    text-align: center;
    font-size: 44px;
    margin: 0;
  }
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-gap: 40px;
    justify-items: center;
    align-items: end;
    margin: 0 auto;
    .item.first{
      .title{
        img{
          width: 100px;
        }
      }
    }
    .item.second{
      .title{
        img{
          width: 120px;
        }
      }
    }
    .item.third{
      .title{
        img{
          width: 140px;
        }
      }
    }
    .item.fourth{
      .title{
        img{
          width: 160px;
        }
      }
    }
    .item{
      .title{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        h3, h4{
          margin: 0;
        }
        h4{
          margin-bottom: 10px;
        }
        img{
          width: 100px;
        }
      }
      .logo{
        display: flex;
        justify-content: center;
        img{
          width: 100px;
        }
      }
    }
  }

  @media ${props => props.theme.firstBreakpoint}{
  
  }
  @media ${props => props.theme.secondBreakpoint}{
    .grid{
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{

  }
`;

const Page02 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <h1>Covering the full spectrum</h1>
          <div className="grid">

            <div className="item first">
              <div className="title">
                <h3>Low-Medium</h3>
                <h4>0-11 tm</h4>
                <img src={Kettlebell} alt="kettlebell"/>
              </div>
              <div className="logo">
                <img src={HiabLogo} alt="hiab logo"/>
              </div>
            </div>

            <div className="item second">
              <div className="title">
                <h3>Midrange</h3>
                <h4>0-11 tm</h4>
                <img src={Kettlebell} alt="kettlebell"/>
              </div>
              <div className="logo">
                <img src={EfferLogo} alt="effer logo"/>
                <img src={HiabLogo} alt="hiab logo"/>
              </div>
            </div>

            <div className="item third">
              <div className="title">
                <h3>Heavy</h3>
                <h4>0-11 tm</h4>
                <img src={Kettlebell} alt="kettlebell"/>
              </div>
              <div className="logo">
                <img src={EfferLogo} alt="effer logo"/>
                <img src={HiabLogo} alt="hiab logo"/>
              </div>
            </div>

            <div className="item fourth">
              <div className="title">
                <h3>Super heavy</h3>
                <h4>0-11 tm</h4>
                <img src={Kettlebell} alt="kettlebell"/>
              </div>
              <div className="logo">
                <img src={EfferLogo} alt="effer logo"/>
              </div>
            </div>

          </div>
          <Navigation backTo="/one-unbeatable-offer/page01" to="/one-unbeatable-offer/page03"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page02;