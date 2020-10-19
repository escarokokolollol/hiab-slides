import React, { useRef } from 'react'
import styled from "styled-components";

// components
import Application from "../../components/Application";
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import Background from "../../assets/images/effer_hiab-background.jpg";

// applications
import * as Construction from "./applications/Construction.js";

const StyledDiv = styled.div`
  width:96%;
  margin: 0 auto;
  .first-text{
    width: 90%;
    margin: 0 auto;
    text-align: center;
    p{
      margin: 26vh 0 6vh;
      font-size: 42px;
      font-weight: 900;
    }
  }
  .container-grid{
    display: grid;
    grid-template-columns: 2fr 7fr;
    .menu{
      padding-top:90px;
      ul{
        position: fixed;
        padding: 0;
        padding: 10px;
        background: rgba(0,0,0, 0.5);
        li{
          ${'' /* text-align: right; */}
          list-style: none;
          margin: 4px 0;
          padding: 6px 12px;
          margin: 6px 0;
          font-weight: 900;
          transition: all .3s ease;
          font-size: 14px;
        }
        li:hover{
          cursor: pointer;
          background: #fff;
          color: ${props => props.theme.red};
          transition: all .3s ease;
        }
      }
    }
  }

  .content-wrapper{
    article{
      padding-top: 100px;
      min-height: 100vh;
    }
  }

  @media ${props => props.theme.firstBreakpoint}{
  }

  @media ${props => props.theme.secondBreakpoint}{
  .container-grid{
    .menu{
      ul{
        li{
          font-size: 17px;
        }
      }
    }
  }

  @media ${props => props.theme.thirdBreakpoint}{
  .container-grid{
    .menu{
      ul{
        li{
          font-size: 24px;
        }
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

  console.log(Construction.Hiab);

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
            <div className="first-text">
              <p>Take a look at some of these most common applications to learn more.</p>
            </div>
              <article ref={constructionRef}>
                <Application
                  title="Construction"
                  textUnderTitle="Involves a wide range of tasks, often carried out at very high heights, and a variety of materials, requiring appropriate accessories."

                  hiabRange="Numerous light- to medium-capacity models for handling drywall, brick and block, as well as heavy HVAC equipment, compressors, pipe, etc."
                  hiabBenefits="Cost effective and built to withstand the stress of continuous loading and unloading close to the truck."
                  hiabSolutions={["HIAB small- and mid-size cranes", "K-Cranes for drywall handling"]}
                  hiabInnovations="Market leading functions such as LSS-V and CTC that make life much easier for the driver."


                  efferRange="Heavy-capacity models with numerous accessories including bucket, gripper and pallet forklift, for handling sand, gravel, bricks, concrete and marble slabs, etc."
                  efferBenefits="Can reach very high heights and deliver heavy loads higher and further. Light and compact for greater payload and profitability."
                  efferSolutions={["E2255, E955 & E1855", "New ICON 215 – world’s first crane with slewing ring in the 20 Tm category"]}
                  efferInnovations="CroSStab, V-Stab, Wind & Drive winch solution."
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
                  title="Specialty "
                  textUnderTitle="Requires a high degree of safety, ease-of-use and efficiency, as well as attention to environmental issues and city limitations."
                />
              </article>

              <article ref={heavyRef}>
                <Application
                  title="Heavy Loads"
                  textUnderTitle="Requires a high degree of safety, ease-of-use and efficiency, as well as attention to environmental issues and city limitations."
                />
              </article>

              <article ref={logisticsRef}>
                <Application
                  title="Logistics"
                  textUnderTitle="Requires a high degree of safety, ease-of-use and efficiency, as well as attention to environmental issues and city limitations."
                />
              </article>

              <article ref={publicRef}>
                <Application
                  title="Public Spaces"
                  textUnderTitle="Requires a high degree of safety, ease-of-use and efficiency, as well as attention to environmental issues and city limitations."
                />
              </article>

              <article ref={arboricultureRef}>
                <Application
                  title="Arboriculture"
                  textUnderTitle="Requires a high degree of safety, ease-of-use and efficiency, as well as attention to environmental issues and city limitations."
                />
              </article>

              <article ref={glassRef}>
                <Application
                  title="Glass Plate Handling"
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
