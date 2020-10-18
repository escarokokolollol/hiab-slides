import React, { useRef } from 'react'
import styled from "styled-components";

// components
import Application from "../../components/Application";
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import Background from "../../assets/images/effer_hiab-background.jpg";

const StyledDiv = styled.div`
  width:80%;
  margin: 0 auto;
  h1{
    margin: 0;
  }
  .container-grid{
    display: grid;
    grid-template-columns: 1fr 5fr;
    .menu{
      ul{
        position: fixed;
        padding: 0;
        li{
          list-style: none;
          margin: 4px 0;
          padding: 4px 8px;
          background: ${props => props.theme.red};
          transition: all .3s ease;
        }
        li:hover{
          cursor: pointer;
          background: #fff;
          color: ${props => props.theme.red};
          transition: all .3s ease;
        }
      }
    }

    .content-wrapper{
      h1{
        font-size: 44px;
      }

      article{
        padding: 20px 0;
        min-height: 100vh;
      }
    }
    .content:first-child{
      h1{
        background: red;
      }
    }
  }
`;



const Page05 = () => {

  const constructionRef = useRef(null);
  const roofingRef = useRef(null);
  const wasteRef = useRef(null);
  const specialtyRef = useRef(null);
  const heavyRef = useRef(null);
  const logisticsRef = useRef(null);
  const publicRef = useRef(null);
  const arboricultureRef = useRef(null);
  const glassRef = useRef(null);



  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="container-grid">
            <div className="menu">
              <ul>
                <li onClick={() => scrollToRef(constructionRef)}>Construction</li>
                <li onClick={() => scrollToRef(roofingRef)}>Roofing</li>
                <li onClick={() => scrollToRef(wasteRef)}>Waste & Recycling</li>
                <li onClick={() => scrollToRef(specialtyRef)}>Specialty</li>
                <li onClick={() => scrollToRef(heavyRef)}>Heavy Loads</li>
                <li onClick={() => scrollToRef(logisticsRef)}>Logistics</li>
                <li onClick={() => scrollToRef(publicRef)}>Public Spaces</li>
                <li onClick={() => scrollToRef(arboricultureRef)}>Arboriculture</li>
                <li onClick={() => scrollToRef(glassRef)}>Glass Plate Handling</li>
              </ul>
            </div>
            <div className="content-wrapper">
              <article ref={constructionRef}>
                <Application
                  title="Construction"
                  textUnderTitle="Involves a wide range of tasks, often carried out at very high heights, and a variety of materials, requiring appropriate accessories."
                />
              </article>

              <article ref={roofingRef}>
                <Application
                  title="Roofing"
                  textUnderTitle="Requires precise, powerful rotation as well excellent crane weight, boom length ratio and lifting capacity even at considerable heights."
                />
              </article>

              <article ref={wasteRef}>
                <Application
                  title="Waste & Recycling"
                  textUnderTitle="Requires a high degree of safety, ease-of-use and efficiency, as well as attention to environmental issues and city limitations."
                />
              </article>

              <article ref={specialtyRef}>
                <Application
                  title="specialtyRef"
                  textUnderTitle="Requires a high degree of safety, ease-of-use and efficiency, as well as attention to environmental issues and city limitations."
                />
              </article>

              <article ref={heavyRef}>
                <Application
                  title="heavyRef"
                  textUnderTitle="Requires a high degree of safety, ease-of-use and efficiency, as well as attention to environmental issues and city limitations."
                />
              </article>

              <article ref={logisticsRef}>
                <Application
                  title="logisticsRef"
                  textUnderTitle="Requires a high degree of safety, ease-of-use and efficiency, as well as attention to environmental issues and city limitations."
                />
              </article>

              <article ref={publicRef}>
                <Application
                  title="publicRef"
                  textUnderTitle="Requires a high degree of safety, ease-of-use and efficiency, as well as attention to environmental issues and city limitations."
                />
              </article>

              <article ref={arboricultureRef}>
                <Application
                  title="arboricultureRef"
                  textUnderTitle="Requires a high degree of safety, ease-of-use and efficiency, as well as attention to environmental issues and city limitations."
                />
              </article>

              <article ref={glassRef}>
                <Application
                  title="glassRef"
                  textUnderTitle="Requires a high degree of safety, ease-of-use and efficiency, as well as attention to environmental issues and city limitations."
                />
              </article>
            </div>
          </div>

          <Navigation backTo="/one-unbeatable-offer/page04" to="/one-unbeatable-offer/page06"/>
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page05;
