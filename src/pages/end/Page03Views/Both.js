import React, { useState } from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";

// components

// images
import image1 from "../../../assets/images/hiabeffer01.jpg"

const images = [
  {
    original: image1,
    description: "BOTH BOTH BOTH BOTH v BOTH BOTHBOTH v BOTH BOTH"
  },
  {
    original: image1,
    description: "BOTH BOTH BOTH BOTH v BOTH BOTHBOTH v BOTH BOTH"
  }
]

const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
  background: rgba(0,0,0,0.4);
  min-height: 100vh;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .inner{
    .gallery-wrapper{
      margin: 0 auto;
      width: 80%;
      .image-gallery-right-nav,
      .image-gallery-left-nav{
        color: ${props => props.theme.red};
        svg.image-gallery-svg{
          height: 70px;
        }
      }
      .image-gallery-slide:focus{
        outline: none;
      }
      .image-gallery-right-nav{
        margin-right: -100px;
      }
      .image-gallery-left-nav{
        margin-left: -100px;
      }
    }
  }
`;

const Both = () => {
  return (
    <div className="page-transition">
      <StyledDiv>
        <div className="inner">
          <div className="gallery-wrapper">
            <ImageGallery
              items={images}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={false}
            />
          </div>
        </div>
      </StyledDiv>
    </div>
  );

}

export default Both;