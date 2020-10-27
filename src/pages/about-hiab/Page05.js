import React from "react";
import styled from "styled-components";
import ImageGallery from 'react-image-gallery';

// components
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import Background from "../../assets/images/hiab/hiab-bg.png";

const StyledDiv = styled.div`
  padding: ${props => props.theme.windowPadding};
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
  .item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #333;
    height: 80vh;
    width: 60vw;
    max-width: 700px;
    margin: 0 auto;
    iframe.video{
      margin-bottom: 20px;
      width: 200px;
    }
  }

  @media ${props => props.theme.firstBreakpoint}{
    .item{
      iframe.video{
        width: 400px;
      }
    }
  }
  @media ${props => props.theme.secondBreakpoint}{
    .item{
      iframe.video{
        width: 600px;
      }
    }
  }
  @media ${props => props.theme.thirdBreakpoint}{
    .item{
      max-width: 800px;
      iframe.video{
        width: 700px;
        height: 400px;
      }
    }
  }
`;

const item1 = () => {
  return (
    <div className="item">
      <div className="video-container">
        <iframe className="video" title="video" src="https://www.youtube.com/embed/oU4r2A70eh4" allowFullScreen width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <p><i>”Lawsons always pride themselves to have the best vehicles in the industry.”</i></p>
      <p>– Paul Sexton, Managing Director Lawsons with over 90 trucks</p>
    </div>
  );
};

const item2 = () => {
  return (
    <div className="item">
      <div className="video-container">
        <iframe className="video" title="video" src="https://www.youtube.com/embed/ylvdX9SkzTA" allowFullScreen width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <p><i>”They made our work safer and more productive.”</i></p>
      <p>– Martin Badúra, Technical Manager, OZO Ostrava s.r.o.</p>
    </div>
  );
};

const item3 = () => {
  return (
    <div className="item">
      <div className="video-container">
        <iframe className="video" title="video" src="https://www.youtube.com/embed/FRyzAqd4aAM" allowFullScreen width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <p><i>”The uptime of our loaders is absolutely paramount.”</i></p>
      <p>– Martin Reeve, Fleet Engineer, Wincanton PLC with 170 HIAB cranes</p>
    </div>
  );
}

const item4 = () => {
  return (
    <div className="item">
      <div className="video-container">
        <iframe className="video" title="video" src="https://www.youtube.com/embed/1Hf1mCUNQbs" allowFullScreen width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <p><i>”What else could you want?”</i></p>
      <p>– Bert van Horssen, AVRI Geldermalsen with 35 trucks for waste & recycling</p>
    </div>
  );
}

const testamonials = [
  {
    renderItem: item1
  },
  {
    renderItem: item2
  },
  {
    renderItem: item3
  },
  {
    renderItem: item4
  }
];

const Page05 = () => {

  const stopVideo = () => {
    let iframes = document.querySelectorAll(".video");

    console.log(iframes);
    iframes.forEach(iframe => {
      if (iframe !== null) {
        let iframeSrc = iframe.src;
        iframe.src = iframeSrc;
      }
    });
  }

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>

          <ImageGallery
            onSlide={() => stopVideo()}
            items={testamonials}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={false}
          />
          <Navigation backTo="/about-hiab/page06" to="/about-hiab/page07" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page05;