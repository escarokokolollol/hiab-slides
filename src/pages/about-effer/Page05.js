import React from "react";
import styled from "styled-components";
import ImageGallery from 'react-image-gallery';

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// testamonials 
import img01 from "../../assets/images/effer/testamonials/01.png";
import img02 from "../../assets/images/effer/testamonials/02.png";
import img03 from "../../assets/images/effer/testamonials/03.png";
import img04 from "../../assets/images/effer/testamonials/04.png";
import img05 from "../../assets/images/effer/testamonials/05.png";
import img06 from "../../assets/images/effer/testamonials/06.png";
import img07 from "../../assets/images/effer/testamonials/07.png";
import img08 from "../../assets/images/effer/testamonials/08.png";
import img09 from "../../assets/images/effer/testamonials/09.png";
import img10 from "../../assets/images/effer/testamonials/10.png";

// images
import Background from "../../assets/images/effer/effernewbg.png";

const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .gallery-container{
    padding: 10px;
    background: #000;
    width: 70%;

    .image-gallery-right-nav,
    .image-gallery-left-nav{
      color: ${props => props.theme.red};
      svg.image-gallery-svg{
        height: 70px;
      }
    }
    .image-gallery-right-nav{
      margin-right: -100px;
    }
    .image-gallery-left-nav{
      margin-left: -100px;
    }
  }
`;

const images = [
  {
    original: img01
  },
  {
    original: img02
  },
  {
    original: img03
  },
  {
    original: img04
  },
  {
    original: img05
  },
  {
    original: img06
  },
  {
    original: img07
  },
  {
    original: img08
  },
  {
    original: img09
  },
  {
    original: img10
  },

];

const Page05 = () => {
  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="gallery-container">
            <ImageGallery 
              items={images} 
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={false}
            />
          </div>
          <Navigation backTo="/about-effer/page04" to="/about-effer/page08"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page05;