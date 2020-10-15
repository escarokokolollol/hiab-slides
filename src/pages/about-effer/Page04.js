import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import BlackBoxHeading from "../../components/BlackBoxHeading";

// images
import Background from "../../assets/images/effer/effer-big-05.jpg";
import FacebookIcon from "../../assets/icons/facebook-icon.png";
import InstagramIcon from "../../assets/icons/instagram-icon.png";

const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  .BlackBoxHeading-wrapper{
    width: 90%;
    position: absolute;
    bottom: 60px;
    div{
    }
    .social-media{
      text-align: center;
      img{
        width: 50px;
        margin-right: 40px;
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .BlackBoxHeading-wrapper{
      h1{
        font-size:80px;
        line-height:80px;
      }
    }
  }
`;

const Page04 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="BlackBoxHeading-wrapper">
            <BlackBoxHeading titleOver="Today," title="EFFER fans are our best ambassadors." textUnder="Our customers love EFFER because of what they are able to do with our cranes that they can’t accomplish with others. But also because of how we treat them. For if there’s one thing we’ve always been very good at, it’s sitting down with them, listening to what they need and building solutions around those needs.">
              <div className="social-media"> 
                <img className="facebook-icon" src={FacebookIcon} alt="facebook"/>
                <img className="instagram-icon"src={InstagramIcon} alt="instagram"/>
              </div>
            </BlackBoxHeading>
          </div>
          <Navigation backTo="/about-effer/page03" to="/about-effer/page05"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page04;