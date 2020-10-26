import React from "react";
import styled from "styled-components";

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";
import BlackBoxHeading from "../../components/BlackBoxHeading";

// images
import Background from "../../assets/images/effer/efferimg01.jpg";
import FacebookIcon from "../../assets/icons/facebook-icon.png";
import InstagramIcon from "../../assets/icons/instagram-icon.png";
import YoutubeIcon from "../../assets/icons/youtube-icon.png";

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
            <BlackBoxHeading  title="EFFER fans are our best ambassadors." textUnder="Customers tell us over and over again how much they value the attention we give them. How we sit down with them, listen to what they need, and build solutions that enable them to conquer those tough challenges. And their enthusiasm over the results is unmistakeable.">
              <div className="social-media"> 
                <img className="icon facebook-icon" src={FacebookIcon} alt="facebook"/>
                <img className="icon instagram-icon"src={InstagramIcon} alt="instagram"/>
                <img className="icon youtube-icon"src={YoutubeIcon} alt="youtube"/>
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