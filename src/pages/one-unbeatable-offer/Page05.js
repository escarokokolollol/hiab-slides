import React, { useState } from 'react'
import styled from "styled-components";

// components
import Application from "../../components/Application";
import Navigation from "../../components/Navigation";
import BackgroundImage from "../../components/styled/BackgroundImage";

// images
import constructionImage from "../../assets/images/applications/effercoolt01.jpg";
import wasteImage from "../../assets/images/applications/waste.jpg";
import specialityImage from "../../assets/images/applications/speciality.jpg";
import heavyImage from "../../assets/images/applications/heavy.jpg";
import glassImage from "../../assets/images/applications/glass.jpg";
import roofingImage from "../../assets/images/applications/ROOFING.jpg";
import logisticsImage from "../../assets/images/applications/logistics.jpg";
import publicImage from "../../assets/images/applications/PUBLIC.jpg";
import arboricultureImage from "../../assets/images/applications/JuletreTornplass.JPG";
import Background from "../../assets/images/effer/effer-bg-dark04.jpg";


const StyledDiv = styled.div`
  width:96%;
  margin: 0 auto;
  .first-text{
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
        margin: 0;
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
          transition: all .3s ease;
          font-size: 14px;
          font-family: 'HelveticaNeue' !important;
          font-weight: 100;
        }
        li:hover{
          cursor: pointer;
          background: #fff;
          color: ${props => props.theme.red};
          transition: all .3s ease;
        }
        li.active{
          color: ${props => props.theme.red};
          transition: all .3s ease;
        }
      }
    }
  }

  .content-wrapper{
    padding: 0 40px;
    article{
      background: rgba(0,0,0, 0.5);
      padding: 20px;
      margin-top: 90px;
      min-height: 100vh;
      padding-bottom: 40px;
      margin-bottom: 300px;
    }
  }

  @media ${props => props.theme.firstBreakpoint}{
  }

  @media ${props => props.theme.secondBreakpoint}{
  .container-grid{
    .menu{
      ul{
        li{
          font-size: 22px;
        }
      }
    }
  }

  @media ${props => props.theme.thirdBreakpoint}{
  .container-grid{
    .menu{
      ul{
        li{
          font-size: 28px;
        }
      }
    }
  }
`;



const Page05 = () => {

  const [showTitle, setShowTitle] = useState(false);
  const [construction, setConstruction] = useState(true);
  const [roofing, setRoofing] = useState(false);
  const [waste, setWaste] = useState(false);
  const [specialty, setSpecialty] = useState(false);
  const [heavy, setHeavy] = useState(false);
  const [logistics, setLogistics] = useState(false);
  const [publicSpaces, setPublicSpaces] = useState(false);
  const [arboriculture, setArboriculture] = useState(false);
  const [glass, setGlass] = useState(false);

  const setFalse = () => {
    setShowTitle(false)
    setConstruction(false);
    setRoofing(false);
    setWaste(false);
    setSpecialty(false);
    setHeavy(false);
    setLogistics(false);
    setPublicSpaces(false);
    setArboriculture(false);
    setGlass(false);
  }

  const whichContent = (val) => {
    setFalse();
    val === "construction" && setConstruction(true);
    val === "roofing" && setRoofing(true);
    val === "waste" && setWaste(true);
    val === "specialty" && setSpecialty(true);
    val === "heavy" && setHeavy(true);
    val === "logistics" && setLogistics(true);
    val === "publicSpaces" && setPublicSpaces(true);
    val === "arboriculture" && setArboriculture(true);
    val === "glass" && setGlass(true);
    window.scrollTo(0, 0);
  }

  return (
    <div className="page-transition">
      <BackgroundImage image={Background}>
        <StyledDiv>
          <div className="container-grid">
            <div className="menu">
              <ul>
                <li className={`${construction && "active"}`} onClick={() => whichContent("construction")}>Construction</li>
                <li className={`${roofing && "active"}`} onClick={() => whichContent("roofing")}>Roofing</li>
                <li className={`${waste && "active"}`} onClick={() => whichContent("waste")}>Waste & Recycling</li>
                <li className={`${specialty && "active"}`} onClick={() => whichContent("specialty")}>Specialty</li>
                <li className={`${heavy && "active"}`} onClick={() => whichContent("heavy")}>Heavy Loads</li>
                <li className={`${logistics && "active"}`} onClick={() => whichContent("logistics")}>Logistics</li>
                <li className={`${publicSpaces && "active"}`} onClick={() => whichContent("publicSpaces")}>Public Spaces</li>
                <li className={`${arboriculture && "active"}`} onClick={() => whichContent("arboriculture")}>Arboriculture</li>
                <li className={`${glass && "active"}`} onClick={() => whichContent("glass")}>Glass Plate Handling</li>
              </ul>
            </div>
            <div className="content-wrapper">
              {showTitle &&
                <div className="first-text">
                  <p>Take a look at some of these most common applications to learn more.</p>
                </div>
              }
              {construction &&
                <article>
                  <Application
                    title="Construction"
                    image={constructionImage}
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
              }

              {roofing &&
                <article>
                  <Application
                    image={roofingImage}
                    title="Roofing"
                    textUnderTitle="Requires precise, powerful rotation as well excellent crane weight, boom length ratio and lifting capacity even at considerable heights."
                    hiabRange="For this application, choose EFFER."

                    efferRange="Models from 50 Tm upward, and others too, are much appreciated in this sector. In Belgium EFFER cranes have replaced traditional telescopic aluminium cranes for the roofing sector."
                    efferBenefits="Precise and powerful rotation thanks to slewing ring. Decagonal structure of arms and extensions allows operation at significant heights with large loads applied to the winch without the risk of uncontrolled side slipping."
                    efferSolutions={["Light: E175 ", "Medium: E315", "Big: E395, E525 & E685"]}
                    efferInnovations={["Progress 2.0 with Assisted Winch Control (AWC) ", "Slewing ring on 20 Tm crane "]}
                  />
                </article>
              }

              {waste &&
                <article>
                  <Application
                    title="Waste & Recycling"
                    image={wasteImage}
                    textUnderTitle="Requires a high degree of safety, ease-of-use and efficiency, as well as attention to environmental issues and city limitations."

                    hiabRange="Specialized products like the 130 and 230W are designed to handle the stress of highly repetitive operation cycles that put stress on the structure."
                    hiabBenefits="Customers can count on a heavy duty product that can be used day after day, reducing operating costs and avoiding expensive repairs and downtimes."
                    hiabSolutions={["X-HiPro 130W & 230W"]}
                    hiabInnovations="Special functions like Semi Automatic Motion (SAM) assure continuous assistance to drivers who have to operate in tighter city environments."

                    efferRange="For  this application, choose HIAB."
                  />
                </article>
              }

              {specialty &&
                <article>
                  <Application
                    title="Specialty"
                    image={specialityImage}
                    textUnderTitle="In general, these are special projects for answering specific needs in sectors currently lacking cranes and solutions."

                    hiabRange="HIAB works with customers for a wide range of special sectors for which cranes and solutions still do not exist. The mining sector, wind turbines and defence are just some of the many sectors for which we work project-oriented. Also supporting technical innovations via our frameworks division which gives a complete package."
                    hiabBenefits="Specially designed cranes according to customer specifications. These are typically  special projects designed to fit specific needs."
                    hiabSolutions={["Special protection measures for cabling and hosing", "Anticorrosion or special materials for components that need to withstand demanding environmental conditions"]}
                    hiabInnovations="According to needs, e.g. many new control functions have been developed to answer specific needs or requests. The control systems allow the programming of many functions mainly for increasing operator and overall safety."

                    efferRange="For this application, choose HIAB."
                  />
                </article>
              }


              {heavy &&
                <article>
                  <Application
                    title="Heavy Loads"
                    image={heavyImage}
                    textUnderTitle="Requires even higher levels of safety to protect people and equipment, as well as the ability to handle loads of considerable size."

                    efferRange="Models from 100 Tm upwards, especially those equipped with Progress or Progress 2.0 electronic control systems are superior for handling heavy loads."
                    efferBenefits="Safe, stable and efficient. EFFER cranes offer one of the best power-to-weight ratios, perfect for taking on considerable payloads. Also, excellent stabilisation thanks to CroSStab and V-Stab."
                    efferSolutions="E955 & E2255"
                    efferInnovations={["Virtual Shield – protects the cab", "Progressive Deceleration System – eliminates risk of collision", "V-Stab – the only solution that provides 360° crane stability"]}

                    hiabRange="For this application, choose EFFER."
                  />
                </article>
              }

              {logistics &&
                <article>
                  <Application
                    title="Logistics"
                    image={logisticsImage}
                    textUnderTitle="This highly demanding sector requires reliable, intelligent solutions to maximise uptime for a fleet of often smaller cranes."

                    hiabRange="HIAB offers a full range of reliable, smaller sized cranes ideal for rental companies or supporting logistics companies that deliver materials. "
                    hiabBenefits="Built for continuous loading and dropping off of materials close to the truck. Excellent service organisation and intelligent, data-driven solutions help increase uptime and optimise operations."
                    hiabSolutions="HiConnect"
                    hiabInnovations="HiConnect – Real-time data about equipment’s operation and condition empowers fleet managers to improve performance and safety, and avoid unnecessary downtime."

                    efferRange="For this application, choose HIAB."
                  />
                </article>
              }

              {publicSpaces &&
                <article>
                  <Application
                    title="Public Spaces"
                    image={publicImage}
                    textUnderTitle="Requires small- to mid-size cranes for small removals, placing and maintenance of monuments, landscaping equipment, etc."

                    hiabRange="Numerous smaller sized cranes with accessories such as bucket or hoist are ideally suited for maintenance of public spaces. "
                    hiabBenefits="Cost-efficient for municipalities."
                    hiabSolutions="Ready to go certifications, full installation warranty and ready to go solutions."

                    efferRange="For this application, choose HIAB."
                  />
                </article>
              }

              {arboriculture &&
                <article>
                  <Application
                    title="Arboriculture"
                    image={arboricultureImage}
                    textUnderTitle="Requires excellent stability and versatility to manage tight spaces, uneven ground, and many types of obstacles."

                    hiabRange="For  this application, choose EFFER."

                    efferRange="Models from 60 Tm upwards equipped with Progress or Progress 2.0 electronic control systems, are ideal for the challenges of tree pruning, removal and transport; can also be mounted on tracked vehicles for extreme situations."
                    efferBenefits="Optimised stability, safety and efficiency thanks to electronic control systems coupled with CroSStab or V-Stab that provide good stabilisation even in the most challenging areas."
                    efferSolutions={["E175, E655 & E685"]}
                    efferInnovations={["CroSStab – possibility to position left stabiliser in many various angles", "V-Stab – enables use of lower class cranes to do same job of larger cranes with standard stabilisation"]}
                  />
                </article>
              }

              {glass &&
                <article>
                  <Application
                    title="Glass Plate Handling"
                    image={glassImage}
                    textUnderTitle="Requires a high degree of safety, ease-of-use and efficiency, as well as attention to environmental issues and city limitations."

                    efferRange="Models equipped with Progress or Progress 2.0 electronic control systems are ideal for carrying out these highly delicate tasks."
                    efferBenefits="Considerable payload thanks to lightweight structure; optimal precision, fluidity and speed, as well as unique ability to work with and maintain outstanding performance at negative angles."
                    efferSolutions={["Medium: E375", "Big: E395, E1750 & E2255"]}
                    efferInnovations={["Progressive Deceleration System – eliminates risk of collision", "The possibility to work with negative angles is a highly acclaimed function within this business and is available not only for the main column and booms, but also for the JIB. This double possibility is highly uncommon among the competition."]}

                    hiabRange="For  this application, choose EFFER."
                  />
                </article>
              }
            </div>
          </div>

          <Navigation backTo="/one-unbeatable-offer/page04" to="/end01" />
        </StyledDiv>
      </BackgroundImage>
    </div>
  );
}

export default Page05;
